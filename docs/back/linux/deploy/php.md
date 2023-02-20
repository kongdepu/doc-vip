---
lang: zh-CN
title: php
description: php
---

# 使用Linux搭建PHP开发环境
简单介绍如何在Linux下部署php项目
## 安装Apache
``` sh
yum install httpd
``` 
## 修改配置文件
外网访问虚拟机中的地址，我们就需要修改一下`apache`的配置文件`/etc/httpd/conf/httpd.conf`
### 修改地址
到 `# ServerName www.example.com:80` 改为 `ServerName localhost:80`
``` sh {8}
# ServerName gives the name and port that the server uses to identify itself.
# This can often be determined automatically, but we recommend you specify
# it explicitly to prevent problems during startup.
#
# If your host doesn't have a registered DNS name, enter its IP address here.
#
# ServerName www.example.com:80
ServerName localhost:80
#
# Deny access to the entirety of your server's filesystem. You must
# explicitly permit access to web content directories in other 
# <Directory> blocks below.
#
```
### 修改端口号
找到　`# Listen`  改为 `Listen:8080`(linux中开放的端口号80XX)
``` sh {10}
#
# Listen: Allows you to bind Apache to specific IP addresses and/or
# ports, instead of the default. See also the <VirtualHost>
# directive.
#
# Change this to Listen on specific IP addresses as shown below to 
# prevent Apache from glomming onto all bound IP addresses.
#
# Listen 12.34.56.78:80
Listen 8080
```
## 启动Httpd服务
``` sh
service httpd start
```
正确输出
``` sh
Redirecting to /bin/systemctl start  httpd.service
```
## 查看启动状态
``` sh
service httpd status
```
正确输出
``` sh
Redirecting to /bin/systemctl status  httpd.service
● httpd.service - The Apache HTTP Server
   Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; vendor preset: disabled)
   Active: active (running) since Mon 2017-06-05 15:57:34 CST; 5s ago
     Docs: man:httpd(8)
           man:apachectl(8)
  Process: 54532 ExecStop=/bin/kill -WINCH ${MAINPID} (code=exited, status=0/SUCCESS)
  Process: 39046 ExecReload=/usr/sbin/httpd $OPTIONS -k graceful (code=exited, status=0/SUCCESS)
 Main PID: 54573 (httpd)
   Status: "Processing requests..."
   Memory: 15.8M
   CGroup: /system.slice/httpd.service
           ├─54573 /usr/sbin/httpd -DFOREGROUND
           ├─54576 /usr/sbin/httpd -DFOREGROUND
           ├─54577 /usr/sbin/httpd -DFOREGROUND
           ├─54578 /usr/sbin/httpd -DFOREGROUND
           ├─54579 /usr/sbin/httpd -DFOREGROUND
           └─54580 /usr/sbin/httpd -DFOREGROUND

Jun 05 15:57:34 tele-2 systemd[1]: Starting The Apache HTTP Server...
Jun 05 15:57:34 tele-2 systemd[1]: Started The Apache HTTP Server.
```
## 测试页面
此时直接访问你的服务器了,输入服务器的IP地址,出现一个`Apache test page powered by centos`的测试页面。
## 安装PHP
``` sh
yum install php
```
## 重启httpd服务
``` sh
service httpd start
``` 
正确输出
``` sh
Redirecting to /bin/systemctl start  httpd.service
```
## 新建php页面
重启之后我们进行测试`php`相关信息，我们新建一个`php`界面进行测试,
在`apache`默认页面路径`/var/www/html`下新建一个test.php页面，添加代码
``` php
<?php
 phpinfo();
?>
```
我们访问这个页面,输入http://ip:8080/test.php就可以看见php环境的配置信息了
[参考网站](https://www.yisu.com/zixun/457400.html)