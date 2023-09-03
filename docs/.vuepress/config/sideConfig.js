module.exports =
    {
        // 介绍
        '/guide/': [
            {
                text: '介绍',
                children: ['/guide/vue.md'],
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
        // 前端开发
        '/front/': [
            {
                text: 'APP',
                collapsible: false,
                children:
                    [
                        {
                            text: '简介',
                            collapsible: false,
                            children: ['/front/mobile/']
                        },
                        {
                            text: 'Flex',
                            collapsible: false,
                            children: ['/front/mobile/flex.md']
                        }
                    ]
            }
        ],
        // 后端开发
        '/back/': [
            {
                text: '托管平台',
                collapsible: false,
                children:
                    [
                        {
                            text: '简介',
                            collapsible: false,
                            children: ['/back/hosting/']
                        },
                        {
                            text: 'Gitee',
                            collapsible: false,
                            children: ['/back/hosting/gitee/']
                        },
                        {
                            text: 'Github',
                            collapsible: false,
                            children: ['/back/hosting/github/', '/back/hosting/github/pages/']
                        },
                    ]
            },
            {
                text: 'Linux',
                collapsible: false,
                children:
                    [
                        {
                            text: '简介',
                            collapsible: false,
                            children: ['/back/linux/']
                        },
                        {
                            text: '安装环境',
                            collapsible: false,
                            children: 
                            [
                                '/back/linux/deploy/php.md', 
                                '/back/linux/deploy/tomcat.md',
                                '/back/linux/deploy/jdk.md',
                                '/back/linux/deploy/nginx.md',
                                '/back/linux/deploy/mysql.md',
                                '/back/linux/deploy/redis.md',
                            ]
                        }
                    ]
            }
        ],
        // 专接本 
        '/language/': [
            {
                text: 'C语言',
                collapsible: false,
                children: ['/language/c/const.md', '/language/c/programming.md']
            },
            {
                text: 'Python',
                collapsible: false,
                children: ['/language/python/init.md']
            },
            {
                text: '微机原理',
                collapsible: false,
                children: ['/language/wjyl/chapter-one.md', '/language/wjyl/chapter-two.md', '/language/wjyl/chapter-three.md', '/language/wjyl/chapter-four.md', '/language/wjyl/chapter-five.md', '/language/wjyl/chapter-six.md',]
            }
        ],
        // 教资
        '/jiaozi/': 
        [
            {
                text: '科目一',
                collapsible: false,
                children: ['/jiaozi/subject-one/', '/jiaozi/subject-one/composition.md' ]
            },
            {
                text: '科目二',
                collapsible: false,
                children: ['/jiaozi/subject-two/' ]
            }
        ]
    }
