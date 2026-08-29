/**
 * 导航栏配置
 * @see https://theme-plume.vuejs.press/config/navigation/
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '笔记', link: '/notes/' },
  { text: '标签', link: '/notes/tags/' },
  { text: '归档', link: '/notes/archives/' },
  { text: '项目', link: '/projects/' },
  { text: '关于', link: '/about/' },
])