# CSS基础

## 介绍一下CSS的盒子模型

CSS的盒子模型有哪些:标准盒子模型、ie盒子模型

CSS的盒子模型区别：

1. 标准盒子模型：margin、border、padding、content
2. IE盒子模型：margin、content（border+padding+content）

如何通过CSS转换模型？

​	box-sizing:content-box//标准盒子模型

​	box-sizing:border-box//IE盒子模型

## line-height和height的区别

```
line-height是每一行文字的高,如果文字换行则整个盒子高度会增大(行数*行高)
height是一个死值,就是这个盒子的高度
```

## CSS选择符有哪些?哪些属性可以继承

```
CSS选择符:
    统配(*)
    id选择器(#)
    类选择器(.)
    标签选择器(div,p,h1...)
    相邻选择器(+)
    后代选择器(ul li)
    子元素选择器(>)
    属性选择器(a[herf])
CSS属性哪些可以继承:
	文字系列的:font-size,color,line-height,text-align...
不可继承属性:
	border,padding,margin
```

## CSS优先级算法如何计算?

```
优先级比较:!important > 内联 > id > class > 标签 > 通配
```

```
CSS权重计算:
第一:内联样式 style 		权重值1000
第二:id选择器 			 权重值 100
第三:类选择器 			权重值 10
第四:标签&伪元素选择器 	  权重值1
第五:统配,>,+ 			  权重值 0
```

