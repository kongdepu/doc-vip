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
                            ]
                        }
                    ]
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
                children: ['/jieben/wjyl/chapter-one.md', '/jieben/wjyl/chapter-two.md', '/jieben/wjyl/chapter-three.md', '/jieben/wjyl/chapter-four.md', '/jieben/wjyl/chapter-five.md', '/jieben/wjyl/chapter-six.md',]
            },
            {
                text: '高数',
                collapsible: false,
                children: []
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
