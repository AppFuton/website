---
title: Troubleshooting
description: Facing source or app issues? Here's how to troubleshoot
footer: false
---

# Troubleshooting

Facing source or app issues? Here's how to troubleshoot.

Be sure to check the [Frequently Asked Questions](/manuals/faq/general/) for how to address common issues too.

## General

### Obtaining crash/error logs

For crash investigations, navigate to Settings → About and tap **Share logs**.

### Obtaining more logs

To diagnose abnormal app behavior, record device logs using a Logcat Reader app from the Play Store.

## Common issues

### App crashes on startup

1. Update to the latest version
2. Clear app cache
3. Reinstall if necessary

### Sources not loading

1. Check your internet connection
2. Try a different source
3. Clear network cache in settings

### Images not displaying

1. Exit and re-enter the reader
2. Check if the source is working in a browser
3. Try a different source for the series

## HTTP errors

### HTTP Error: 403 - Forbidden

Possible reasons for this error:

- The selected source has protection enabled
- The source might be down or banned your IP

### HTTP Error: 404 - Not Found

This error likely indicates a down source or removed series. Consider switching to a different source.

### HTTP Error: 429 - Too Many Requests

This error suggests the source temporarily banned your IP due to fast downloads/reads.

### HTTP Error: 5xx

Errors like `500`, `502`, etc., indicate server-side issues on the source's end.
