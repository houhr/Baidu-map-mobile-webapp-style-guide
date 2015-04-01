# 欢迎

## 1. Style Guide 使用说明

根据前期对于现有版本的Webapp中界面元素的梳理，我们总结归纳出了按钮、表单、缩略图等多种样式组件。

调用某个组件的步骤如下：

1. 声明该组件的class名称。例如，要在`<button>`元素上调用按钮组件时，需要先声明`class="btn"`。这里需要强调的是，所有组件均只能通过 class 调用，没有通过 id 调用的组件。

2. 根据需要指定隶属于该组件的**局部参数**。例如，如果需要一个小的、百度蓝色的、宽度为父元素20%的按钮，则只需在class中添加`-small`、`-brand`以及`-col2`参数即可。此时按钮的HTML为：`<button class="btn -small -brand -col2">`。

3. 除了组件的参数外，我们还提供了有关背景颜色、背景透明度、阴影、字体大小以及字体颜色的**全局参数**。所有全局参数在实现时都带有`!important`关键字，因此大家可以利用它们来覆盖掉前面的组件默认样式和局部参数样式。例如，如果需要在上面小的、百度蓝色的、宽度为父元素20%的按钮的基础上，使用最大字号的文字，可以这样调用：`<button class="btn -small -brand -col2 -ft-large">`。

## 2. Style Guide 更新方法

1. 下载 Style Guide 代码。

    `$ svn checkout https://svn.bce.bae.baidu.com/appid89ac2cam6b/0`

2. 安装相关依赖包。切换到 Style Guide 根目录下，运行下面命令：

    `$ sudo npm install`

3. 修改代码并重新编译（有时可能需要编译两遍才能生效）。

    `$ gulp`


PS：目前 fonts icon 的自动化过程尚需进一步优化，所以这一部分的更新工作暂不开放，若需更新请联系<a href="mailto:houhongru@baidu.com?subject=Style Guide字体图标修改请求">鸿儒</a>或<a href="mailto:lilin09@baidu.com?subject=Style Guide字体图标修改请求">李林</a>。<br>
PPS：请忽略所有示例代码中的 `{$modifiers}`，该变量仅用于生成 Style Guide 时使用，谢谢！

## 3. Changelog

2014.3.6更新：

* 新增apps、gotop、label三个图标字体；
* 删除了带有左箭头和右箭头的弹出框；
* 删除了`-normal`、`-dark`、`-darker`颜色的按钮；
* 删除了`-darker`、`-brand`、`-alert`颜色的Card和Container;
* 为适应GMU`suggestion`组件，修改了`input-text`和`input-group`的实现
* 将`tab-secondary`拆分出一个文件
* 对部分组件进行了小的调整

2014.3.11 更新：

* 新增将styleguide拆分为`base-styles`和`append-styles`两个CSS文件
* 新增`list` `tab-secondary` `thumbnail`单独生成的CSS文件
