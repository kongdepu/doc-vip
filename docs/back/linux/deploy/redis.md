---
lang: zh-CN
title: Redis
description: Redis
---

# 使用Linux安装Redis
简单介绍如何在Linux下安装Redis

## 1、创建安装目录
``` sh
[root@localhost /]# mkdir /usr/local/redis
```
## 2、进入安装包目录
``` sh
[root@localhost /]# cd /usr/local/src
```
## 3、进行下载安装包
官网地址：https://redis.io/download 我们下载的版本为v5.0.7
``` sh
[root@localhost src]# wget http://download.redis.io/releases/redis-5.0.7.tar.gz
```
## 4、进行解压
``` sh 
[root@localhost src]# tar -xzvf redis-5.0.7.tar.gz
```
## 5、进入redis-5.0.7此目录
``` sh
[root@localhost src]# cd redis-5.0.7
```
## 6、安装到指定目录中
``` sh
[root@localhost redis-5.0.7]# make PREFIX=/usr/local/redis install
```
## 7、配置文件
``` sh
[root@localhost redis-5.0.7]# cp redis.conf /usr/local/redis/bin/
```
## 8、启动服务
``` sh
[root@localhost redis-5.0.7]# cd /usr/local/redis/bin
[root@localhost bin]# ./redis-server /usr/local/redis/bin/redis.conf
```
## 9、修改配置文件
``` sh
[root@localhost bin]# vim /usr/local/redis/redis.conf
```
这里我要将daemonize改为yes，不这样操作则只要回到Linux控制台则redis服务会自动关闭
``` sh {3}
# By default Redis does not run as a daemon. Use 'yes' if you need it.
# Note that Redis will write a pid file in /var/run/redis.pid when daemonized.
daemonize yes

# If you run Redis from upstart or systemd, Redis can interact with your
# supervision tree. Options:
#   supervised no      - no supervision interaction
```
同时将bind 127.0.0.1 注释掉
``` sh {4}
# IF YOU ARE SURE YOU WANT YOUR INSTANCE TO LISTEN TO ALL THE INTERFACES
# JUST COMMENT THE FOLLOWING LINE.
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# bind 127.0.0.1

# Protected mode is a layer of security protection, in order to avoid that
# Redis instances left open on the internet are accessed and exploited.
#
# When protected mode is on and if:
```
这里我要将protected-mode改为no，不这样操作我们无法远程连接到redis
``` sh {3}
# even if no authentication is configured, nor a specific set of interfaces
# are explicitly listed using the "bind" directive.
protected-mode no

# Accept connections on the specified port, default is 6379 (IANA #815344).
# If port 0 is specified Redis will not listen on a TCP socket.
```
## 10、远程连接redis
完成

## 11、采取查看进程方式
``` sh
[root@localhost bin]# ps -aux | grep redis
```
## 12、采取端口监听查看方式
``` sh
[root@localhost bin]# netstat -lanp | grep 6379
```

[参考网站](https://www.cnblogs.com/AllWjw/p/15771097.html)
[参考网站](https://blog.csdn.net/qq_47831505/article/details/123883715)

