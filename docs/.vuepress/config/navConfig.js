module.exports = [
    {text: '介绍', link: '/guide/'},
    {text: '开发工具', link: '/dev-mean/'},
    {text: '实用插件', link: '/plug/'},
    {
        text: '后端开发',
        children: [
            {
                text: '操作系统',
                children: ['/back/linux/']
            },
            {
                text: '托管平台',
                children: ['/back/hosting/gitee/', '/back/hosting/github/']
            }
        ]
    },
    {
        text: '专接本',
        children: [
            {
                text: '专业课',
                children: ['/jieben/c/', '/jieben/wjyl/'],
            },
            {
                text: '公共课',
                children: ['/jieben/math/'],
            },
        ],
    },
    {
        text: '教资',
        children: [
            {
                text: '科目一',
                children: ['/jiaozi/subject-one/composition.md'],
            },
        ],
    },
    {text: 'Google', link: 'https://google.com'},
]