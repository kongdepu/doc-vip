---
lang: zh-CN
title: Jdk
description: Jdk
---

# 使用Linux安装Jdk开发环境
简单介绍如何在Linux下安装Jdk

## 1、检查当前系统中是否已安装JDK
命令：java -version：查看JDK安装版本，命令执行后显示如下，说明本系统默认已经安装JDK1.8.0_242。
``` sh
[root@localhost ~]# java -version
openjdk version "1.8.0_242"
OpenJDK Runtime Environment (build 1.8.0_242-b08)
OpenJDK 64-Bit Server VM (build 25.242-b08, mixed mode)
[root@localhost ~]#
```
## 2、检测系统JDK默认安装包
命令：rpm -qa | grep java　：命令的意思是搜索java，查看安装包文件。
``` sh
[root@localhost ~]# rpm -aq | grep java
java-1.8.0-openjdk-headless-1.8.0.242.b08-1.el7.x86_64
python-javapackages-3.4.1-11.el7.noarch
tzdata-java-2019c-1.el7.noarch
javapackages-tools-3.4.1-11.el7.noarch
java-1.8.0-openjdk-1.8.0.242.b08-1.el7.x86_64
[root@localhost ~]# 
```
## 3、卸载OpenJDK
卸载命令：rpm -e –nodeps 名称　　　　或者　　　　yum remove *openjdk*
之后再次输入命令 查看卸载情况：rpm -qa | grep java　　或者　　java -version
``` sh
卸载命令rpm：
[root@localhost ~]# rpm -e --nodeps java-1.8.0-openjdk-headless-1.8.0.242.b08-1.el7.x86_64
[root@localhost ~]# rpm -e --nodeps java-1.8.0-openjdk-1.8.0.242.b08-1.el7.x86_64

或者

卸载命令yum：
[root@localhost ~]# yum remove *openjdk*

检查
[root@localhost root]# java -version
bash: java: 未找到命令...
或者
[root@localhost ~]# rpm -qa | grep java
python-javapackages-3.4.1-11.el7.noarch
tzdata-java-2019c-1.el7.noarch
javapackages-tools-3.4.1-11.el7.noarch
```
## 4、安装JDK
安装包（下载地址，我这里为大家提供好了）

链接：https://pan.baidu.com/s/1bfuI1gGM0pcCX8O_2w-jhQ?pwd=54pn   提取码：54pn
1. 进入根目录创建downfile目录：用于存放上传的软件
``` sh 
[root@localhost /]# cd  ~
[root@localhost ~]# mkdir downfile
```
2. 将本地文件JDK上传至Linux系统指定的目录中/root/downfile
3. 进入downfile目录中。并查看文件是否存在
``` sh 
[root@localhost ~]# cd downfile
[root@localhost downfile]# ll
总用量 139760
drwxr-xr-x 7 10 143 245 7月   7 2018 jdk-8u181-linux-x64.tar.gz
```
4. 解压JDK文件到/usr/lib/jvm目录中。（这是Linux安装JDK的默认目录，推荐更新安装路径/usr/local/……）
``` sh
[root@localhost downfile]# tar -xvf jdk-8u181-linux-x64.tar.gz -C /usr/lib/jvm
```
5. 检查解压文件是否存在
``` sh
[root@localhost downfile]# cd /usr/lib/jvm
[root@localhost downfile]# ll
总用量 0
drwxr-xr-x 7 10 143 245 7月   7 2018 jdk1.8.0_181
```
## 5、配置环境变量
Linux环境变量配置都在：/etc/profile文件中
1. VIM命令编辑文件（建议编辑前复制一份源文件作为备份）[点击安装](/back/linux/#linux%E5%AE%89%E8%A3%85vim) [点击详细](https://www.runoob.com/linux/linux-vim.html)
``` sh
2 [root@localhost ~]# vim /etc/profile
3  ………略………
4 按键 i 进入插入编辑模式。
```
2. 编辑模式下，在结尾或开头添加如下：
``` sh
export JAVA_HOME=/usr/lib/jvm/jdk1.8.0_181
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
```
## 6、重新载入配置文件
（重新加载系统配置文件，样可以使配置不用重启即可立即生效。）
``` sh
[root@localhost ~]# source /etc/profile
```
## 7、检查新安装的JDK
``` sh
[root@localhost ~]# java -version
[root@localhost ~]# java
[root@localhost ~]# javac
``` 
如上三个命令输入都有正确结果信息，则JDK安装无误！到此为止，整个安装过程结束。
[参考网站](https://zhuanlan.zhihu.com/p/343227137)