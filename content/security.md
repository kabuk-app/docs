# Security overview

## What is protected

Nothing travels in plaintext. The relay and the bridge only see ciphertext and routing information, and they store nothing. Everything Kabuk keeps on disk is encrypted, including host names.

There is no server that can reset your vault. If you lose your unlock method and your recovery key, your data is gone.

## Limits of the web app

The web app at web.kabuk.app is delivered to your browser on every visit. If that site were ever compromised, it could serve you malicious code. The desktop and mobile apps do not have this weakness.

To reduce the risk we use a strict content security policy, subresource integrity, no third-party scripts, a separate origin, and an installable web app. You can also host the web app yourself.

On the web a short PIN is not accepted as protection for your vault. Setup asks for a long password or a passkey. A PIN may only unlock a session that is already running.
