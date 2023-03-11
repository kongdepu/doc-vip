---
lang: zh-CN
title: Mysql
description: Mysql
---

# 使用Linux安装Mysql
简单介绍如何在Linux下安装Mysql

## 1、通过yum安装Mysql
下载地址：https://dev.mysql.com/downloads/repo/yum/
``` sh
[root@localhost ~]# wget http://repo.mysql.com/mysql80-community-release-el7.rpm
```
## 2、安装
1. 通过yum安装方法，会直接添加mysql环境变量和启动服务
``` sh
[root@localhost ~]# yum -y install mysql80-community-release-el7.rpm
```
2. 安装community-server
``` sh
[root@localhost ~]# yum -y install mysql-community-server
```
## 3、启动服务并查看服务状态
systemctl start mysqld        #一定要启动服务！
systemctl status mysqld      #查看服务状态
``` sh
[root@localhost ~]# systemctl start mysqld 
[root@localhost ~]# systemctl status mysqld
```
## 4、获取密码
``` sh
[root@localhost ~]# grep "password" /var/log/mysqld.log
```
## 5、登录并求改密码
1. 登录
``` sh
[root@localhost ~]# mysql -u root -p
Enter password: 
```
2. 修改密码 
``` sh
[root@localhost ~]# mysql -u root -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 22
Server version: 8.0.32 MySQL Community Server - GPL

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY 'wW@123456';
```
::: tip 提示
密码必须包括大写字母，小写字母，数字，特殊字符
:::
## 6、授权
授权远程用户连接
``` sh
# 选择数据库
mysql> use mysql;
# 最后授权 MySQL，允许远程用户登录访问 MySQL
mysql> update user set host = '%' where user = 'root';
# 刷新权限
mysql> flush privileges;
```
## 7、完成
我们可以通过客服端来接服务器的Mysql了
[参考网站](https://blog.csdn.net/llAl_lAll/article/details/119419178)