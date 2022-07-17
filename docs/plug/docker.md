---
lang: zh-CN
title: Docker
description: Docker
---

# 使用Docker部署项目

## 介绍
Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。

Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。

容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。

## 1.安装
``` sh
yum install https://download.docker.com/linux/fedora/30/x86_64/stable/Packages/containerd.io-1.2.6-3.3.fc30.x86_64.rpm
yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum install -y docker-ce
curl -L "https://github.com/docker/compose/releases/download/1.25.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

::: tip 提示
Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。然后，使用一个命令，就可以从 YML 文件配置中创建并启动所有服务。
:::

## 2.是否安装成功
``` sh
docker version
docker-compose --version
```

## 3.文件授权
``` sh
chmod +x /usr/local/bin/docker-compose
```

## 4.启动docker
``` sh
systemctl start docker
```

## 5.构建docker服务
``` sh
docker-compose build
```

## 6.启动docker容器
``` sh
docker-compose up -d
```

## 7.停止docker容器
``` sh
docker-compose stop
```