import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Futon',
  description: 'Futon — an anime/manga tracking toolkit (fork of Kotatsu)',
  lang: 'en-US',
  appearance: true,
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: '/logo-compact.svg',
    nav: [
      {
        text: 'Download',
        link: '/download/'
      },
      {
        text: 'User Manual',
        link: '/manuals/guides/getting-started/',
        activeMatch: '/manuals/'
      },
      {
        text: 'Parsers',
        link: '/parsers/'
      }
    ],
    sidebar: {
      '/': [
        {
          text: 'General',
          items: [
            { text: 'Download', link: '/download/' },
            { text: 'Parsers', link: '/parsers/' }
          ]
        },
        {
          text: 'Frequently Asked Questions',
          items: [
            { text: 'General', link: '/manuals/faq/general/' },
            { text: 'Feed', link: '/manuals/faq/feed/' },
            { text: 'Explore', link: '/manuals/faq/explore/' },
            { text: 'Reader', link: '/manuals/faq/reader/' },
            { text: 'Settings', link: '/manuals/faq/settings/' },
            { text: 'Miscellaneous', link: '/manuals/faq/miscellaneous/' }
          ]
        },
        {
          text: 'Guides',
          items: [
            { text: 'Getting started', link: '/manuals/guides/getting-started/' },
            { text: 'Troubleshooting', link: '/manuals/guides/troubleshooting/' },
            { text: 'Backups', link: '/manuals/guides/backups/' },
            { text: 'Tracking', link: '/manuals/guides/tracking/' },
            { text: 'Categories', link: '/manuals/guides/categories/' },
            { text: 'Synchronization', link: '/manuals/guides/synchronization/' }
          ]
        },
        {
          text: 'Privacy',
          items: [
            { text: 'Data Sent to Developers', link: '/privacy/data-collected/' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AppFuton/Futon' }
    ],
    editLink: {
      pattern: 'https://github.com/AppFuton/website/edit/main/website/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Futon is a fork of Kotatsu. Released under the GPL-3.0 License.',
      copyright: 'Copyright © 2025 AppFuton | Original work by Kotatsu Developers'
    },
    search: {
      provider: 'local'
    }
  }
})
