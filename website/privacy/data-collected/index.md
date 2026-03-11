---
title: Data Sent to Developers
description: What data Futon collects and sends to its developers
footer: false
---

# Data Sent to Developers

What data Futon collects and sends to its developers.

::: tip Summary
By default, **no data is sent to Futon developers**. The only data that can ever reach our servers is opt-in crash reports. Everything else stays entirely on your device.
:::

## Crash reports

Crash reporting is **opt-in and disabled by default**. You are prompted to enable it on first launch, and you can change your choice anytime.

### What is included

- Stack traces — technical details of the error or crash
- Android version
- Device manufacturer
- App version number
- Build flavor (debug, release, or nightly)

### What is NOT included

- Name, email, or any personal identification
- Reading history or manga data
- Usernames, passwords, or account credentials
- Downloaded content or media files
- Favorites, bookmarks, or reading statistics
- Search history
- Device identifiers (IMEI, Android ID, advertising ID)
- Location data
- Any behavioral or tracking data

### Where crash data goes

Crash reports are sent to **Sentry.io**, a third-party crash reporting service, encrypted via HTTPS. Only Futon developers can access this data. Reports are retained for approximately **90 days** then automatically deleted.

### How to enable or disable

Go to **Settings → Services → Send Crash Reports** to toggle this at any time.

## Sync data

If you opt in to the Sync feature and connect to a sync server, your chosen sync data (reading history, favorites, bookmarks) is sent to that server. Futon does not operate an official sync server — you choose your own server or self-host.

::: warning Note
You are responsible for the privacy policy of the sync server you use. Futon developers do not receive your sync data unless you specifically use a server they operate.
:::

## Data that never leaves your device

The following stays entirely local and is never transmitted to Futon developers:

- Reading history and progress
- Favorites and bookmarks
- Downloaded manga files
- Reading statistics and time tracking
- UI preferences and settings
- Search history
- Cached images and data
- Cookies from manga sources

## Data sent to external services (not Futon)

Some optional features send data **directly to third-party services**, not to Futon:

| Service | What's sent | Your control |
|---------|-------------|--------------|
| Manga source websites (MangaDex, MAL, etc.) | Manga queries, your IP address | Choose which sources to enable |
| Scrobbling services (MyAnimeList, AniList, Kitsu, Shikimori) | Reading progress, ratings | Opt-in; disconnect anytime |
| Discord | Current manga/chapter for status display | Opt-in; disconnect anytime |

::: tip Note
These services are not controlled by Futon. Review each service's privacy policy independently before connecting.
:::

## What we don't do

- No Google Analytics or similar third-party analytics
- No tracking of what manga you read
- No behavioral profiling or user tracking
- No ad networks (Facebook Pixel, AdMob, etc.)
- No device fingerprinting
- No location tracking
- No selling or monetizing user data

## Transparency

Futon is fully open source. You can review the exact code responsible for data collection and crash reporting at [github.com/AppFuton/Futon](https://github.com/AppFuton/Futon). Community members actively audit the codebase to verify these privacy claims.

## Your controls

**Settings → Services**
- Enable or disable crash reporting

**Settings → Services**
- Connect or disconnect scrobbling services
- Manage sync server connection
- Revoke service authorizations

## Frequently asked questions

### Does Futon track what manga I read?

No. Reading history is stored only on your device unless you enable Sync and explicitly choose a sync destination.

### Who can access crash reports?

Only Futon developers, via Sentry.io. No third parties have access to this data.

### What if I don't want any data sent at all?

Disable crash reporting in **Settings → Services → Send Crash Reports**. The app works fully without sending anything to Futon.

### Is my data encrypted?

Yes. Crash reports are encrypted in transit via HTTPS. Local data is stored in an encrypted database on your device.

## Questions or concerns?

- **GitHub Issues:** [github.com/AppFuton/Futon/issues](https://github.com/AppFuton/Futon/issues)
- **Discord Community:** [discord.gg/9sqBHXhwzz](https://discord.gg/9sqBHXhwzz)
- **Email:** [futon@waifu.club](mailto:futon@waifu.club)
