const { defaultTheme } = require('vuepress')
const headConfig = require('./config/headConfig') // 页面头部
const navConfig = require('./config/navConfig') // 导航栏
const sideConfig = require('./config/sideConfig') // 侧边栏
const pluginsConfig = require('./config/pluginsConfig') // 插件

module.exports = {
    base: '/',
    lang: 'zh-CN',
    title: '晴缘 ',
    head: headConfig,
    description: 'VuePress',
    theme: defaultTheme({
        // Public 文件路径
        logo: '/images/logo.png',
        // 导航栏
        navbar: navConfig,
        // 侧边栏
        sidebar: sideConfig,
        // 更新时间
        lastUpdatedText: '更新时间',
        // 贡献者
        contributorsText: '贡献者',
    }),
    // 插件
    plugins: pluginsConfig,
}