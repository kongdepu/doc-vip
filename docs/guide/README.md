---
lang: zh-CN
title: 起步
description: 
---

# 介绍
仅仅是个人笔记

## 划分vlan
```
en 
config
hostname sw1

int fa0/3
switch mode trunk
exit

int fa0/1
switch access vlan 10
exit

int fa0/2
switch access vlan 20
exit
```

## 路由器基本操作
```
en
config
hostname r1
enable secret 123456
exit
exit

en
123456
config
line vty 0 4
password 123456789
login
exit
int fa0/0
ip add 192.168.1.2 255.255.255.0
no shut
```

```
com.kdp
|-----annotation                 // 自定义注解
|-----aspect                     // 切面类
|-----async                      // 异步方法
|-----config                     // 全局配置
|-----constant                   // 常量类
|-----controller                 // 控制层
|-----dao                        // 结构层
|-----framework                  // 系统框架
|-----impl                       // 业务逻辑层
|-----interceptor                // 拦截器
|-----pojo                       // 实体类
|-----service                    // 业务逻辑层
|-----utils                      // 工具类
resources
|-----applicationContext.xml     // 全局配置项
|-----db.properties              // 数据库相关数据
|-----log4j.properties           // 错误日志的打印
|-----mybatis-config.xml         // 持久层层的相关配置
|-----redis.properties           // redis相关数据
|-----SpringMvc-config.xml       // springMvc的相关配置
|-----threadPool.xml             // 异步方法的相关配置
```