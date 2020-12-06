---
title: koa验证码svg-captcha
date: 2020-12-6
---

# koa 验证码

首先安装 svg-capthca
npm install svg-captcha --save

```javascript
const svgCaptcha = require("svg-captcha");
```

之后给前端一个接收验证码的接口如下图
![接口](1.png)
主要代码和参数都写好了注释，我只用专门说一下这个验证码的一点需要注意的地方.

- 一定要有 toLowerCase()不然你等会校验会不一致
- ctx.session.captcha 这个需要你自己安装 koa-session 包并引入
- 一定要设置("Content-Type","image/svg+xml")因为生成的是 svg 的图

# 下面是 session 相关的引用

```javascript
const KoaSession = require("koa-session")
const sessionConfig:{
    key:"appletSystem:sess",//返回的session
    maxAge:3000*60,//有效期
    autoCommit:true,
    overwrite:true,
    httpOnly:true,
    signed:true,
    rolling:true,
    renew:true
}
const sessionSignedKey= ['appletSystem'] //是密钥
const session = new KoaSession(sessionConfig,app)
app.keys=sessionSignedKey
app.use(session)
```

# 前端验证

当前端访问/captcha 的接口就会接收到验证码，同时也会给这个 session 附带上了加密后的验证码,这样前端根据图片提交过来的数据后,就可以用 ctx.session.captcha 来获取值校验验证码了
