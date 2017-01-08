---
title: velocity判断为空和null
date: 2017-01-04 20:54:27
tags:
---
&#160;&#160;velocity判空或者null,是开发中常见的场景,开发中遇到,记录如下。
1. #if(!$foo) 判断为空, #if($foo) 判断为非空。
2. 使用#ifnull()或#ifnotnull()
   eg: #ifnull
   注意:要使用此特性必须在velocity.properties文件中加入:
    <!--lang: java--> 
    userdirective = org.apache.velocity.tools.generic.directive.Ifnull
    userdirective = org.apache.velocity.tools.generic.directive.Ifnotnull
3. 使用null工具判断
    #if($null.isNull($foo)) 特别是在判断一个集合为null或为空时,只能使用这种方式了: $if($null.isNull(&list) || $list.size() == 0)