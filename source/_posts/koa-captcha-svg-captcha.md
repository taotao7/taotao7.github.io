---
title: Implementing SVG Captcha in Koa
date: 2020-12-06
tags: [Node.js, Koa, Captcha]
---

# Koa Captcha

First, install `svg-captcha`:

```bash
npm install svg-captcha --save
```

```javascript
const svgCaptcha = require("svg-captcha");
```

Create an endpoint to serve the captcha:

![Interface](1.png)

**Key Points:**

*   **Case Sensitivity**: Always use `toLowerCase()` when storing/comparing the text, otherwise validation will fail unexpectedly.
*   **Session**: You need `koa-session` to store the correct captcha text (`ctx.session.captcha`) for later verification.
*   **Content-Type**: Set the header to `image/svg+xml` so the browser renders it as an image.

# Session Configuration

You need to configure `koa-session` for this to work:

```javascript
const KoaSession = require("koa-session")
const sessionConfig = {
    key: "appletSystem:sess",
    maxAge: 3000 * 60, // 3 minutes
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true,
    renew: true
}
const sessionSignedKey = ['appletSystem'] // Secret key
const session = new KoaSession(sessionConfig, app)
app.keys = sessionSignedKey
app.use(session)
```

# Verification

When the frontend requests `/captcha`, the server generates the image and stores the text in the session (encrypted/signed in the cookie).

When the user submits the form with the captcha code, you simply compare the submitted value with `ctx.session.captcha`.
