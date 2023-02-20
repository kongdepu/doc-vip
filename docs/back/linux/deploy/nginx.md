---
lang: zh-CN
title: Nginx
description: Nginx
---

# 使用Linux安装Nginx
简单介绍如何在Linux下安装Nginx

## 1、安装依赖包
一键安装上面四个依赖
``` sh
[root@localhost /]# yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
```

## 2、下载并解压安装包
1. 创建nginx目录：用于存放上传的软件
``` sh 
[root@localhost /]# cd /usr/local
[root@localhost local]# mkdir nginx
[root@localhost local]# cd nginx
```
2. 下载tar包，并解压
``` sh 
[root@localhost nginx]# wget http://nginx.org/download/nginx-1.13.7.tar.gz
[root@localhost nginx]# tar -xvf nginx-1.13.7.tar.gz
```

## 3、安装nginx
1. 进入nginx目录
``` sh
[root@localhost nginx]# cd nginx-1.13.7
```
2. 执行命令 考虑到后续安装ssl证书 添加两个模块
``` sh
[root@localhost nginx-1.13.7]# ./configure --with-http_stub_status_module --with-http_ssl_module
```
3. 编译，使用make命令，然后会生成很多.c的文件
``` sh
[root@localhost nginx-1.13.7]# make
```
4. 安装，使用make install命令
``` sh
[root@localhost nginx-1.13.7]# make install
```

## 4、启动nginx
进入到nginx目录，sbin目录就是存放了我们的启动文件，使用./nginx 命令来启动Nginx

先移步到这里安装[点击安装](/back/linux/#防火墙)
``` sh
[root@localhost nginx-1.13.7]# cd ../
[root@localhost nginx]# cd sbin
[root@localhost sbin]# ./nginx
```

如果想要关闭可以使用 `./nginx -s stop` 或者 `./nginx -s quit`命令

然后还有一个比较重要的命令 `./nginx -s reload` 重新加载配置文件，即刷新。
## 5、访问
游览器访问IP:80就可以看见nginx了
[参考网站](https://blog.csdn.net/jrn1012/article/details/70598363)
[参考网站](https://blog.csdn.net/t8116189520/article/details/81909574)
[参考网站](https://blog.csdn.net/w15977858408/article/details/104836066)