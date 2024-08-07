## GitPush Plugin
### 背景
> 平时的业务开发任务中，为了调试、修复bug配合测试， 需要频繁的切换分支合并分支（sit、dev等）如此操作很是繁琐。故此写了一个了gitPush.js用来的代替这些繁琐的git操作，达到 ***一条命令完成发布所需要的提交、合并操作***。但是，仅靠``node gitPush.js ``已经不足以满足日常提交合并的操作了，***因为多人合作可能出现合并冲突等问题***，而这，正是将``gitPush.js``做成一个vscode插件的需要所在。

### 功能
> ``gitPush.js`` 只是一个Js文件，比较灵活，有什么特定需求就直接改。如果做成插件，势必需要给出一个可以自定义执行流程的功能，同时为解决``gitPush.js``不能在出现冲突或者执行报错的情况下暂停执行；修复后断点执行等问题，可以将部分git命令组合成一个**小单元**，**小单元**主要围绕具体的行为目标完成功能，多个**小单元**串联形成**执行链**，继而完成**一键厝操作**。
### 插件组成部分
* 命令组执行界面 实时展示当前命令组的执行状态、结果、日志信息，提供对应的操作入口
* 命令组设置，*当前先按照操作目的分类命令块，即按照对应的目的将多个命令组成命令块，这些命令块是预置的，暂时不支持自定义，方便实现降低使用难度*
* 当前所在分支展示
* 日志文件输入位置配置
* 生命周期钩子配置 (webhook)
    - git 操作 结束后钩子
    - 命令组操作 结束后 (可以接上 流水线部署 hook)

### 方案记录
> 零散记录一些技术方案
* 注册vscode命令    
    ```
      {
        "command": "submitpipepline.operation", // 操作面板, 打开PipeLine操作面板(webview), 主要的需求页面, 
        "title": "Open pipepline operation"
      },
      {
        "command": "submitpipepline.run",       // 执行PipeLine, 需要带PipeLine ID, 
        "title": "Run pipepline"
      },
      {
        "command": "submitpipepline.continue",  // 继续执行PipeLine; 当PipLine中间出现报错(大部分是Git操作报错), 给出一个继续执行的按钮,点击重新执行报错的子节点,并继续执行PipeLine
        "title": "Run pipepline continue"
      }
    ```
* 代码
    - **PipeLine类**    
        执行链的类, 由PipeUnit串联而成  

    - **PipeUnit类**    
        执行单元, 有SubmitUnit、MergeUnit...等类型，内置的，其中的内置的命令是固定的， 通过入参控制部分命令是否执行(但是主要的行为是不变的) 
        - SubmitUnit    推送单元`git add .`、`git commit -m <Message>`、`git push`...
        - MergeUnit     合并分支单元 
        - CustomUnit    自定单元
        - CatchUnit     备份单元  在分支上拉出一个备份分支
## I18n Code提示
> 通常在业务中 都是通过i18n的api返回当前code在对应语言中文本，对于代码阅读性来说不太友好，故借助vscode插件功能，通过鼠标悬浮给予对应文本的提示。
### 痛点场景
    以下代码在迭代工作中很难及时理解代码块的DOM是页面上哪一块，对当前项目的I18n配置情况不了解的开发者很影响开发效率

```Html
    <button type="primary" @click="handleClick">
    {{ $tc('button.search') }}
    </button>
    <button @click="searchReset" class="ml10">
    {{ $tc('button.refresh') }}
    </button>
    <span v-if="row.useState === 0">{{ $tc('text.firstMessage') }}</span>
    <span v-else-if="row.useState === 1">{{ $tc('text.secondMessage') }}</span>
```
### 通过插件解决
![Alt text](image-11.png)

### 主要功能

名称 | 类型 | 支持
:---|:---:|---:
<a id="feature2">鼠标悬浮提示</a> | 功能 | &#x2705; 
i18n配置文件(路径)设置 | 配置 | &#x2705; 
i18n配置文件(路径)设置 远程 | 配置 | 
实时跟进i18n配置文件code | 功能 | &#x2705;
需要识别的代码块(对i18n api的识别) | 配置 | &#x2705;
点击提示框中 **修改** 按钮跳转到对应I18n配置文件(非远程) | 配置 | &#x2705;
<a id="feature1">点击提示框中 **修改** 按钮跳转到对应I18n配置文件 对应行数(非远程)</a> | 配置 | 

### 思路备注
* [点击 **修改** 按钮跳转到对应位置(行,列)](#feature1) 
    > 实现参考: [掘金：用nodejs fast-glob高效扫描搜索项目代码](https://juejin.cn/post/7229169602420801593?searchId=20240130113831B5A73371DBF202789AE5)

    通过 ``fast-glob`` 库扫描I18n配置文件, 获取文件代码(*String*),以 `\r\s`分割为行,将行内键值对缓存到缓存对应中 **Map** , 并记录该键值对的行和列。在触发 **vscode.HoverProvider** 时再去 **Map** 找。
* [编辑Api入参的code时， 可以加个提示code提示，类似ts的属性输入提示](#feature2)
* 可以实践一个chrome插件，用以辅助i18n Vscode插件补充语言文本
    - 功能描述： 用户在页面上选中一段文本，右键出现呼出chrome右键选项，点击“添加文本的多语言”，给一个入口面板可以设置该文本的其他语言。
    - 技术点： chrome插件实现， 可能还需要一个存储多语言文本Map的数据库 *（或者导出一个json？）*
### bug
* 多次切换vscode窗口会出现 `CodeLens` 不出现的情况，此时执行 `ctools.i18n.codeLens.start`,会出现`CodeLens`内容重复的情况（重复数量可能和重复执行命令次数有关）
* 插件需要一个重启命令，重启一切`Provider`


## notes 插件
> 该插件的定位是对`.md`文档的管理，设定一个工作空间（*路径*），自定检索工作空间下的目录树；目录和文件的新增、重命名、删除；以上是基础功能   
可以考虑加入对文档的同步（*基于git*），版本号管理（记录、回溯），以标题为关键词提供共工作空间内的搜索功能。
### 目标功能
* 对工作空间内的目录递归扫描，展示目录数据
    - 重命名
    - 删除
    - refresh
* 左侧栏展示目录树
* 支持多个工作空间切换，根目录切换
    - 缓存各个公共空间的配置数据
    - 切换就刷新
    - *可以考虑与远程接口服务交互（支持服务器保存数据）*
* 解析`.md`中的标题为作为关键词提供一个搜索功能


# vscode-plugin

vscode plugin 能做什么?
* 用颜色或文件图标等 做一个vscode主题
* 在 ui 拓展工作台中添加自定义组件和视图
* 创建一个webview 来显示一个自定义的界面 (Html、CSS、JavaScript)；
* 支持一种新的语言(Vue...) - 语言拓展
* 支持调试特定的运行时 - 调试器拓展指南