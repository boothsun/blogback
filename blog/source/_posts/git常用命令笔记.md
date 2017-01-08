---
title: git常用命令笔记
date: 2017-01-08 14:03:56
tags:
---
git代码提交一般分成五个步骤:
1.查看目前代码的修改状态.
2.查看代码修改内容。
3.暂存需要提交的文件。
4.提交已经暂存的文件。
5.同步到服务器。

-----------

命令详解:
==
 1.查看目前代码的修改状态
 ----
 提交代码之前,首先应该检查目前所做的修改,运行git status 命令 可以查看到三种大类(已暂存、已修改、未跟踪)下的文件三种状态(new file:新建文件 modified:已修改 deleted:删除文件)
 案例:
  ![使用git status命令结果](/img/20170108/1.png)


  2.查看代码修改的内容(或者说产生diff文件)
  ------
	git diff <file> ##比较某文件与最近一次提交节点的差异
	git diff <hashcode> <hashcode> <file>  ##比较某文件在两个提交点之间的差异
	git diff <file> > d://1.diff ## 产生某个文件与最忌一次提交节点的diff文件
  案例:
  ![使用 git diff命令的结果](/img/20170108/git diff.png)


  3.暂存需要提交的文件
  -----
  如果是新建或修改的文件,则使用:`git add <file>`
  如果是删除的文件,则使用:`git rm <file>`


  4.提交已暂存的文件
  ----
  ```shell
  git commit -m '提交注释' ##提交暂存区里面的内容 (Changes to be committed) 注意:-m是必须的,表示提交一条注释
  git commit -am '提交注释' ##除了将暂存区里的文件提交外,还提交被修改但是没有添加到暂存区的文件(changes but not updated)的文件.
  git commit --amend ##修改最近一次提交.有时候如果提交注释书写有误或者漏提文件,可以使用此命令。
  ```
  详见:[git commit详解](http://www.cnblogs.com/eddy-he/archive/2012/03/22/git_commit.html)

  5.同步到服务器
   ----
   ```shell
   git push <本地分支名> ##push代码到指定分支上去,如果不知道目前在哪个分支上,可以使用git branch命令查看当前分支。
   ```



