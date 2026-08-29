/**
 * 主题配置 - 参见主题文档：
 * - https://theme-plume.vuejs.press/config/intro/   配置说明
 * - https://theme-plume.vuejs.press/config/theme/   主题配置项
 *
 * 对此文件的修改通过热更新生效，部分配置项不支持热更新，
 * 那些项请放在 `.vuepress/config.ts` 中配置。
 *
 * 请不要在两个文件中重复配置相同项，当前文件的配置会覆盖 config.ts 中的同名项。
 */

import { defineThemeConfig } from 'vuepress-theme-plume'
import navbar from './navbar'
import collections from './collections'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  // 站点 logo，留空则使用站点首字母
  // logo: '/logo.png',

  appearance: true, // 启用 浅色 / 深色 模式切换

  social: [
    { icon: 'github', link: 'https://github.com/kiwi-embedded' },
  ],
  navbarSocialInclude: ['github'],

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  copyright: true,
  // prevPage: true,
  // nextPage: true,
  createTime: true,

  /**
   * 站点页脚
   */
  footer: {
    message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
    copyright: 'Copyright © 2024-present kiwi-embedded',
  },

  /**
   * 站点 profile（用于首页与个人主页）
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    // avatar 留空则使用 logo 或站点首字母；可填本地路径或图片链接
    // avatar: '/avatar.png',
    name: 'kiwi-embedded',
    description: '嵌入式 · 开源 · 学习记录',
    // circle: true,
    // location: '',
    // organization: '',
    // avatarLink: '',
  },

  navbar,
  collections,
})