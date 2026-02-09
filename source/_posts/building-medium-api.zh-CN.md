---
title: Medium API — Medium 数据的终极工具
date: 2026-02-07 14:00:00
tags: featured
description: 一个强大的 REST API，用于抓取文章、用户和出版物。专为克服官方接口限制而构建。
slug: building-medium-api
permalink: 2026/02/07/building-medium-api/
---

终于来了：**Medium API**。

它始于一个简单的个人需求：我需要一种高效批量获取 Medium 文章的方法，同时绕过官方 API 的限制。最初只是为了解决自己的问题，很快演变成了更大的项目。我构建了一套全功能的 REST API，允许你抓取关于文章、用户和出版物的全面数据。

无论你是构建内容聚合器、收集数据进行分析，还是开发自定义阅读器，这个工具都能搞定。

它托管在 **RapidAPI** 上。只需获取一个密钥即可开始使用。

**Base URL**: `https://unofficial-medium-api-wrapper.p.rapidapi.com`

## 功能

你可以查询的内容包括：

- **文章**: 获取 Markdown、HTML 或纯文本格式的内容。还可以访问点赞数和关注者等元数据。
- **用户**: 获取深度洞察——关注者、关注列表、发布历史和公开资料信息。
- **出版物**: 获取特定出版物的文章和详细信息。
- **搜索**: 执行全文搜索，包括按标签过滤。
- **发现**: 访问推荐算法数据，包括热门文章和顶级作者。
- **列表**: 抓取其他用户的阅读列表。

## 快速开始

在请求头中添加 `x-rapidapi-host` 和 `x-rapidapi-key`。在 [RapidAPI](https://rapidapi.com/mocatao7/api/unofficial-medium-api-wrapper) 获取你的密钥。

### 代码示例

#### JavaScript (fetch)

```javascript
const response = await fetch(
  "https://unofficial-medium-api-wrapper.p.rapidapi.com/api/user/1234567890",
  {
    headers: {
      "x-rapidapi-host": "unofficial-medium-api-wrapper.p.rapidapi.com",
      "x-rapidapi-key": "YOUR_RAPIDAPI_KEY",
    },
  },
);
const data = await response.json();
console.log(data);
```

#### Python (requests)

```python
import requests

headers = {
    "x-rapidapi-host": "unofficial-medium-api-wrapper.p.rapidapi.com",
    "x-rapidapi-key": "YOUR_RAPIDAPI_KEY"
}

response = requests.get(
    "https://unofficial-medium-api-wrapper.p.rapidapi.com/api/user/1234567890",
    headers=headers
)
print(response.json())
```

#### cURL

```bash
# For the CLI enthusiasts
curl --request GET \
     --url https://unofficial-medium-api-wrapper.p.rapidapi.com/api/user/{user_id}/top-articles \
     --header 'x-rapidapi-host: unofficial-medium-api-wrapper.p.rapidapi.com' \
     --header 'x-rapidapi-key: YOUR_RAPIDAPI_KEY'
```

## 响应格式

API 返回标准、干净的 JSON，没有不必要的嵌套：

```json
{
  "success": true,
  "data": {
    "id": "abc123",
    "username": "johndoe",
    "fullname": "John Doe",
    "followers_count": 1250
  }
}
```

## 支持

如果遇到任何问题，请随时通过 `support@taotao7.top` 联系。

我很期待看到你用这个 API 构建出什么。
