<?php
/**
 * Softecof contact form endpoint.
 *
 * Static export has no Next.js server, so the hosted site posts here and this
 * script sends the enquiry through Hostinger Email SMTP. That keeps the message
 * on the same mail servers as contact@softecof.com (SPF include:_spf.mail.hostinger.com)
 * instead of PHP mail(), which Hostinger documents as more likely to be dropped.
 *
 * Credentials are not stored in this file. Put them outside the website folder:
 *
 *   public_html/api/contact.php          ← this file, uploaded with the site
 *   private/softecof-mail.php            ← next to public_html, not inside it
 *
 * Copy deploy/softecof-mail.example.php from the repository to that path and
 * set the mailbox password. Alternatively set SOFTECOF_MAIL_CONFIG to an
 * absolute path outside the web root. A config file inside the website folder
 * is ignored.
 *
 * The visitor's address is the Reply-To header. The From address is the
 * authenticated mailbox, which is what Hostinger accepts.
 */

declare(strict_types=1);

if (!defined('SOFTECOF_CONTACT_LIBRARY')) {
    contact_dispatch();
}

function contact_dispatch(): void
{
    ini_set('display_errors', '0');
    error_reporting(E_ALL);

    try {
        [$status, $body] = contact_dispatch_inner();
    } catch (Throwable $e) {
        error_log('softecof contact: ' . $e->getMessage());
        $status = 500;
        $body = ['ok' => false, 'error' => 'server'];
    }

    if (!headers_sent()) {
        header('Content-Type: application/json; charset=utf-8');
        header('X-Content-Type-Options: nosniff');
        header('Cache-Control: no-store');
        http_response_code($status);
    }

    echo json_encode($body, JSON_UNESCAPED_UNICODE);
}

/**
 * @return array{0:int,1:array<string,mixed>}
 */
function contact_dispatch_inner(): array
{
    $method = (string)($_SERVER['REQUEST_METHOD'] ?? 'GET');
    if ($method === 'OPTIONS') {
        return [204, []];
    }
    if ($method !== 'POST') {
        return [405, ['ok' => false, 'error' => 'method']];
    }

    $length = (int)($_SERVER['CONTENT_LENGTH'] ?? 0);
    if ($length > 65536) {
        return [413, ['ok' => false, 'error' => 'too_large']];
    }

    return handle_contact(contact_input(), $_SERVER, contact_load_config());
}

/**
 * @return array<string,mixed>
 */
function contact_input(): array
{
    $type = (string)($_SERVER['CONTENT_TYPE'] ?? '');
    if (stripos($type, 'application/json') !== false) {
        $raw = file_get_contents('php://input');
        if (!is_string($raw)) {
            return [];
        }
        $data = json_decode($raw, true);
        return is_array($data) ? $data : [];
    }

    return $_POST;
}

/**
 * @param array<string,mixed> $post
 * @param array<string,mixed> $server
 * @param array<string,mixed> $config
 * @return array{0:int,1:array<string,mixed>}
 */
function handle_contact(array $post, array $server, array $config, ?callable $mailer = null, ?int $now = null): array
{
    $now = $now ?? time();

    if (!empty($post['_too_large'])) {
        return [413, ['ok' => false, 'error' => 'too_large']];
    }

    if (!contact_origin_allowed($server, $config)) {
        return [403, ['ok' => false, 'error' => 'origin']];
    }

    if (contact_honeypot_tripped($post)) {
        $limit = contact_rate_limit($config, $server, $now);
        if (!$limit['allowed']) {
            return [429, ['ok' => false, 'error' => 'rate_limit']];
        }
        return [200, ['ok' => true]];
    }

    $validated = contact_validate($post);
    if (!$validated['ok']) {
        return [400, ['ok' => false, 'error' => 'validation', 'fields' => $validated['errors']]];
    }

    if (!contact_config_is_usable($config)) {
        error_log('softecof contact: mail config is missing or incomplete. See deploy/softecof-mail.example.php.');
        return [503, ['ok' => false, 'error' => 'config']];
    }

    $limit = contact_rate_limit($config, $server, $now);
    if (!$limit['allowed']) {
        return [429, ['ok' => false, 'error' => 'rate_limit']];
    }

    $message = contact_build_message($validated['data'], $config, contact_client_ip($server));
    $sender = $mailer ?? 'contact_deliver';

    try {
        $sender($config, $message);
    } catch (Throwable $e) {
        error_log('softecof contact: send failed: ' . $e->getMessage());
        return [500, ['ok' => false, 'error' => 'mail']];
    }

    return [200, ['ok' => true]];
}

/**
 * @param array<string,mixed> $post
 */
function contact_honeypot_tripped(array $post): bool
{
    if (!array_key_exists('sof_hp', $post)) {
        return false;
    }
    $value = $post['sof_hp'];
    if (is_array($value)) {
        return $value !== [];
    }
    if (!is_string($value)) {
        return true;
    }
    return trim($value) !== '';
}

/**
 * @param array<string,mixed> $post
 * @return array{ok:bool,errors:array<string,string>,data:array<string,string>}
 */
function contact_validate(array $post): array
{
    $errors = [];
    $name = contact_collect_name($post);
    $email = contact_clean_line(contact_string($post, 'email'));
    $company = contact_clean_line(contact_string($post, 'company'));
    $phone = contact_clean_line(contact_string($post, 'phone'));
    $service = contact_clean_line(contact_string($post, 'service'));
    $message = contact_clean_message(contact_string($post, 'message'));

    if ($name === '') {
        $errors['name'] = 'Enter your name.';
    } elseif (contact_strlen($name) > 130) {
        $errors['name'] = 'Name is too long.';
    }

    if ($email === '' || contact_strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Enter a valid email address.';
    }

    if ($company !== '' && contact_strlen($company) > 120) {
        $errors['company'] = 'Company name is too long.';
    }

    if ($phone !== '' && !preg_match('/^[0-9+().\\-\\s]{6,40}$/', $phone)) {
        $errors['phone'] = 'Enter a valid phone number.';
    }

    if (!in_array($service, contact_services(), true)) {
        $errors['service'] = 'Select a service.';
    }

    if ($message === '') {
        $errors['message'] = 'Enter a message.';
    } elseif (contact_strlen($message) < 10) {
        $errors['message'] = 'Please enter at least 10 characters.';
    } elseif (contact_strlen($message) > 5000) {
        $errors['message'] = 'Message is too long.';
    }

    return [
        'ok' => $errors === [],
        'errors' => $errors,
        'data' => [
            'name' => $name,
            'email' => $email,
            'company' => $company,
            'phone' => $phone,
            'service' => $service,
            'message' => $message,
        ],
    ];
}

/**
 * Service labels must match the select options in src/components/ContactUs.tsx.
 *
 * @return list<string>
 */
function contact_services(): array
{
    return [
        'IT & Tech Support',
        'Custom Software',
        'SaaS Services',
        'Web & Digital',
        'Other',
    ];
}

/**
 * @param array<string,mixed> $post
 */
function contact_collect_name(array $post): string
{
    $name = contact_clean_line(contact_string($post, 'name'));
    if ($name !== '') {
        return $name;
    }
    $first = contact_clean_line(contact_string($post, 'first_name'));
    $last = contact_clean_line(contact_string($post, 'last_name'));
    return trim($first . ' ' . $last);
}

/**
 * @param array<string,mixed> $post
 */
function contact_string(array $post, string $key): string
{
    if (!isset($post[$key]) || !is_string($post[$key])) {
        return '';
    }
    return $post[$key];
}

function contact_clean_line(string $value): string
{
    $value = preg_replace("/[\\x00-\\x1F\\x7F]/", '', $value) ?? $value;
    return trim($value);
}

function contact_clean_message(string $value): string
{
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = preg_replace("/[\\x00-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]/", '', $value) ?? $value;
    return trim($value);
}

function contact_strlen(string $value): int
{
    if (function_exists('mb_strlen')) {
        return mb_strlen($value, 'UTF-8');
    }
    return strlen($value);
}

function contact_substr(string $value, int $start, int $length): string
{
    if (function_exists('mb_substr')) {
        return mb_substr($value, $start, $length, 'UTF-8');
    }
    return substr($value, $start, $length);
}

/**
 * @param array<string,mixed> $config
 */
function contact_config_is_usable(array $config): bool
{
    $password = (string)($config['password'] ?? '');
    $placeholders = ['', 'REPLACE_WITH_MAILBOX_PASSWORD', 'changeme', 'password'];
    if (in_array($password, $placeholders, true)) {
        return false;
    }

    foreach (['host', 'username', 'from_email', 'to_email'] as $key) {
        if (trim((string)($config[$key] ?? '')) === '') {
            return false;
        }
    }

    foreach (['username', 'from_email', 'to_email'] as $key) {
        if (!filter_var((string)$config[$key], FILTER_VALIDATE_EMAIL)) {
            return false;
        }
    }

    return true;
}

/**
 * @return array<string,mixed>
 */
function contact_load_config(): array
{
    $candidates = [];
    $env = getenv('SOFTECOF_MAIL_CONFIG');
    if (is_string($env) && $env !== '') {
        $candidates[] = $env;
    }

    $docRoot = (string)($_SERVER['DOCUMENT_ROOT'] ?? '');
    if ($docRoot !== '') {
        $candidates[] = dirname($docRoot) . DIRECTORY_SEPARATOR . 'private' . DIRECTORY_SEPARATOR . 'softecof-mail.php';
    }

    // public_html/api → parent of the site folder, and one level further if the
    // site files were uploaded into a nested directory.
    $candidates[] = dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . 'private' . DIRECTORY_SEPARATOR . 'softecof-mail.php';
    $candidates[] = dirname(__DIR__, 3) . DIRECTORY_SEPARATOR . 'private' . DIRECTORY_SEPARATOR . 'softecof-mail.php';

    $docReal = $docRoot !== '' ? realpath($docRoot) : false;

    foreach ($candidates as $path) {
        if (!is_file($path) || !is_readable($path)) {
            continue;
        }
        $real = realpath($path);
        if ($real === false) {
            continue;
        }
        if (is_string($docReal) && contact_path_is_inside($real, $docReal)) {
            error_log('softecof contact: refusing mail config inside the web root (' . $real . '). Move it next to public_html, in private/softecof-mail.php.');
            continue;
        }

        try {
            $loaded = require $real;
        } catch (Throwable $e) {
            error_log('softecof contact: config could not be read: ' . $e->getMessage());
            continue;
        }

        if (is_array($loaded)) {
            return $loaded;
        }
    }

    return [];
}

function contact_path_is_inside(string $path, string $root): bool
{
    $root = rtrim($root, DIRECTORY_SEPARATOR);
    return $path === $root || str_starts_with($path, $root . DIRECTORY_SEPARATOR);
}

/**
 * @param array<string,mixed> $server
 * @param array<string,mixed> $config
 */
function contact_origin_allowed(array $server, array $config): bool
{
    $source = '';
    if (isset($server['HTTP_ORIGIN']) && is_string($server['HTTP_ORIGIN']) && $server['HTTP_ORIGIN'] !== '') {
        $source = $server['HTTP_ORIGIN'];
    } elseif (isset($server['HTTP_REFERER']) && is_string($server['HTTP_REFERER']) && $server['HTTP_REFERER'] !== '') {
        $source = $server['HTTP_REFERER'];
    }

    if ($source === '') {
        return true;
    }

    $host = parse_url($source, PHP_URL_HOST);
    if (!is_string($host) || $host === '') {
        return false;
    }
    $host = strtolower($host);

    $httpHost = strtolower((string)($server['HTTP_HOST'] ?? ''));
    $httpHost = preg_replace('/:\d+$/', '', $httpHost) ?? $httpHost;

    $allowed = ['softecof.com', 'www.softecof.com'];
    $extra = $config['allowed_hosts'] ?? [];
    if (is_array($extra)) {
        foreach ($extra as $item) {
            if (is_string($item) && $item !== '') {
                $allowed[] = strtolower($item);
            }
        }
    }

    $localHosts = ['localhost', '127.0.0.1'];
    if (in_array($httpHost, $localHosts, true)) {
        $allowed = array_merge($allowed, $localHosts);
    }

    if ($host === $httpHost && in_array($httpHost, $allowed, true)) {
        return true;
    }

    return in_array($host, $allowed, true);
}

/**
 * @param array<string,mixed> $server
 */
function contact_client_ip(array $server): string
{
    $ip = (string)($server['REMOTE_ADDR'] ?? '');
    if (filter_var($ip, FILTER_VALIDATE_IP)) {
        return $ip;
    }
    return '0.0.0.0';
}

/**
 * Eight accepted submissions per hour per address, and at most one every 10 seconds.
 * Storage problems fail open so a permissions issue does not take the form down.
 *
 * @param array<string,mixed> $config
 * @param array<string,mixed> $server
 * @return array{allowed:bool,reason:string}
 */
function contact_rate_limit(array $config, array $server, int $now): array
{
    $ip = contact_client_ip($server);
    $dir = contact_rate_dir($config, $server);
    $max = (int)($config['rate_limit_max'] ?? 8);
    $window = (int)($config['rate_limit_window'] ?? 3600);
    $minInterval = (int)($config['min_interval'] ?? 10);
    if ($max < 1) {
        $max = 1;
    }
    if ($window < 1) {
        $window = 1;
    }

    if (!is_dir($dir) && !@mkdir($dir, 0700, true) && !is_dir($dir)) {
        error_log('softecof contact: rate limit directory is not writable');
        return ['allowed' => true, 'reason' => 'storage'];
    }

    $path = $dir . DIRECTORY_SEPARATOR . hash('sha256', 'softecof-contact|' . $ip) . '.json';
    $handle = @fopen($path, 'c+');
    if ($handle === false) {
        error_log('softecof contact: rate limit file is not writable');
        return ['allowed' => true, 'reason' => 'storage'];
    }

    try {
        if (!flock($handle, LOCK_EX)) {
            error_log('softecof contact: rate limit lock failed');
            return ['allowed' => true, 'reason' => 'storage'];
        }

        $raw = stream_get_contents($handle);
        $state = json_decode(is_string($raw) ? $raw : '', true);
        $hits = [];
        if (is_array($state) && isset($state['hits']) && is_array($state['hits'])) {
            foreach ($state['hits'] as $hit) {
                if (is_int($hit) || (is_string($hit) && ctype_digit($hit))) {
                    $ts = (int)$hit;
                    if ($ts > $now - $window) {
                        $hits[] = $ts;
                    }
                }
            }
        }

        $last = 0;
        foreach ($hits as $ts) {
            if ($ts > $last) {
                $last = $ts;
            }
        }

        if ($minInterval > 0 && $last > 0 && ($now - $last) < $minInterval) {
            return ['allowed' => false, 'reason' => 'interval'];
        }
        if (count($hits) >= $max) {
            return ['allowed' => false, 'reason' => 'quota'];
        }

        $hits[] = $now;
        rewind($handle);
        if (!ftruncate($handle, 0)) {
            error_log('softecof contact: rate limit truncate failed');
            return ['allowed' => true, 'reason' => 'storage'];
        }
        $written = fwrite($handle, (string)json_encode(['hits' => array_values($hits)]));
        if ($written === false) {
            error_log('softecof contact: rate limit write failed');
            return ['allowed' => true, 'reason' => 'storage'];
        }
        fflush($handle);
        @chmod($path, 0600);
        return ['allowed' => true, 'reason' => 'ok'];
    } finally {
        flock($handle, LOCK_UN);
        fclose($handle);
    }
}

/**
 * @param array<string,mixed> $config
 * @param array<string,mixed> $server
 */
function contact_rate_dir(array $config, array $server): string
{
    $dir = trim((string)($config['rate_limit_dir'] ?? ''));
    $docRoot = (string)($server['DOCUMENT_ROOT'] ?? '');
    if ($dir !== '' && $docRoot !== '') {
        $docReal = realpath($docRoot);
        $parent = realpath(dirname($dir));
        if (is_string($docReal) && is_string($parent) && contact_path_is_inside($parent, $docReal)) {
            $dir = '';
        }
    }
    if ($dir === '') {
        $dir = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'softecof-contact-rate';
    }
    return $dir;
}

/**
 * @param array<string,string> $data
 * @param array<string,mixed> $config
 * @return array<string,string>
 */
function contact_build_message(array $data, array $config, string $ip): array
{
    $lines = [
        'New enquiry from the Softecof website',
        '',
        'Name: ' . $data['name'],
        'Email: ' . $data['email'],
    ];
    if ($data['phone'] !== '') {
        $lines[] = 'Phone: ' . $data['phone'];
    }
    if ($data['company'] !== '') {
        $lines[] = 'Company: ' . $data['company'];
    }
    $lines[] = 'Service: ' . $data['service'];
    $lines[] = '';
    $lines[] = 'Message:';
    $lines[] = $data['message'];
    $lines[] = '';
    $lines[] = '---';
    $lines[] = 'IP: ' . $ip;
    $lines[] = 'Time: ' . gmdate('Y-m-d H:i:s') . ' UTC';

    $subject = 'Website enquiry: ' . $data['service'] . ' - ' . $data['name'];
    if (contact_strlen($subject) > 140) {
        $subject = contact_substr($subject, 0, 137) . '...';
    }

    return [
        'from_email' => (string)$config['from_email'],
        'from_name' => trim((string)($config['from_name'] ?? 'Softecof Website')),
        'to_email' => (string)$config['to_email'],
        'to_name' => trim((string)($config['to_name'] ?? 'Softecof')),
        'reply_to_email' => $data['email'],
        'reply_to_name' => $data['name'],
        'subject' => $subject,
        'body' => implode("\n", $lines),
    ];
}

/**
 * @param array<string,string> $message
 */
function contact_build_rfc822(array $message): string
{
    $headers = [
        'Date: ' . gmdate('D, d M Y H:i:s') . ' +0000',
        'From: ' . contact_format_address($message['from_email'], $message['from_name']),
        'To: ' . contact_format_address($message['to_email'], $message['to_name']),
        'Reply-To: ' . contact_format_address($message['reply_to_email'], $message['reply_to_name']),
        'Subject: ' . contact_encode_subject($message['subject']),
        'Message-ID: <' . bin2hex(random_bytes(16)) . '@softecof.com>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: quoted-printable',
    ];

    $body = quoted_printable_encode($message['body']);
    return implode("\r\n", $headers) . "\r\n\r\n" . $body;
}

function contact_format_address(string $email, string $name): string
{
    $email = contact_clean_line($email);
    $name = contact_clean_line($name);
    if ($name === '') {
        return $email;
    }
    if (preg_match('/^[\x20-\x7E]*$/', $name)) {
        $escaped = str_replace(['\\', '"'], ['\\\\', '\\"'], $name);
        return '"' . $escaped . '" <' . $email . '>';
    }
    return contact_encode_words($name) . ' <' . $email . '>';
}

function contact_encode_subject(string $subject): string
{
    $subject = contact_clean_line($subject);
    if ($subject === '' || preg_match('/^[\x20-\x7E]*$/', $subject)) {
        return $subject;
    }
    return contact_encode_words($subject);
}

function contact_encode_words(string $text): string
{
    $parts = [];
    $chunk = '';
    $chunkBytes = 0;
    $chars = preg_split('//u', $text, -1, PREG_SPLIT_NO_EMPTY);
    if (!is_array($chars)) {
        return '=?UTF-8?B?' . base64_encode($text) . '?=';
    }
    foreach ($chars as $char) {
        $len = strlen($char);
        if ($chunk !== '' && ($chunkBytes + $len) > 30) {
            $parts[] = '=?UTF-8?B?' . base64_encode($chunk) . '?=';
            $chunk = '';
            $chunkBytes = 0;
        }
        $chunk .= $char;
        $chunkBytes += $len;
    }
    if ($chunk !== '') {
        $parts[] = '=?UTF-8?B?' . base64_encode($chunk) . '?=';
    }
    return implode(' ', $parts);
}

/**
 * @param array<string,mixed> $config
 * @param array<string,string> $message
 */
function contact_deliver(array $config, array $message): void
{
    if (!empty($config['dry_run'])) {
        $path = (string)($config['dry_run_path'] ?? '');
        if ($path === '' || !is_dir(dirname($path))) {
            throw new RuntimeException('dry_run_path is not writable');
        }
        $raw = contact_build_rfc822($message);
        if (file_put_contents($path, $raw) === false) {
            throw new RuntimeException('Could not write dry-run message');
        }
        return;
    }

    smtp_send($config, $message);
}

/**
 * @param array<string,mixed> $config
 * @param array<string,string> $message
 */
function smtp_send(array $config, array $message): void
{
    $host = (string)$config['host'];
    $encryption = strtolower((string)($config['encryption'] ?? 'ssl'));
    if ($encryption === 'tls') {
        $encryption = 'starttls';
    }
    if (!in_array($encryption, ['ssl', 'starttls', 'none'], true)) {
        throw new RuntimeException('Unsupported SMTP encryption');
    }

    $port = (int)($config['port'] ?? 0);
    if ($port <= 0) {
        $port = $encryption === 'starttls' ? 587 : 465;
    }
    $timeout = (int)($config['timeout'] ?? 20);
    if ($timeout < 5) {
        $timeout = 5;
    }

    $verify = !array_key_exists('verify_tls', $config) || (bool)$config['verify_tls'];
    $remote = ($encryption === 'ssl' ? 'ssl' : 'tcp') . '://' . $host . ':' . $port;
    $context = stream_context_create([
        'ssl' => [
            'verify_peer' => $verify,
            'verify_peer_name' => $verify,
            'allow_self_signed' => !$verify,
            'SNI_enabled' => true,
            'peer_name' => $host,
        ],
    ]);

    $errno = 0;
    $errstr = '';
    $fp = @stream_socket_client($remote, $errno, $errstr, $timeout, STREAM_CLIENT_CONNECT, $context);
    if ($fp === false) {
        throw new RuntimeException('SMTP connect failed: ' . $errstr . ' (' . $errno . ')');
    }
    stream_set_timeout($fp, $timeout);

    try {
        smtp_expect($fp, [220]);
        smtp_cmd($fp, 'EHLO softecof.com', [250]);
        if ($encryption === 'starttls') {
            smtp_cmd($fp, 'STARTTLS', [220]);
            smtp_enable_tls($fp);
            smtp_cmd($fp, 'EHLO softecof.com', [250]);
        }
        smtp_cmd($fp, 'AUTH LOGIN', [334]);
        smtp_cmd($fp, base64_encode((string)$config['username']), [334]);
        smtp_cmd($fp, base64_encode((string)$config['password']), [235]);
        smtp_cmd($fp, 'MAIL FROM:<' . $message['from_email'] . '>', [250]);
        smtp_cmd($fp, 'RCPT TO:<' . $message['to_email'] . '>', [250, 251]);
        smtp_cmd($fp, 'DATA', [354]);

        $payload = smtp_dot_stuff(contact_build_rfc822($message));
        smtp_write_all($fp, $payload . "\r\n.\r\n");
        smtp_expect($fp, [250]);
        smtp_cmd($fp, 'QUIT', [221]);
    } finally {
        fclose($fp);
    }
}

/**
 * @param resource $fp
 */
function smtp_enable_tls($fp): void
{
    $method = STREAM_CRYPTO_METHOD_TLS_CLIENT;
    if (defined('STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT')) {
        $method = STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
        if (defined('STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT')) {
            $method |= STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT;
        }
    }
    $result = stream_socket_enable_crypto($fp, true, $method);
    if ($result !== true) {
        throw new RuntimeException('SMTP STARTTLS failed');
    }
}

/**
 * @param resource $fp
 * @param list<int> $codes
 * @return array{0:int,1:list<string>}
 */
function smtp_cmd($fp, string $command, array $codes): array
{
    smtp_write_all($fp, $command . "\r\n");
    return smtp_expect($fp, $codes);
}

/**
 * @param resource $fp
 */
function smtp_write_all($fp, string $data): void
{
    $length = strlen($data);
    $offset = 0;
    while ($offset < $length) {
        $written = fwrite($fp, substr($data, $offset));
        if ($written === false || $written === 0) {
            throw new RuntimeException('SMTP write failed');
        }
        $offset += $written;
    }
}

/**
 * @param resource $fp
 * @param list<int> $codes
 * @return array{0:int,1:list<string>}
 */
function smtp_expect($fp, array $codes): array
{
    [$code, $lines] = smtp_read($fp);
    if (!in_array($code, $codes, true)) {
        throw new RuntimeException('SMTP ' . $code . ' ' . implode(' | ', $lines));
    }
    return [$code, $lines];
}

/**
 * @param resource $fp
 * @return array{0:int,1:list<string>}
 */
function smtp_read($fp): array
{
    $lines = [];
    while (true) {
        $line = fgets($fp, 1024);
        if ($line === false) {
            $meta = stream_get_meta_data($fp);
            if (!empty($meta['timed_out'])) {
                throw new RuntimeException('SMTP read timed out');
            }
            throw new RuntimeException('SMTP connection closed');
        }
        $trimmed = rtrim($line, "\r\n");
        $lines[] = $trimmed;
        if (strlen($line) < 4) {
            throw new RuntimeException('SMTP malformed response');
        }
        if ($line[3] === ' ') {
            return [(int)substr($line, 0, 3), $lines];
        }
        if ($line[3] !== '-') {
            throw new RuntimeException('SMTP malformed response');
        }
    }
}

function smtp_dot_stuff(string $message): string
{
    $message = str_replace(["\r\n", "\r"], "\n", $message);
    $lines = explode("\n", $message);
    foreach ($lines as $index => $line) {
        if (isset($line[0]) && $line[0] === '.') {
            $lines[$index] = '.' . $line;
        }
    }
    return implode("\r\n", $lines);
}
