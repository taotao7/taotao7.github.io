---
title: Hexo SEO 优化：百度与谷歌
date: 2020-12-06
tags: [Hexo, SEO]
slug: hexo-seo-optimization
permalink: 2020/12/06/hexo-seo-optimization/
---

# Hexo SEO 优化

首先，安装站点地图生成器：

```bash
npm install hexo-generator-sitemap --save
npm install hexo-generator-baidu-sitemap --save
```

然后在 `_config.yml` 中添加以下配置：

```yaml
sitemap:
  path: sitemap.xml
baidusitemap:
  path: baidusitemap.xml
```

重启 Hexo，你应该能在 public 文件夹中看到 `sitemap.xml` 和 `baidusitemap.xml` 生成了。

![Sitemap Generation](1.png)

## 验证

接下来，将你的站点提交给百度和 Google Search Console。你需要验证所有权。

Google 验证（推荐 URL 前缀方法）：
![Google Verification](3.png)

百度验证：
![Baidu Verification](2.png)

两个平台通常都提供 HTML meta 标签或验证文件。如果使用 meta 标签，将其添加到主题的 `head.ejs` 文件中。

![Head Code](4.png)

## 提交站点地图

### 百度

前往链接提交部分并提交你的站点地图 URL。同时检查“抓取诊断”工具。
![Baidu Sitemap](6.png)
![Baidu Diagnosis](5.png)

HTTPS 认证通常需要几天时间。
![HTTPS Passed](7.png)

### Google

![Google Sitemap](8.png)
与百度类似，验证所有权后在 Search Console 中提交你的站点地图 URL。

## 链接

- [百度站长工具](https://ziyuan.baidu.com/site/index)
- [Google Search Console](https://search.google.com/search-console)
