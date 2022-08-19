module.exports =
{
  // 介绍
  '/guide/': [
    {
      text: '介绍',
      children: [],
    },
  ],
  // 开发工具
  '/dev-mean/': [
    {
      text: '开发工具',
      children: ['/dev-mean/git.md', '/dev-mean/idea.md', '/dev-mean/vs-code.md'],
    },
  ],
  // 实用插件
  '/plug/': [
    {
      text: '实用插件',
      children: ['/plug/docker.md'],
    },
  ],
  // 后端开发
  '/back/linux/': [
    {
      text: '简介',
      collapsible: false,
      children: []
    },
    {
      text: '部署',
      collapsible: false,
      children: ['/back/linux/deploy/php.md']
    }
  ],
  // 专接本 
  '/jieben/': [
    {
      text: 'C语言',
      collapsible: false,
      children: ['/jieben/c/const.md', '/jieben/c/programming.md']
    },
    {
      text: '微机原理',
      collapsible: false,
      children: ['/jieben/wjyl/chapter-one.md', '/jieben/wjyl/chapter-two.md', '/jieben/wjyl/chapter-three.md','/jieben/wjyl/chapter-four.md', '/jieben/wjyl/chapter-five.md', '/jieben/wjyl/chapter-six.md',]
    },
    {
      text: '高数',
      collapsible: false,
      children: []
    }
  ],
}
