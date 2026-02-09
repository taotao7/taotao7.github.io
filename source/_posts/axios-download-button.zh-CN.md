---
title: Axios 文件下载与 Ant Design 按钮
date: 2020-12-07
tags: [Frontend, Axios]
slug: axios-download-button
permalink: 2020/12/07/axios-download-button/
---

# Axios

![Code Example](1.png)

这是一个使用 Ant Design 按钮触发文件下载的快速实现。逻辑适用于任何 UI 框架——核心在于处理 Axios 响应。

关键在于请求配置中设置 `responseType: 'blob'`。

1.  **请求**: 发送 `responseType: 'blob'` 的 GET 请求。
2.  **Blob 处理**: 验证是否收到了文件。
3.  **触发下载**: 为 blob 创建临时 URL，将其赋值给隐藏 `<a>` 标签的 `href`，设置 `download` 属性为期望的文件名，并编程触发点击。
4.  **清理**: 将标签添加到 body，点击它，然后就完成了。

这种模式正确处理二进制数据，强制浏览器下载文件而不是尝试显示它。
