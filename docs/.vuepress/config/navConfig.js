module.exports = [
    {text: '介绍', link: '/guide/'},
    {text: '开发工具', link: '/dev-mean/'},
    {text: '实用插件', link: '/plug/'},
    {
        text: '前端开发',
        children: [
            {
                text: 'APP',
                children: ['/front/mobile/flex.md']
            }
        ]
    },
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
        text: '编程语言',
        children: [
            {
                text: '语言',
                children: ['/language/c/', '/language/python/', '/language/wjyl/'],
            }
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