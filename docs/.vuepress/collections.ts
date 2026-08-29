/**
 * Collections 配置
 * @see https://theme-plume.vuejs.press/guide/collection/
 *
 * 请先在此处配置 Collections，然后再启动 vuepress。
 *
 * - type = ''post''：文档列表类型（无侧边栏，有文档列表页）
 *                  适合：博客、专栏 等以文章列表聚合的内容（碎片化）
 * - type = ''doc''：文档类型（带侧边栏导航）
 *                 适合：笔记、知识库、文档 等以侧边导航聚合的内容（成体系）
 * 如果发现侧边栏没显示，请检查文档 permalink 是否以对应 collection 的 link 前缀开头。
 */

import { defineCollection, defineCollections } from 'vuepress-theme-plume'

/**
 * 学习笔记
 * - post 类型：以列表 + 标签 + 归档形式聚合
 * - 注意：tagsLink / archivesLink / categoriesLink 需要显式给出，
 *   否则模板会把 link 的尾斜杠一起拼进去，出现 //notes//tags/ 这种双斜杠 URL。
 */
const notes = defineCollection({
  type: 'post',
  dir: 'notes',
  title: '学习笔记',
  link: '/notes/',
  linkPrefix: '/notes/',
  postList: true,
  tags: true,
  tagsLink: '/notes/tags/',
  tagsText: '标签',
  archives: true,
  archivesLink: '/notes/archives/',
  archivesText: '归档',
  categories: true,
  categoriesLink: '/notes/categories/',
  categoriesText: '分类',
  pagination: 10,
})

/**
 * 开源项目
 * - doc 类型：带侧边栏导航，适合结构化的项目文档
 * - sidebar 留 ''auto'' 时会按目录结构自动生成；也可手写
 */
const projects = defineCollection({
  type: 'doc',
  dir: 'projects',
  linkPrefix: '/projects/',
  title: '开源项目',
  sidebar: 'auto',
})

export default defineCollections([
  notes,
  projects,
])