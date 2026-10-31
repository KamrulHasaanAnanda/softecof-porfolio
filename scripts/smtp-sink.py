#!/usr/bin/env python3
"""Local SMTP sink used by scripts/test-contact.php. Not deployed."""

import base64
import json
import socket
import ssl
import sys


def main() -> None:
    mode = sys.argv[1]
    out_path = sys.argv[2]
    cert = sys.argv[3] if len(sys.argv) > 3 else ""
    key = sys.argv[4] if len(sys.argv) > 4 else ""
    expected_user = sys.argv[5] if len(sys.argv) > 5 else "contact@softecof.com"
    expected_pass = sys.argv[6] if len(sys.argv) > 6 else "s3cret-mailbox-pw"

    server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server.bind(("127.0.0.1", 0))
    server.listen(1)
    print(f"READY {server.getsockname()[1]}", flush=True)
    conn, _addr = server.accept()
    conn.settimeout(10)

    ctx = None
    if mode in ("ssl", "starttls"):
        ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
        ctx.minimum_version = ssl.TLSVersion.TLSv1_2
        ctx.load_cert_chain(cert, key)

    if mode == "ssl":
        conn = ctx.wrap_socket(conn, server_side=True)

    def send(line: str) -> None:
        conn.sendall(line.encode("utf-8"))

    def readline() -> str | None:
        data = b""
        while not data.endswith(b"\n"):
            chunk = conn.recv(1)
            if not chunk:
                return None
            data += chunk
            if len(data) > 20000:
                return None
        return data.decode("utf-8", "replace").rstrip("\r\n")

    try:
        send("220 sink.local ESMTP\r\n")
        envelope = {"mail_from": "", "rcpt_to": "", "data": "", "authed": False}
        while True:
            line = readline()
            if line is None:
                break
            cmd = line.upper().split(" ", 1)[0]
            if cmd in ("EHLO", "HELO"):
                send("250-sink.local\r\n250-AUTH LOGIN\r\n250-STARTTLS\r\n250 OK\r\n")
            elif cmd == "STARTTLS":
                send("220 Ready to start TLS\r\n")
                conn = ctx.wrap_socket(conn, server_side=True)
            elif cmd == "AUTH":
                send("334 VXNlcm5hbWU6\r\n")
                user_line = readline()
                send("334 UGFzc3dvcmQ6\r\n")
                pass_line = readline()
                try:
                    user = base64.b64decode(user_line.encode()).decode()
                    password = base64.b64decode(pass_line.encode()).decode()
                except Exception:
                    user = ""
                    password = ""
                if user == expected_user and password == expected_pass:
                    envelope["authed"] = True
                    send("235 Authentication successful\r\n")
                else:
                    send("535 Authentication failed\r\n")
            elif cmd == "MAIL":
                envelope["mail_from"] = line
                send("250 OK\r\n")
            elif cmd == "RCPT":
                envelope["rcpt_to"] = line
                send("250 OK\r\n")
            elif cmd == "DATA":
                send("354 End data with <CR><LF>.<CR><LF>\r\n")
                lines = []
                while True:
                    data_line = readline()
                    if data_line is None or data_line == ".":
                        break
                    if data_line.startswith(".."):
                        data_line = data_line[1:]
                    lines.append(data_line)
                envelope["data"] = "\n".join(lines)
                with open(out_path, "w", encoding="utf-8") as handle:
                    json.dump(envelope, handle)
                send("250 Queued\r\n")
            elif cmd in ("RSET", "NOOP"):
                send("250 OK\r\n")
            elif cmd == "QUIT":
                send("221 Bye\r\n")
                break
            else:
                send("500 Unknown\r\n")
    finally:
        try:
            conn.close()
        except Exception:
            pass
        server.close()


if __name__ == "__main__":
    main()
