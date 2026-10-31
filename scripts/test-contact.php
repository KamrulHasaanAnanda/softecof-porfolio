<?php
/**
 * Local checks for public/api/contact.php. Not deployed.
 *
 *   php scripts/test-contact.php
 */

declare(strict_types=1);

define('SOFTECOF_CONTACT_LIBRARY', true);
require dirname(__DIR__) . '/public/api/contact.php';

$failures = 0;
$passed = 0;

function check(bool $condition, string $message): void
{
    global $failures, $passed;
    if ($condition) {
        $passed++;
        return;
    }
    $failures++;
    fwrite(STDERR, "FAIL: {$message}\n");
}

function valid_post(array $overrides = []): array
{
    return array_merge([
        'name' => 'Jane Doe',
        'email' => 'jane@example.com',
        'company' => 'Acme',
        'phone' => '+880 1626 889072',
        'service' => 'Custom Software',
        'message' => "We need a booking system.\n.keep-this-line\nThanks, that is enough.",
        'sof_hp' => '',
    ], $overrides);
}

function valid_config(array $overrides = []): array
{
    return array_merge([
        'host' => 'smtp.hostinger.com',
        'port' => 465,
        'encryption' => 'ssl',
        'username' => 'contact@softecof.com',
        'password' => 's3cret-mailbox-pw',
        'from_email' => 'contact@softecof.com',
        'from_name' => 'Softecof Website',
        'to_email' => 'contact@softecof.com',
        'to_name' => 'Softecof',
        'rate_limit_dir' => sys_get_temp_dir() . '/softecof-rate-' . bin2hex(random_bytes(4)),
        'rate_limit_max' => 8,
        'rate_limit_window' => 3600,
        'min_interval' => 10,
        'verify_tls' => false,
    ], $overrides);
}

function site_server(array $overrides = []): array
{
    return array_merge([
        'HTTP_HOST' => 'softecof.com',
        'HTTP_ORIGIN' => 'https://softecof.com',
        'REMOTE_ADDR' => '203.0.113.10',
        'REQUEST_METHOD' => 'POST',
    ], $overrides);
}

/**
 * @return array{0:int,1:array<string,mixed>,2:?array<string,string>}
 */
function submit(array $post, array $config, array $server, ?int $now = null): array
{
    $captured = null;
    $mailer = function (array $cfg, array $message) use (&$captured): void {
        $captured = $message;
    };
    [$status, $body] = handle_contact($post, $server, $config, $mailer, $now ?? 1_700_000_000);
    return [$status, $body, $captured];
}

function header_map(string $raw): array
{
    $normalized = str_replace("\r\n", "\n", $raw);
    $normalized = str_replace("\r", "\n", $normalized);
    $normalized = str_replace("\n", "\r\n", $normalized);
    [$headerText] = explode("\r\n\r\n", $normalized, 2) + [''];
    $map = [];
    $current = '';
    foreach (explode("\r\n", $headerText) as $line) {
        if ($line !== '' && ($line[0] === ' ' || $line[0] === "\t")) {
            $current .= ' ' . trim($line);
            continue;
        }
        if ($current !== '') {
            $map = push_header($map, $current);
        }
        $current = $line;
    }
    if ($current !== '') {
        $map = push_header($map, $current);
    }
    return $map;
}

function push_header(array $map, string $line): array
{
    $parts = explode(':', $line, 2);
    if (count($parts) !== 2) {
        return $map;
    }
    $map[strtolower(trim($parts[0]))][] = trim($parts[1]);
    return $map;
}

function decode_header(string $value): string
{
    if (function_exists('iconv_mime_decode')) {
        $decoded = iconv_mime_decode($value, ICONV_MIME_DECODE_CONTINUE_ON_ERROR, 'UTF-8');
        if (is_string($decoded) && $decoded !== '') {
            return $decoded;
        }
    }
    return $value;
}

$tsx = file_get_contents(dirname(__DIR__) . '/src/components/ContactUs.tsx');
check(is_string($tsx), 'contact component is readable');
if (is_string($tsx) && preg_match('/const SERVICES = \[(.*?)\]\s*as const;/s', $tsx, $match)) {
    preg_match_all('/"((?:\\\\.|[^"\\\\])*)"/', $match[1], $items);
    $fromUi = array_map(static fn (string $item): string => stripcslashes($item), $items[1]);
    check($fromUi === contact_services(), 'service options match the PHP allow-list: ' . implode(' | ', $fromUi));
} else {
    check(false, 'SERVICES list was not found in ContactUs.tsx');
}

$config = valid_config();
$server = site_server();
[$status, $body, $message] = submit(valid_post(), $config, $server);
check($status === 200 && ($body['ok'] ?? false) === true, 'valid submission is accepted');
check(is_array($message), 'mailer was called');
if (is_array($message)) {
    check($message['from_email'] === 'contact@softecof.com', 'envelope sender is the mailbox');
    check($message['to_email'] === 'contact@softecof.com', 'recipient is the mailbox');
    check($message['reply_to_email'] === 'jane@example.com', 'Reply-To is the visitor');
    check($message['reply_to_name'] === 'Jane Doe', 'Reply-To name is the visitor');
    check(str_contains($message['body'], 'Phone: +880 1626 889072'), 'phone is included when present');
    check(str_contains($message['body'], 'Company: Acme'), 'company is included when present');
    check(str_contains($message['body'], 'Service: Custom Software'), 'service is included');
    check(str_contains($message['subject'], 'Custom Software'), 'subject includes the service');
    check(!str_contains($message['from_email'], 'jane@example.com'), 'visitor is not the From address');

    $raw = contact_build_rfc822($message);
    $headers = header_map($raw);
    check(isset($headers['reply-to'][0]) && str_contains($headers['reply-to'][0], 'jane@example.com'), 'Reply-To header is present');
    check(isset($headers['from'][0]) && str_contains($headers['from'][0], 'contact@softecof.com'), 'From header is the mailbox');
    check(isset($headers['from'][0]) && !str_contains($headers['from'][0], 'jane@example.com'), 'From header is not the visitor');
    $headerBlock = explode("\r\n\r\n", $raw, 2)[0];
    check(!preg_match('/^bcc:/mi', $headerBlock), 'no Bcc header is introduced');
}

$quoted = contact_format_address('visitor@example.com', 'Bob <evil@x.com>');
check($quoted === '"Bob <evil@x.com>" <visitor@example.com>', 'display names cannot break out of Reply-To');

[$status, $body, $message] = submit(valid_post([
    'name' => "Ann\r\nBcc: spam@evil.com",
    'email' => "ann@example.com\r\nBcc: spam@evil.com",
]), $config, site_server(['REMOTE_ADDR' => '203.0.113.11']));
check($status === 400 && ($body['error'] ?? '') === 'validation', 'newline in the email is rejected');
check($message === null, 'rejected email does not send');

[$status, $body, $message] = submit(valid_post([
    'name' => "Ann\r\nBcc: spam@evil.com",
]), $config, site_server(['REMOTE_ADDR' => '203.0.113.12']));
check($status === 200, 'newline in the name is stripped and accepted');
check(is_array($message) && !str_contains($message['reply_to_name'], "\n") && !str_contains($message['reply_to_name'], "\r"), 'name newlines are removed');
if (is_array($message)) {
    $headerBlock = explode("\r\n\r\n", contact_build_rfc822($message), 2)[0];
    check(!preg_match('/^bcc:/mi', $headerBlock), 'stripped name does not create a Bcc header');
}

[$status, $body, $message] = submit(valid_post([
    'name' => '',
    'first_name' => 'Ada',
    'last_name' => 'Lovelace',
]), $config, site_server(['REMOTE_ADDR' => '203.0.113.13']));
check($status === 200 && is_array($message) && $message['reply_to_name'] === 'Ada Lovelace', 'first and last name combine when name is absent');

[$status, $body, $message] = submit(valid_post(['email' => 'not-an-email', 'phone' => '']), $config, site_server(['REMOTE_ADDR' => '203.0.113.14']));
check($status === 400 && isset($body['fields']['email']), 'invalid email returns a field error');
check($message === null, 'invalid email does not send');

[$status, $body] = submit(valid_post(['service' => 'Free money', 'phone' => '']), $config, site_server(['REMOTE_ADDR' => '203.0.113.15']));
check($status === 400 && isset($body['fields']['service']), 'unknown service is rejected');

[$status, $body] = submit(valid_post(['message' => 'too short', 'phone' => '']), $config, site_server(['REMOTE_ADDR' => '203.0.113.16']));
check($status === 400 && isset($body['fields']['message']), 'short message is rejected');

[$status, $body] = submit(valid_post(['phone' => 'call me maybe']), $config, site_server(['REMOTE_ADDR' => '203.0.113.17']));
check($status === 400 && isset($body['fields']['phone']), 'invalid phone is rejected');

[$status, $body, $message] = submit(valid_post(['company' => '', 'phone' => '']), $config, site_server(['REMOTE_ADDR' => '203.0.113.18']));
check($status === 200 && is_array($message) && !str_contains($message['body'], 'Company:') && !str_contains($message['body'], 'Phone:'), 'company and phone are optional');

$calls = 0;
$honeypotMailer = function () use (&$calls): void {
    $calls++;
};
[$status, $body] = handle_contact(
    valid_post(['sof_hp' => 'https://spam.test']),
    site_server(['REMOTE_ADDR' => '203.0.113.19']),
    $config,
    $honeypotMailer,
    1_700_000_100
);
check($status === 200 && ($body['ok'] ?? false) === true && $calls === 0, 'honeypot accepts quietly and does not send');

[$status] = handle_contact(
    valid_post(['sof_hp' => ['https://spam.test']]),
    site_server(['REMOTE_ADDR' => '203.0.113.20']),
    $config,
    $honeypotMailer,
    1_700_000_200
);
check($status === 200 && $calls === 0, 'array honeypot does not send');

$limitConfig = valid_config(['min_interval' => 10, 'rate_limit_max' => 8]);
$limitServer = site_server(['REMOTE_ADDR' => '203.0.113.30']);
[$first] = submit(valid_post(), $limitConfig, $limitServer, 5_000);
[$second] = submit(valid_post(), $limitConfig, $limitServer, 5_005);
[$third] = submit(valid_post(), $limitConfig, $limitServer, 5_010);
check($first === 200 && $second === 429 && $third === 200, 'submissions closer than 10 seconds are limited');

$quotaConfig = valid_config(['min_interval' => 0, 'rate_limit_max' => 3]);
$quotaServer = site_server(['REMOTE_ADDR' => '203.0.113.31']);
$quota = [];
for ($i = 0; $i < 4; $i++) {
    [$quota[]] = submit(valid_post(), $quotaConfig, $quotaServer, 8_000 + $i);
}
check($quota === [200, 200, 200, 429], 'hourly quota blocks the next submission');

[$otherIp] = submit(valid_post(), $quotaConfig, site_server(['REMOTE_ADDR' => '203.0.113.32']), 8_010);
check($otherIp === 200, 'a different address has its own quota');

[$status, $body, $message] = submit(valid_post(), [], site_server(['REMOTE_ADDR' => '203.0.113.40']));
check($status === 503 && ($body['error'] ?? '') === 'config' && $message === null, 'missing SMTP config does not send');

[$status, $body, $message] = submit(valid_post(), valid_config(['password' => '']), site_server(['REMOTE_ADDR' => '203.0.113.41']));
check($status === 503 && $message === null, 'empty mailbox password does not send');

[$status, $body] = handle_contact(
    valid_post(),
    site_server(['REMOTE_ADDR' => '203.0.113.42']),
    valid_config(),
    function (): void {
        throw new RuntimeException('auth failed for s3cret-mailbox-pw');
    },
    1_700_000_300
);
check($status === 500 && ($body['error'] ?? '') === 'mail', 'mail failure returns an error code');
check(!str_contains((string)json_encode($body), 's3cret-mailbox-pw'), 'mail errors do not include the password');

[$status, $body, $message] = submit(
    valid_post(),
    valid_config(),
    site_server(['HTTP_HOST' => 'softecof.com', 'HTTP_ORIGIN' => 'https://evil.example', 'REMOTE_ADDR' => '203.0.113.43'])
);
check($status === 403 && ($body['error'] ?? '') === 'origin' && $message === null, 'another website cannot post the form');

[$status] = submit(
    valid_post(),
    valid_config(),
    site_server(['HTTP_HOST' => 'www.softecof.com', 'HTTP_ORIGIN' => 'https://softecof.com', 'REMOTE_ADDR' => '203.0.113.44'])
);
check($status === 200, 'apex and www origins are both accepted');

$unicodeName = 'José García';
[$status, , $message] = submit(
    valid_post(['name' => $unicodeName, 'company' => 'García & Co', 'phone' => '']),
    valid_config(),
    site_server(['REMOTE_ADDR' => '203.0.113.45'])
);
check($status === 200 && is_array($message), 'unicode names are accepted');
if (is_array($message)) {
    $raw = contact_build_rfc822($message);
    $headers = header_map($raw);
    $decodedReply = decode_header($headers['reply-to'][0] ?? '');
    $decodedSubject = decode_header($headers['subject'][0] ?? '');
    check(str_contains($decodedReply, $unicodeName) && str_contains($decodedReply, 'jane@example.com'), 'encoded Reply-To keeps the visitor name and email');
    check(str_contains($decodedSubject, $unicodeName), 'encoded subject keeps the visitor name');
    $bodyText = quoted_printable_decode(explode("\r\n\r\n", $raw, 2)[1] ?? '');
    check(str_contains($bodyText, $unicodeName) && str_contains($bodyText, '.keep-this-line'), 'message body round-trips unicode and a leading dot');
}

$webRoot = sys_get_temp_dir() . '/softecof-web-' . bin2hex(random_bytes(4));
$outside = sys_get_temp_dir() . '/softecof-private-' . bin2hex(random_bytes(4));
mkdir($webRoot);
mkdir($outside);
$insidePath = $webRoot . '/softecof-mail.php';
$outsidePath = $outside . '/softecof-mail.php';
file_put_contents($insidePath, "<?php\nreturn ['password' => 'inside-secret'];\n");
file_put_contents($outsidePath, "<?php\nreturn ['password' => 'outside-secret', 'host' => 'smtp.hostinger.com'];\n");
$previousDoc = $_SERVER['DOCUMENT_ROOT'] ?? null;
$_SERVER['DOCUMENT_ROOT'] = $webRoot;
putenv('SOFTECOF_MAIL_CONFIG=' . $insidePath);
$loaded = contact_load_config();
check($loaded === [], 'config inside the web root is ignored');
putenv('SOFTECOF_MAIL_CONFIG=' . $outsidePath);
$loaded = contact_load_config();
check(($loaded['password'] ?? '') === 'outside-secret', 'config outside the web root is loaded');
putenv('SOFTECOF_MAIL_CONFIG');
if (is_string($previousDoc)) {
    $_SERVER['DOCUMENT_ROOT'] = $previousDoc;
} else {
    unset($_SERVER['DOCUMENT_ROOT']);
}

function free_port(): int
{
    $socket = stream_socket_server('tcp://127.0.0.1:0', $errno, $errstr);
    if ($socket === false) {
        throw new RuntimeException($errstr);
    }
    $name = stream_socket_get_name($socket, false);
    fclose($socket);
    if (!is_string($name) || !str_contains($name, ':')) {
        throw new RuntimeException('Could not allocate a port');
    }
    return (int)substr($name, (int)strrpos($name, ':') + 1);
}

function make_cert(string $dir): array
{
    $cert = $dir . '/cert.pem';
    $key = $dir . '/key.pem';
    $command = 'openssl req -x509 -newkey rsa:2048 -keyout ' . escapeshellarg($key)
        . ' -out ' . escapeshellarg($cert)
        . ' -days 1 -nodes -subj ' . escapeshellarg('/CN=127.0.0.1');
    exec($command . ' 2>/dev/null', $output, $code);
    if ($code !== 0 || !is_file($cert) || !is_file($key)) {
        throw new RuntimeException('openssl could not create a test certificate');
    }
    return [$cert, $key];
}

/**
 * @return array{mail_from:string,rcpt_to:string,data:string,authed:bool}
 */
function smtp_roundtrip(string $mode, array $message, array $config): array
{
    $dir = sys_get_temp_dir() . '/softecof-sink-' . bin2hex(random_bytes(4));
    mkdir($dir);
    $capture = $dir . '/capture.json';
    $stderr = $dir . '/sink.err';
    $cert = '';
    $key = '';
    if ($mode !== 'plain') {
        [$cert, $key] = make_cert($dir);
    }

    $command = [
        'python3',
        dirname(__DIR__) . '/scripts/smtp-sink.py',
        $mode,
        $capture,
        $cert,
        $key,
        'contact@softecof.com',
        's3cret-mailbox-pw',
    ];
    $proc = proc_open($command, [
        1 => ['pipe', 'w'],
        2 => ['file', $stderr, 'w'],
    ], $pipes, $dir);
    if (!is_resource($proc)) {
        throw new RuntimeException('Could not start the SMTP sink');
    }

    try {
        $ready = fgets($pipes[1]);
        if (!is_string($ready) || !preg_match('/READY\s+(\d+)/', $ready, $match)) {
            throw new RuntimeException('SMTP sink did not start: ' . file_get_contents($stderr));
        }
        $config['host'] = '127.0.0.1';
        $config['port'] = (int)$match[1];
        $config['encryption'] = $mode === 'plain' ? 'none' : ($mode === 'ssl' ? 'ssl' : 'starttls');
        smtp_send($config, $message);
        $raw = '';
        for ($i = 0; $i < 20 && !is_file($capture); $i++) {
            usleep(20000);
        }
        $raw = is_file($capture) ? (string)file_get_contents($capture) : '';
        $decoded = json_decode($raw, true);
        if (!is_array($decoded)) {
            throw new RuntimeException('SMTP sink captured nothing: ' . file_get_contents($stderr));
        }
        return $decoded;
    } finally {
        fclose($pipes[1]);
        proc_terminate($proc);
        proc_close($proc);
    }
}

$smtpConfig = valid_config(['verify_tls' => false, 'timeout' => 5]);
$smtpMessage = contact_build_message(
    contact_validate(valid_post(['name' => 'José García']))['data'],
    $smtpConfig,
    '203.0.113.50'
);

foreach (['plain', 'ssl', 'starttls'] as $mode) {
    try {
        $captured = smtp_roundtrip($mode, $smtpMessage, $smtpConfig);
        check(($captured['authed'] ?? false) === true, $mode . ' SMTP authenticated');
        check(str_contains((string)$captured['mail_from'], 'MAIL FROM:<contact@softecof.com>'), $mode . ' envelope sender is the mailbox');
        check(!str_contains((string)$captured['mail_from'], 'jane@example.com'), $mode . ' envelope sender is not the visitor');
        check(str_contains((string)$captured['rcpt_to'], '<contact@softecof.com>'), $mode . ' envelope recipient is the mailbox');
        $data = (string)$captured['data'];
        check(str_contains($data, 'Reply-To:') && str_contains($data, 'jane@example.com'), $mode . ' message Reply-To is the visitor');
        check(str_contains($data, '.keep-this-line'), $mode . ' leading dot survived dot-stuffing');
        $normalizedData = str_replace("\r\n", "\n", $data);
        $decodedBody = quoted_printable_decode(str_replace("\n", "\r\n", explode("\n\n", $normalizedData, 2)[1] ?? ''));
        check(str_contains($decodedBody, 'José García'), $mode . ' unicode body survived');
    } catch (Throwable $e) {
        check(false, $mode . ' SMTP round trip failed: ' . $e->getMessage());
    }
}

try {
    smtp_roundtrip('plain', $smtpMessage, valid_config(['password' => 'wrong-password', 'verify_tls' => false, 'timeout' => 5]));
    check(false, 'wrong SMTP password should fail');
} catch (Throwable $e) {
    check(str_contains($e->getMessage(), '535'), 'wrong SMTP password is rejected by the server');
    check(!str_contains($e->getMessage(), 'wrong-password') && !str_contains($e->getMessage(), 's3cret-mailbox-pw'), 'auth failure does not echo the password');
}

try {
    smtp_roundtrip('ssl', $smtpMessage, valid_config(['verify_tls' => true, 'timeout' => 5]));
    check(false, 'invalid TLS certificate should fail when verification is on');
} catch (Throwable $e) {
    check(str_contains($e->getMessage(), 'SMTP connect failed') || str_contains($e->getMessage(), 'certificate') || str_contains($e->getMessage(), 'SMTP'), 'TLS verification rejects the test certificate');
}

$httpDir = sys_get_temp_dir() . '/softecof-http-' . bin2hex(random_bytes(4));
mkdir($httpDir, 0700, true);
$httpConfigPath = $httpDir . '/mail.php';
$httpMessagePath = $httpDir . '/last-message.eml';
$httpRateDir = $httpDir . '/rate';
mkdir($httpRateDir);
$httpConfig = valid_config([
    'dry_run' => true,
    'dry_run_path' => $httpMessagePath,
    'rate_limit_dir' => $httpRateDir,
    'min_interval' => 0,
    'rate_limit_max' => 20,
]);
file_put_contents($httpConfigPath, "<?php\nreturn " . var_export($httpConfig, true) . ";\n");

$httpPort = free_port();
$httpStderr = $httpDir . '/server.err';
$env = [];
foreach (['PATH', 'HOME', 'LANG', 'LC_ALL', 'TZ', 'TMPDIR'] as $key) {
    $value = getenv($key);
    if (is_string($value) && $value !== '') {
        $env[$key] = $value;
    }
}
$env['SOFTECOF_MAIL_CONFIG'] = $httpConfigPath;
$serverProc = proc_open(
    [PHP_BINARY, '-S', '127.0.0.1:' . $httpPort, '-t', dirname(__DIR__) . '/public'],
    [1 => ['file', $httpDir . '/server.out', 'w'], 2 => ['file', $httpStderr, 'w']],
    $serverPipes,
    dirname(__DIR__),
    $env
);

function http_request(string $method, string $url, ?string $body, array $headers): array
{
    $options = [
        'method' => $method,
        'header' => implode("\r\n", $headers),
        'ignore_errors' => true,
        'timeout' => 5,
    ];
    if ($body !== null) {
        $options['content'] = $body;
    }
    $context = stream_context_create(['http' => $options]);
    $response = @file_get_contents($url, false, $context);
    if ($response === false) {
        throw new RuntimeException('HTTP request failed for ' . $url);
    }
    $status = 0;
    if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\b/', $http_response_header[0], $match)) {
        $status = (int)$match[1];
    }
    return [$status, $response];
}

try {
    if (!is_resource($serverProc)) {
        throw new RuntimeException('Could not start the PHP server');
    }
    $base = 'http://127.0.0.1:' . $httpPort;
    $origin = 'Origin: ' . $base;
    $ready = false;
    for ($i = 0; $i < 40; $i++) {
        try {
            http_request('GET', $base . '/api/contact.php', null, ['Accept: application/json', $origin]);
            $ready = true;
            break;
        } catch (Throwable $e) {
            usleep(50000);
        }
    }
    check($ready, 'local PHP server started');

    [$status, $response] = http_request('GET', $base . '/api/contact.php', null, ['Accept: application/json', $origin]);
    $decoded = json_decode($response, true);
    check($status === 405 && ($decoded['error'] ?? '') === 'method', 'GET is rejected');

    $fields = valid_post(['phone' => '']);
    [$status, $response] = http_request(
        'POST',
        $base . '/api/contact.php',
        http_build_query($fields),
        ['Accept: application/json', 'Content-Type: application/x-www-form-urlencoded', $origin]
    );
    $decoded = json_decode($response, true);
    check($status === 200 && ($decoded['ok'] ?? false) === true, 'HTTP POST returns success');
    check(is_file($httpMessagePath), 'HTTP POST writes the message in dry-run mode');
    if (is_file($httpMessagePath)) {
        $raw = (string)file_get_contents($httpMessagePath);
        $headers = header_map($raw);
        check(isset($headers['reply-to'][0]) && str_contains($headers['reply-to'][0], 'jane@example.com'), 'HTTP message sets Reply-To');
        check(isset($headers['from'][0]) && str_contains($headers['from'][0], 'contact@softecof.com') && !str_contains($headers['from'][0], 'jane@example.com'), 'HTTP message From is the mailbox');
    }

    @unlink($httpMessagePath);
    [$status, $response] = http_request(
        'POST',
        $base . '/api/contact.php',
        http_build_query(valid_post(['sof_hp' => 'https://spam.test', 'phone' => ''])),
        ['Accept: application/json', 'Content-Type: application/x-www-form-urlencoded', $origin]
    );
    $decoded = json_decode($response, true);
    check($status === 200 && ($decoded['ok'] ?? false) === true && !is_file($httpMessagePath), 'HTTP honeypot does not write a message');

    [$status, $response] = http_request(
        'POST',
        $base . '/api/contact.php',
        http_build_query(valid_post(['email' => 'nope', 'phone' => ''])),
        ['Accept: application/json', 'Content-Type: application/x-www-form-urlencoded', $origin]
    );
    $decoded = json_decode($response, true);
    check($status === 400 && ($decoded['error'] ?? '') === 'validation', 'HTTP validation error is JSON');

    [$status, $response] = http_request(
        'POST',
        $base . '/api/contact.php',
        http_build_query(valid_post(['phone' => ''])),
        ['Accept: application/json', 'Content-Type: application/x-www-form-urlencoded', 'Origin: https://evil.example']
    );
    $decoded = json_decode($response, true);
    check($status === 403 && ($decoded['error'] ?? '') === 'origin', 'HTTP rejects a foreign Origin');
} catch (Throwable $e) {
    check(false, 'HTTP server test failed: ' . $e->getMessage());
} finally {
    if (is_resource($serverProc)) {
        proc_terminate($serverProc);
        proc_close($serverProc);
    }
}

echo $failures === 0
    ? "passed {$passed}\n"
    : "passed {$passed}, failed {$failures}\n";
exit($failures === 0 ? 0 : 1);
