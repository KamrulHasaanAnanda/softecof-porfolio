<?php
/**
 * SMTP settings for the website contact form.
 *
 * Copy this file to a folder named "private" that sits NEXT TO public_html,
 * not inside it:
 *
 *   public_html/                  ← website files (the uploaded out/ folder)
 *   private/softecof-mail.php     ← this file, with the real password
 *
 * The form looks for that path automatically. You can instead set the
 * SOFTECOF_MAIL_CONFIG environment variable to an absolute path of your choosing,
 * as long as that path is outside the website folder.
 *
 * Password notes:
 * - Use the mailbox password for contact@softecof.com, not the hPanel login.
 * - Keep the password in single quotes. If it contains a single quote, write it
 *   as \'. If it contains a backslash, write it as \\.
 * - If you can, set the file permissions to 600 so only the hosting account can read it.
 *
 * Hostinger Email (hPanel → Emails → contact@softecof.com → Connect apps & devices):
 *   host smtp.hostinger.com, port 465, encryption ssl.
 * If port 465 cannot connect, use port 587 and encryption starttls.
 *
 * From must be the same mailbox you authenticate as (or an alias on softecof.com).
 * The visitor's address is set as Reply-To, so Reply in your mail client writes back to them.
 */
return [
    'host' => 'smtp.hostinger.com',
    'port' => 465,
    'encryption' => 'ssl',
    'username' => 'contact@softecof.com',
    'password' => '',
    'from_email' => 'contact@softecof.com',
    'from_name' => 'Softecof Website',
    'to_email' => 'contact@softecof.com',
    'to_name' => 'Softecof',
];
