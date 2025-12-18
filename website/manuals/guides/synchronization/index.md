---
title: Synchronization
description: Allows you to continue reading on your device from where you left off on another device
footer: false
---

# Synchronization

Allows you to continue reading on your device from where you left off on another device.

::: danger Experimental feature
This function is experimental. Please make sure you have a backup to avoid data loss.
:::

## What is synchronization?

Synchronization is needed to store your collection of favorites, history and categories and have remote access to them. On a synchronized device, you can restore your manga collection in real time without loss. It also supports working across multiple devices.

## How does synchronization work?

- An account is created and configured in the application where it will store data
- Synchronization starts. The data selected by the user is saved on the service and stored there under protection
- Another device connects and syncs with the service
- The uploaded data appears on the device connected to the account

## What data can be synchronized?

- Favorites (with categories)
- History

## How do I sync my data?

Go to Settings → Services, then select **Synchronization**. Enter your email address and password.

::: warning Attention
There is no password recovery at the moment. If you forget the password, you will not be able to log into your account on other devices.
:::

After authorization/registration, you will return to Settings. Select **Synchronization** again to configure what you want to sync (history, favorites, or both).

## Can I use a synchronization server on my hosting?

Yes, you can host your own sync server. Check the [futon-parsers](https://github.com/AppFuton/futon-parsers) repository for more information.
