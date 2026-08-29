/**
 * 主题配置 - 参见主题文档：
 * - https://theme-plume.vuejs.press/config/intro/   配置说明
 * - https://theme-plume.vuejs.press/config/theme/   主题配置项
 *
 * 对此文件的修改会重启 vuepress 服务。
 * 部分配置项的更新不必重启，建议放在 `.vuepress/plume.config.ts` 中配置。
 * 请不要在两个文件中重复配置相同项，当前文件中的配置会覆盖 plume.config.ts 中的同名项。
 */

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: 'kiwi-embedded',
  description: 'kiwi-embedded 的个人文档站：开源项目介绍、文档与日常学习笔记',

  head: [
    // 站点图标，可换成自己的 png/svg
    ['link', { rel: 'icon', type: 'image/png', href: 'https://theme-plume.vuejs.press/favicon-32x32.png' }],
  ],

  bundler: viteBundler(),
  shouldPrefetch: false, // 站点较大、页面较多时建议关闭

  theme: plumeTheme({
    /* 部署域名，有助于 SEO 与 sitemap 生成 */
    hostname: 'https://kiwi-embedded.github.io',

    /* 文档仓库配置，用于页内 editLink / 最后更新时间 */
    docsRepo: 'kiwi-embedded/kiwi-embedded.github.io',
    docsDir: 'docs',
    docsBranch: 'master',

    /* 页内信息 */
    editLink: true,
    lastUpdated: true,
    // contributors: true,
    // changelog: false,

    /**
     * 编译缓存，加快编译速度
     * @see https://theme-plume.vuejs.press/config/basic/#cache
     */
    cache: 'filesystem',

    /**
     * 为 markdown 自动补齐 frontmatter
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    autoFrontmatter: {
      permalink: true,
      createTime: true,
      title: true,
    },

    /* 本地搜索 */
    search: { provider: 'local' },

    /* 文章字数统计、阅读时间 */
    readingTime: true,

    /**
     * markdown 扩展
     * @see https://theme-plume.vuejs.press/config/markdown/
     */
    markdown: {
      image: {
        figure: true,
        lazyload: true,
        mark: true,
        size: true,
      },
      include: true,
      // echarts: true,
      // mermaid: true,
      // math: { type: 'katex' },
    },
  }),
})