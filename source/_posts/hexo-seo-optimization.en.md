---
title: Hexo SEO Optimization for Baidu and Google
date: 2020-12-06
tags: [Hexo, SEO]
slug: hexo-seo-optimization
permalink: 2020/12/06/hexo-seo-optimization/
---

# Hexo SEO Optimization

First, install the sitemap generators:

```bash
npm install hexo-generator-sitemap --save
npm install hexo-generator-baidu-sitemap --save
```

Then add the following configuration to your `_config.yml`:

```yaml
sitemap:
  path: sitemap.xml
baidusitemap:
  path: baidusitemap.xml
```

Restart Hexo, and you should see `sitemap.xml` and `baidusitemap.xml` generated in your public folder.

![Sitemap Generation](1.png)

## Verification

Next, submit your site to Baidu and Google Search Console. You'll need to verify ownership.

Google verification (URL prefix method recommended):
![Google Verification](3.png)

Baidu verification:
![Baidu Verification](2.png)

Both platforms usually provide an HTML meta tag or verification file. If using the meta tag, add it to your theme's `head.ejs` file.

![Head Code](4.png)

## Submitting Sitemaps

### Baidu

Go to the Link Submission section and submit your sitemap URL. Also check the "Crawl Diagnosis" tool.
![Baidu Sitemap](6.png)
![Baidu Diagnosis](5.png)

HTTPS certification usually takes a couple of days.
![HTTPS Passed](7.png)

### Google

![Google Sitemap](8.png)
Similar to Baidu, verify ownership and then submit your sitemap URL in the Search Console.

## Links

- [Baidu Webmaster Tools](https://ziyuan.baidu.com/site/index)
- [Google Search Console](https://search.google.com/search-console)
