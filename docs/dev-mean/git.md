---
lang: zh-CN
title: Git
description: Git
---

# Git
## 介绍
1. Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。
2. Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。
3. Git 与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持。
## 安装配置
### 安装
Git 目前支持 Linux/Unix、Solaris、Mac和 Windows 平台上运行。
[官网地址](http://git-scm.com/downloads/)

官网慢、可以用国内的镜像[点击进入](https://npm.taobao.org/mirrors/git-for-windows/)

::: tip  提示
完成安装之后，就可以使用命令行的 git 工具（已经自带了 ssh 客户端）了，另外还有一个图形界面的 Git 项目管理工具。

在开始菜单里找到"Git"->"Git Bash"，会弹出 Git 命令窗口，你可以在该窗口进行 Git 操作。
:::
### 配置
1. 用户信息
配置个人的用户名称和电子邮件地址：
``` sh
$ git config --global user.name "runoob"
$ git config --global user.email test@runoob.com
```
::: tip 提示
如果用了 --global 选项，那么更改的配置文件就是位于你用户主目录下的那个，以后你所有的项目都会默认使用这里配置的用户信息。

如果要在某个特定的项目中使用其他名字或者电邮，只要去掉 --global 选项重新配置即可，新的设定保存在当前项目的 .git/config 文件里。
:::
2. 查看配置信息
要检查已有的配置信息，可以使用 git config --list 命令：
``` sh
$ git config --list
http.postbuffer=2M
user.name=runoob
user.email=test@runoob.com
```
也可以直接查阅某个环境变量的设定，只要把特定的名字跟在后面即可，像这样：
``` sh
$ git config user.name
```
## 工作流程
- 克隆Git资源作为工作目录
- 在克隆的资源上添加或修改文件
- 如果其他人修改了，你可以更新资源
- 在提交前查看修改
- 提交修改
- 在修改完成后，如果发现错误，可以撤回提交并再次修改并提交。

![工作流程图](/images/git-process.png)
## 基本操作
Git 常用的是以下 6 个命令：git clone、git push、git add 、git commit、git checkout、git pull
![基本操作 ](/images/git-command.jpg)
说明:
- workspace：工作区
- staging area：暂存区/缓存区
- local repository：版本库或本地仓库
- remote repository：远程仓库
### 简单的操作步骤
``` sh
$ git init     
$ git add .    
$ git commit
```
::: tip 提示
git init - 初始化仓库。
git add . - 添加文件到暂存区。
git commit - 将暂存区内容添加到仓库中。
:::
### 创建仓库命令
下表列出了 git 创建仓库的命令：
``` sh
$ git init    //初始化仓库 
$ git clone   //拷贝一份远程仓库，也就是下载一个项目。
```
## 分支管理
几乎每一种版本控制系统都以某种形式支持分支。使用分支意味着你可以从开发主线上分离开来，然后在不影响主线的同时继续工作
1. 创建分支 
``` sh
$ git branch (分支名称) //提示:没有参数时，git branch 会列出你在本地的分支
```
2. 切换分支
``` sh
$ git checkout (分支名称)
```
3. 创建分支并切换
``` sh
$ git checkout -b (分支名称)
```
4. 合并分支
``` sh
$ git merge (分支名称)
```
5. 删除分支
``` sh
$ git branch -d (分支名称)
```
## 查看提交历史
1. 查看历史提交历史
``` sh
git log 
```
2. 查看历史记录的简洁的版本
``` sh
$ git log --oneline
```
3. 查看历史中什么时候出现了分支、合并。
``` sh
$ git log --graph
```
4. 逆向显示所有日志
``` sh
$ git log --reverse --oneline
```
5. 以列表形式查看指定文件的历史修改记录。
``` sh
$ git blame <file> 
```
6. 查询指定用户的提交日志
``` sh
$ git log --author=Linus --oneline -5
```
更多 git log 命令可查看[点击访问](http://git-scm.com/docs/git-log)