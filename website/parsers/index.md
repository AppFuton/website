---
title: Parsers Library
description: Instructions for using the Futon parser library
footer: false
---

# Futon Parsers

Futon uses provider-specific parsers to fetch and process manga content from various sources.

## Overview

The Futon parsers library is maintained separately to allow for independent updates and community contributions. It provides access to 1000+ manga sources across multiple languages.

- **Repository**: [AppFuton/futon-parsers](https://github.com/AppFuton/futon-parsers)
- **Original**: Based on [Kotatsu parsers](https://github.com/KotatsuApp/kotatsu-parsers)

## Using the Library

For developers integrating the parsers library into their projects:

```groovy
dependencies {
    implementation("com.github.AppFuton:futon-parsers:$parsers_version")
}
```

See the repository README for detailed integration instructions and available versions.

## Contributing

Contributions are welcome! To add or improve parsers:

1. Fork the [futon-parsers](https://github.com/AppFuton/futon-parsers) repository
2. Follow the contribution guidelines in the repository
3. Submit a pull request with your changes

## Projects Using Futon Parsers

- [Futon](https://github.com/AppFuton/Futon) - The main Android application

## Acknowledgements

The Futon parsers library is based on the excellent work by the Kotatsu parsers team. We maintain compatibility while adding community-requested features and sources.

## DMCA Disclaimer

The developers of Futon have no affiliation with the content available through the parsers. Content is collected from sources freely available through any web browser.
