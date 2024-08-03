import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme(),

    lang: 'zh-CN',
    title: '你好， 崔云翔 ！',
    description: '学习记录',
})
