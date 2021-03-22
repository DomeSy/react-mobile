# React-mobile
  移动端React框架，使用react + redux + reack-keeper打造移动端框架，本框架主要是个人博客，里面有文章，antd的使用，web技术栈，jS方法，高阶组件等封装

  线上地址 [Domesy](http://www.domesy.cn/#/)

  请在开发者模式下查看

## 前言
  本框架适用于移动端项目，项目中有过多的使用案例，如redux的使用，redux配置请求的封装，跳转，路由等皆有案例，另外提供antd-mobile等框架的一些组件封装，帮助开发更加简单。

  另外有通用方法，高阶组件的封装及使用，让移动端项目一键式开发


#### 如果本项目对你有帮助，请不要吝啬你的star

## 目录结构
    |-- public                                
    |-- src                                   # 开发目录
    |   |-- action                            # action
    |   |-- router                            # 路由配置
    |   |-- mock                              # 模拟接口数据
    |   |-- components                        # 业务组件
    |   |   |-- Animation                     # 动画组件库
    |   |   |-- AntD                          # AntD的组件库
    |   |   |-- Icon                          # 小组件
    |   |   |-- HighOrder                     # 高阶组件
    |   |-- constants                         # constants
    |   |-- images                            # 存储图片 
    |   |-- pages                             # 页面模板
    |   |-- store                             # 状态库
    |   |-- styles                            # 全局css文件
    |   |   |-- theme.jsx                     # 全局css颜色样式
    |   |-- unilts                            # 方法库
    |-- .gitignore                            # git忽略文件
    |-- package.js                            # 配置文件
    |-- config-overrides.js                   # 项目配置
## 项目配置

  - [x] react-app-rewired,customize-cra :react-app-rewired的作用就是在不eject的情况下,覆盖create-react-app的配置形成config-overrides.js
  - [x] babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件
  - [x] antd-mobile:移动端组件库
  - [x] rc-form: 配合antd-mobile使用表单
  - [x] compression-webpack-plugin:  压缩js为gzip
  - [x] less less-loader 配置less
  - [x] clear: 清屏
  - [x] chalk: 装饰作用，使之终端上的输出加上颜色
  - [x] figlet: 作用是将字母转化为图片，使之更加醒目
  - [x] postcss-px2rem-exclude：px转化为rem（页面以375为标准）
  - [x] lib-flexible：移动端适配问题
  - [x] @babel/plugin-proposal-decorators: 装饰器语法
  - [x] react-router-dom: 路由
  - [x] react-keeper: 更适用于移动端，原因是具备缓存页面的功能，类似于具备Vue的keep-alive的功能
  - [x] redux: 态管理工具
  - [x] react-redux: react专门封装redux的库
  - [x] react-loadable: 路由懒加载
  - [x] redux-thunk: 使dispatch支持传函数参数
  - [x] redux-logger: 打印日志
  - [x] redux-persist: 数据持久化
  - [x] axios: 请求
  - [x] qs: 序列化成URL的形式
  - [x] mockjs: 模拟数据
  - [x] react-highlight: React语法高亮
  - [x] react-typewriter-hook: 打字机效果
  - [x] copy-to-clipboard: 复制
  - [x] react-photo-view: 图片放大缩小等操作
  - [x] react-draggable-tags: 组件拖拽，可适用于移动端排序
  - [x] js-md5: md5加密

## 项目功能

  - [x] antd-mobile组件库
  - [x] less（配置全局less文件）
  - [x] 别名
  - [x] 装饰器
  - [x] 页面大小，开发模式下，单位px，打包模式下rem
  - [x] 模拟数据开发列表
  - [x] redux-logger：开发模式下存在，打包模式下删除looger
  - [x] redux-persist：数据持久化（默认以session存储）
  - [x] 实现路由懒加载

