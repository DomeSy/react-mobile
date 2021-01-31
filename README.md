# React-mobile
  移动端React框架，React+mobx+Ant Design Mobile + 各种封装方法

## 前言
  开发一套适用于移动端的框架，多种项目演示，因此安装的依赖过多，请合理使用查看

#### 如果本项目对你有帮助，请不要吝啬你的star

## 目录结构
    |-- public                                
    |-- src                                   # 开发目录
    |   |-- action                            # action
    |   |-- router                            # 路由配置
    |   |-- mock                              # 模拟接口数据
    |   |-- components                        # 业务组件
    |   |   |-- Animation                     # 动画组件库
    |   |   |-- G2                            # G2组件库
    |   |   |-- Icon                          # 小组件
    |   |   |-- ShowTime                      # 展示组件
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
  - [x] compression-webpack-plugin:  压缩js为gzip
  - [x] less less-loader 配置less
  - [x] clear: 清屏
  - [x] chalk: 装饰作用，使之终端上的输出加上颜色
  - [x] figlet: 作用是将字母转化为图片，使之更加醒目
  - [x] postcss-px2rem-exclude：px转化为rem（页面以375为标准）
  - [x] lib-flexible：移动端适配问题
  - [x] @babel/plugin-proposal-decorators: 装饰器语法
  - [x] hot-react-loader react-app-rewire-hot-loader @hot-loader/react-dom: 实现局部刷新，即同个页面上，某一处的数据修改不会让整个页面一起刷新
  - [x] react-router-dom: 路由
  - [x] react-keeper: 更适用于移动端，原因是具备缓存页面的功能，类似于具备Vue的keep-alive的功能
  - [x] redux: 态管理工具
  - [x] react-redux: react专门封装redux的库
  - [x] react-loadable: 路由懒加载
  - [x] redux-thunk: 使dispatch支持传函数参数
  - [x] redux-logger: 打印日志
  - [x] redux-persist: 数据持久化
  - [x] axios: 请求
  - [x] qs: 
  - [x] mockjs: 模拟数据
  - [x] react-highlight: React语法高亮
  

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


## 模块说明

  路由： 
    看了很多关于路由的组件，如react-router-config,react-keeper管理路由的方式，但我始终感觉不太好，我想根据已有的react-router-dom进行封装简单实现react-router-config,react-keeper的功能