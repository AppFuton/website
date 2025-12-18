---
title: Download
description: Get the latest version of Futon for Android
footer: false
---

# Download Futon

Get the latest version of Futon manga reader for Android.

## Stable Release

The stable version is recommended for most users. It's well-tested and suitable for daily use.

::: tip Latest Stable Release
**Download from [GitHub Releases](https://github.com/AppFuton/Futon/releases/latest)**

Get the APK file named `futon-*.apk` from the latest release.
:::

## Nightly Builds

Want to try the latest features before they're officially released? Nightly builds are automatically generated from the latest code.

::: warning Experimental Builds
Nightly builds may contain bugs and unstable features. Use at your own risk and always keep a backup of your data!

**Download from [GitHub Releases](https://github.com/AppFuton/Futon/releases)**

Look for pre-release versions tagged as "nightly" or with a commit hash.
:::

## System Requirements

- **Android Version**: 6.0 (Marshmallow) or higher
- **Storage**: Approximately 10MB for the app
- **Permissions**: Storage (for downloads and backups), Network (for source access)

## Installation Instructions

### First Time Installation

1. **Download** the APK file for your desired version
2. **Enable Unknown Sources**:
   - Go to your device Settings
   - Navigate to Security or Apps
   - Enable "Install from Unknown Sources" or "Allow from this source"
3. **Install**:
   - Open the downloaded APK file
   - Tap "Install" and wait for completion
   - Tap "Open" to launch Futon

### Updating Futon

1. Download the latest APK
2. Open and install (you don't need to uninstall the old version)
3. Your data will be preserved

::: tip Backup Before Updating
It's always a good idea to create a backup before updating. Go to Settings → Data and privacy → Create data backup.
:::

## Troubleshooting

### "App not installed" error

- Make sure you have enough storage space
- Try uninstalling the old version first (backup your data!)
- Ensure you're installing the correct architecture for your device

### Installation blocked by Play Protect

Google Play Protect may warn you about installing apps from outside the Play Store. This is normal for open-source apps distributed independently.

1. Tap "More details"
2. Select "Install anyway"

## Other Resources

- **[GitHub Repository](https://github.com/AppFuton/Futon)** - Source code and development
- **[Issue Tracker](https://github.com/AppFuton/Futon/issues)** - Report bugs or request features
- **[Parsers Library](https://github.com/AppFuton/futon-parsers)** - Source providers
- **[Getting Started Guide](/manuals/guides/getting-started/)** - First-time setup help

## Verification

For security-conscious users, you can verify the APK signature:

```bash
apksigner verify --print-certs futon-*.apk
```

Official builds are signed with the Futon release key.
