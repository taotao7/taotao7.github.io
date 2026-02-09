---
title: Koa 实现 SVG 验证码
date: 2020-12-06
tags: [Node.js, Koa, Captcha]
slug: koa-captcha-svg-captcha
permalink: 2020/12/06/koa-captcha-svg-captcha/
---

# Koa Captcha

首先，安装 `svg-captcha`：

```bash
npm install svg-captcha --save
```

```javascript
const svgCaptcha = require("svg-captcha");
```

创建一个端点来提供验证码：

![Interface](1.png)

**关键点：**

- **大小写敏感**：存储/比较文本时始终使用 `toLowerCase()`，否则验证可能会意外失败。
- **Session**：你需要 `koa-session` 来存储正确的验证码文本 (`ctx.session.captcha`) 以供后续验证。
- **Content-Type**：设置头部为 `image/svg+xml`，以便浏览器将其渲染为图像。

# Session 配置

你需要配置 `koa-session` 才能使其工作：

```javascript
const KoaSession = require("koa-session");
const sessionConfig = {
  key: "appletSystem:sess",
  maxAge: 3000 * 60, // 3 minutes
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: true,
  renew: true,
  };
const sessionSignedKey = ["appletSystem"]; // Secret key
const session = new KoaSession(sessionConfig, app);
app.keys = sessionSignedKey;
app.use(session);
```

# 验证

当前端请求 `/captcha` 时，服务器生成图像并将文本存储在 session 中（加密/签名在 cookie 中）。

当用户提交带有验证码的表单时，只需将提交的值与 `ctx.session.captcha` 进行比较。
