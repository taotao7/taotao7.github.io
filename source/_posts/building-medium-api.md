---
title: Medium API — Want Medium Data? This is All You Need
date: 2026-02-07 14:00:00
tags: featured
description: Done. A powerful REST API. Articles, users, publications—scrape it all. Stop struggling with the official interface.
---

Finally, it's here: **Medium API**.

People kept asking me, "How do I batch fetch Medium articles?" or "What do I do about the official API limits?". Well, problem solved. I built a full-suite REST API that lets you scrape all the article, user, and publication data you want.

Whether you're building a content aggregator, just want to scrape some data for analysis, or even want to build your own reader, this thing handles it all.

Same old drill, it's hosted on **RapidAPI**. Grab a key and you're good to go.

**Base URL**: `https://unofficial-medium-api-wrapper.p.rapidapi.com`

## What Can It Do?

Let's cut the fluff. Here's what you can query:

- **Articles**: Want Markdown? HTML? Plain text? You got it. You can even check claps and followers.
- **Users**: Like a background check. Who follows whom, who wrote what, public info... it's all there.
- **Publications**: Want to see what a specific column published? No problem.
- **Search**: Full-text search. Search whatever you want, even by tags.
- **Discovery**: The so-called "recommendation algo" data. Top articles, top writers, served up on a platter.
- **Lists**: Other people's reading lists. Grab 'em.

## Give It a Spin

Just toss `x-rapidapi-host` and `x-rapidapi-key` in the header. Get your key at [RapidAPI](https://rapidapi.com).

### Show Me the Code

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
console.log(data); // Done.
```

#### Python (requests)

```python
import requests

headers = {
    "x-rapidapi-host": "unofficial-medium-api-wrapper.p.rapidapi.com",
    "x-rapidapi-key": "YOUR_RAPIDAPI_KEY"
}
# One line to rule them all
response = requests.get(
    "https://unofficial-medium-api-wrapper.p.rapidapi.com/api/user/1234567890",
    headers=headers
)
print(response.json())
```

#### cURL

```bash
# For the CLI crowd
curl --request GET \
     --url https://unofficial-medium-api-wrapper.p.rapidapi.com/api/user/{user_id}/top-articles \
     --header 'x-rapidapi-host: unofficial-medium-api-wrapper.p.rapidapi.com' \
     --header 'x-rapidapi-key: YOUR_RAPIDAPI_KEY'
```

## What Does the Data Look Like?

Standard JSON. Clean, sharp, no messy nesting:

```json
{
  "success": true,
  "data": {
    "id": "abc123",
    "username": "johndoe",
    "fullname": "John Doe",
    "followers_count": 1250 // Not bad
  }
}
```

## Issues?

Got a problem? Holler at me via `support@taotao7.top`.

Don't be shy, go wild. I want to see what kind of cool stuff you build with this API.
