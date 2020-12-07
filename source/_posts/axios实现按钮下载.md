---
title: axios下载文件，利用antd按钮下载
date: 2020-12-7
---

# axios

![代码](1.png)

首先有一个 button 按钮，我这里用的是 antd 的按钮.
其他的 ui 框架肯定也是类似的，当按钮点击的时候触发 axios 的 get 请求.
第一个参数是地址,第二个参数是定制一些属性.
着重强调一定要设置 responseType:'blob'属性.
确认是否拿到文件，然后构造一个 url 放入 a 标签的 href 属性,并且不显示这个 a 标签.
然后设置 a 标签的属性 setAttribute('download',fileName).
第一个参数是下载，第二个是你下载文件的名字(你自己定义),然后插入这个 a 标签在 body 里面,并且点击 a 标签开始下载
这样写好后每当点击 button 按钮就开始下载了
