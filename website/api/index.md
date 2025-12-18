---
title: API Overview
description: High-level overview of Futon's architecture and extensibility
footer: false
---

# API Overview

This page provides a high-level overview of Futon's architecture and extension points.

## Core Components

Futon is built with a modular architecture:

- **Parser System**: Pluggable manga source providers
- **Storage Layer**: Local database for favorites, history, and downloads
- **Sync Service**: Optional cloud synchronization
- **Reader Engine**: Customizable manga reading experience

## Extensibility

### Parsers

The primary extension point is through parsers. Each parser implements a standard interface to fetch manga content from different sources.

See the [Parsers documentation](/parsers/) for more details.

### Custom Sources

Developers can add custom sources by implementing the parser interface. Check the [futon-parsers](https://github.com/AppFuton/futon-parsers) repository for examples and contribution guidelines.

## For Developers

- **Main Repository**: [AppFuton/Futon](https://github.com/AppFuton/Futon)
- **Parsers Library**: [AppFuton/futon-parsers](https://github.com/AppFuton/futon-parsers)

Detailed API documentation is available in the code repositories and READMEs.
