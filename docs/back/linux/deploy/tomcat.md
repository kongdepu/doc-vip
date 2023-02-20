---
lang: zh-CN
title: Tomcat
description: Tomcat
---

# 使用Linux安装Tomcat开发环境
简单介绍如何在Linux下安装Tomcat

## 1、安装前置条件
安装Tomcat需要先安装jdk，没有安装jdk的，先移步到这里安装jdk。[点击安装](/back/linux/deploy/jdk.md)

## 2、下载所需压缩包，安装
安装包（下载地址，我这里为大家提供好了）

链接：https://pan.baidu.com/s/1nfd90LLxhN5DIheA5TtG3A   提取码：52vh

1. 进入根目录创建tomcat目录：用于存放上传的软件
``` sh 
[root@localhost /]# cd  ~
[root@localhost ~]# mkdir tomcat
```
2. 将本地文件Tomcat上传至Linux系统指定的目录中/root/tomcat
3. 进入tomcat目录中。并查看文件是否存在
``` sh 
[root@localhost ~]# cd tomcat
[root@localhost tomcat]# ll
总用量 11344
-rw-r--r-- 1 root root 11613418 1月  10 10:09 apache-tomcat-9.0.70.tar.gz
```
4. 对压缩包进行解压
``` sh
[root@localhost tomcat]# pwd
/root/tomcat
[root@localhost tomcat]# tar -zxvf apache-tomcat-9.0.70.tar.gz
```
5. 压缩完成
``` sh
[root@localhost tomcat]# ls
apache-tomcat-9.0.70  apache-tomcat-9.0.70.tar.gz
[root@localhost tomcat]# cd apache-tomcat-9.0.70
[root@localhost apache-tomcat-9.0.70]# 
```
## 3、给防火墙添加访问端口
默认8080，在它的/conf/server.xml文件里面查看。没有安装firewalld的，先移步到这里安装[点击安装](/back/linux/#防火墙)
``` sh
[root@localhost apache-tomcat-9.0.70]# firewall-cmd --zone=public --add-port=8080/tcp --permanent
success 
[root@localhost apache-tomcat-9.0.70]# firewall-cmd --reload
success 
```
## 4、然后切换到bin目录下，启动
``` sh
[root@localhost apache-tomcat-9.0.70]# cd bin
[root@localhost bin]# ./startup.sh
Using CATALINA_BASE:   /root/tomcat/apache-tomcat-9.0.70
Using CATALINA_HOME:   /root/tomcat/apache-tomcat-9.0.70
Using CATALINA_TMPDIR: /root/tomcat/apache-tomcat-9.0.70/temp
Using JRE_HOME:        /usr/lib/jvm/jdk1.8.0_181
Using CLASSPATH:       /root/tomcat/apache-tomcat-9.0.70/bin/bootstrap.jar:/root/tomcat/apache-tomcat-9.0.70/bin/tomcat-juli.jar
Using CATALINA_OPTS:   
Tomcat started.
```
常用命令
``` sh
./startup.sh	// 启动
# 这个文件停止tomcat服务，一般不用，用了就访问不了了    
./shutdown.sh	// 停止
```
## 5、访问，看到猫就成功啦
游览器访问IP:8080就可以看见tomcat了
[参考网站](https://blog.csdn.net/qq_45752401/article/details/122998462)