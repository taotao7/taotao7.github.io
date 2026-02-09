---
title: Koa-JWT Usage and Common Issues
date: 2020-12-05
tags: [Node.js, Koa, JWT]
slug: koa-jwt-usage-and-issues
permalink: 2020/12/05/koa-jwt-usage-and-issues/
---

## Basic Usage

![Code Example](1.png)

```javascript
const jwt = require("koa-jwt");
app.use(jwt({ secret: "secret" }).unless({ path: [/\/login/, /\/captcha/] }));
```

We define a `secret` key for signing/verifying tokens. The `unless` method takes an array of regex paths that should be excluded from authentication (like login and captcha endpoints). All other routes will require a valid JWT.

## Login and Token Generation

![Login Logic](3.png)

Here's a simplified login flow (password encryption omitted for brevity):

1.  **Verify Credentials**: Check username and password against the database (e.g., using Sequelize).
2.  **Sign Token**: If valid, use `jwt.sign()` to create a token.
    - **Payload**: I include `authorized` status and `userName` (or role/permissions) to facilitate permission checks later.
    - **Secret**: Must match the one in `app.use(jwt(...))`.
    - **Options**: Set an expiration time (e.g., `1h`).
3.  **Response**: Return the token. **Important**: The token standard usually requires the `Bearer ` prefix (with a space) when sending it back in the Authorization header, though here we just return the raw token string for the client to handle.

![Controller Logic](2.png)

The controller receives the data, calls the verification function, and if successful, sends the token back to the frontend.
