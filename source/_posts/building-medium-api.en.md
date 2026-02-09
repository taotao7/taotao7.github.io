---
title: Medium API — The Ultimate Tool for Medium Data
date: 2026-02-07 14:00:00
tags: featured
description: A powerful REST API to scrape articles, users, and publications. Built to overcome official interface limitations.
slug: building-medium-api
permalink: 2026/02/07/building-medium-api/
---

Finally, it's here: **Medium API**.

It started with a simple personal requirement: I needed a way to batch fetch Medium articles efficiently while bypassing the limitations of the official API. What began as a solution to my own problem quickly evolved into something bigger. I built a full-suite REST API that allows you to scrape comprehensive data on articles, users, and publications.

Whether you are building a content aggregator, gathering data for analysis, or developing a custom reader, this tool handles it all.

It is hosted on **RapidAPI**. Simply grab a key and you are ready to go.

**Base URL**: `https://unofficial-medium-api-wrapper.p.rapidapi.com`

## Capabilities

Here is what you can query:

- **Articles**: Retrieve content in Markdown, HTML, or plain text. You can also access metadata like claps and followers.
- **Users**: Get deep insights—followers, following lists, publication history, and public profile info.
- **Publications**: Fetch articles and details from specific publications.
- **Search**: Perform full-text searches, including filtering by tags.
- **Discovery**: Access recommendation algorithm data, including top articles and top writers.
- **Lists**: Scrape reading lists from other users.

## Getting Started

Add `x-rapidapi-host` and `x-rapidapi-key` to your request headers. Get your key at [RapidAPI](https://rapidapi.com/mocatao7/api/unofficial-medium-api-wrapper).

### Code Examples

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

## Response Format

The API returns standard, clean JSON without unnecessary nesting:

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

## Support

If you encounter any issues, feel free to reach out via `support@taotao7.top`.

I am excited to see what you build with this API.
