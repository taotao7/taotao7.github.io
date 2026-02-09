---
title: Axios File Download with Ant Design Button
date: 2020-12-07
tags: [Frontend, Axios]
slug: axios-download-button
permalink: 2020/12/07/axios-download-button/
---

# Axios

![Code Example](1.png)

Here's a quick implementation using an Ant Design button to trigger a file download. The logic applies to any UI framework—the core is handling the Axios response.

The key is setting `responseType: 'blob'` in the request config.

1.  **Request**: Send a GET request with `responseType: 'blob'`.
2.  **Blob Handling**: Verify you received the file.
3.  **Trigger Download**: Create a temporary URL for the blob, assign it to a hidden `<a>` tag's `href`, set the `download` attribute to your desired filename, and programmatically click it.
4.  **Cleanup**: Append the tag to the body, click it, and you're done.

This pattern handles the binary data correctly and forces the browser to download the file instead of trying to display it.
