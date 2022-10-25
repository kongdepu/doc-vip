---
lang: zh-CN
title: Pages
description: Github
---

## Vue项目打包部署到GitHub Pages的实现步骤

## 1.修改vue.config.js
``` js {3}
// 所有配置项说明可在中找到 https://cli.vuejs.org/config/
module.exports = {
  publicPath: './'
}
```
把`vue.config.js`里的`publicPath`从`"/"`(根目录下)换成了`"./"`(当前目录下)，实际用服务器部署的时候可能还会把资源放到某个目录下，`publicPath`需要和文件路径对应上，具体场景看下`network`的请求去调试即可

## 2.修改router下的index.js
``` js
const createRouter = () => new Router({
  mode: 'hash', // hash 不需要nginx代理 history 需要nginx代理并去除url中的#
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
```
`文档地址:`https://router.vuejs.org/zh/guide/essentials/history-mode.html [点击进入](https://router.vuejs.org/zh/guide/essentials/history-mode.html/)
::: tip  提示
hash模式url带有#号，history不带。如果考虑url的规范，那么久需要使用history模式，因为history模式没有#号，适合开发习惯。使用history模式还有一个问题就是，在访问二级页面的时候，做刷新操作，会出现404错误，那么就需要和后端配合让他配置一下apache或是nginx的url重定向，重定向到你的首页路由。
:::
## 3.在项目下创建deploy.sh
``` sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误 
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# 如果是发布到自定义域名
echo 'www.baidu.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# cd -
```
`<USERNAME>`账户名称 `<PERO>`仓库名称
## 4.修改package.json
将`deploy.sh`添加到`package.json`
``` js {2}
"scripts": {
    "deploy": "bash deploy.sh"
},
```
## 5.运行
在`bash`中运行`npm run deploy`
## 6.完结
这样你也可以轻松的用github管理代码