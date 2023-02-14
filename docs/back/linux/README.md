---
lang: zh-CN
title: Linux
description: Linux
---

# Linux
- Linux 是一种自由和开放源码的类 UNIX 操作系统。
- Linux 英文解释为 Linux is not Unix。
- Linux 是在 1991 由林纳斯·托瓦兹在赫尔辛基大学上学时创立的，主要受到 Minix 和 Unix 思想的启发。
- Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。

## Linux安装vim
``` sh
yum -y install vim*
```
[参考网站](https://blog.csdn.net/sunnyzyq/article/details/87089614)


## Linux安装jdk
[参考网站](https://zhuanlan.zhihu.com/p/343227137)
[参考网站](https://www.runoob.com/linux/linux-vim.html)

## Linux安卓tomcat
[防火墙](https://blog.csdn.net/beyondrl/article/details/90229495)
[参考网站](https://blog.csdn.net/qq_45752401/article/details/122998462)

## 防火墙
``` sh
    //安装
    yum install firewalld
    //查看防火墙状态
    systemctl status firewalld
    //开启防火墙
    service firewall start
    systemctl start firewalld
    //重启防火墙
    service firewall restart
    firewall-cmd --reload
    //停止防火墙
    systemctl stop firewalld.service
    systemctl stop firewalld
    //禁止防火墙开机启动
    systemctl disable firewalld.service
    systemctl disable firewalld
    //关闭防火墙
    service firewall stop
    systemctl stop firewalld


    //查看已经开放的端口
    firewall-cmd --list-ports
    //查询80端口是否开放
    firewall-cmd --query-port=80/tcp
    //开放80端口
    firewall-cmd --zone=public --add-port=80/tcp --permanent
    //重新载入
    firewall-cmd --reload
    //查看80端口
    firewall-cmd --zone=public --query-port=80/tcp
    //删除80端口
    firewall-cmd --zone=public --remove-port=80/tcp --permanent



    //查看防火墙规则
    firewall-cmd --list-all
    //查看已经开放的端口
    firewall-cmd --list-ports




    //列出所有端口
    netstat -ntlp
    //查询端口占用情况
    lsof -i tcp:80
    //查询端口被哪个进程占用
    netstat -lnp|grep 8000
    //查看进程具体信息
    ps ***
    //杀掉进程
    kill -***
    kill -9 ***
    pkill -9 ***(进程名)
```