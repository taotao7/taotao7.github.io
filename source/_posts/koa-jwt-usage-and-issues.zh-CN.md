---
title: Koa-JWT 使用与常见问题
date: 2020-12-05
tags: [Node.js, Koa, JWT]
slug: koa-jwt-usage-and-issues
permalink: 2020/12/05/koa-jwt-usage-and-issues/
---

## 基本用法

![Code Example](1.png)

```javascript
const jwt = require("koa-jwt");
app.use(jwt({ secret: "secret" }).unless({ path: [/\/login/, /\/captcha/] }));
```

我们要定义一个用于签名/验证令牌的 `secret` 密钥。`unless` 方法接受一个正则路径数组，这些路径应排除在认证之外（如登录和验证码端点）。所有其他路由都需要有效的 JWT。

## 登录与令牌生成

![Login Logic](3.png)

这是一个简化的登录流程（为简洁起见省略了密码加密）：

1.  **验证凭据**：对照数据库检查用户名和密码（例如使用 Sequelize）。
2.  **签署令牌**：如果有效，使用 `jwt.sign()` 创建令牌。
    - **Payload**：我包含 `authorized` 状态和 `userName`（或角色/权限）以便后续进行权限检查。
    - **Secret**：必须与 `app.use(jwt(...))` 中的匹配。
    - **Options**：设置过期时间（例如 `1h`）。
3.  **响应**：返回令牌。**重要**：标准通常要求在 Authorization 头部发送时加上 `Bearer ` 前缀（带空格），不过这里我们只返回原始令牌字符串供客户端处理。

![Controller Logic](2.png)

控制器接收数据，调用验证函数，如果成功，将令牌发送回前端。
