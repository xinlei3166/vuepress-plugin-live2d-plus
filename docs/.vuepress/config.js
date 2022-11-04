import { defaultTheme, defineUserConfig } from 'vuepress'
import { live2dPlugin } from '../../node'

const locales = {
  '/': {
    'hide-text': 'Hide',
    'show-text': 'Expand',
    'copy-button-text': 'Copy',
    'copy-success-text': 'Copy success'
  },
  '/zh': {
    'hide-text': '隐藏代码',
    'show-text': '显示代码',
    'copy-button-text': '复制代码片段',
    'copy-success-text': '复制成功'
  }
}

export default defineUserConfig({
  title: 'VuePress',
  description: 'Life is short, Keep it simple.',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  base: process.env.BASE || '/',
  port: 3000,
  theme: defaultTheme({
    repo: 'xinlei3166/vuepress-plugin-demoblock',
    logo: '/logo.png',
    docsDir: 'docs',
    docsBranch: 'master',
    darkMode: true,

    // navbar
    navbar: [
      { text: '文档', link: '/guide/' }
    ],

    // sidebar
    sidebar: { '/guide/': [
        {
          text: '指南',
          link: '/guide/'
        },
        {
          text: '组件',
          link: '/guide/card.md'
        },
        {
          text: '第三方',
          link: '/guide/other.md'
        }
      ]
    },

    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
  }),
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false, level: [1, 2] },

    // options for markdown-it-toc
    toc: { level: [1, 2] },

    extractHeaders: { level: [ 'h2', 'h3', 'h4' ] },

    // disable line-numbers
    code: { lineNumbers :false }
  },
  plugins: [
    live2dPlugin()
  ]
})
