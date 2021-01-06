# React-mobile
  移动端React框架，React+mobx+Ant Design Mobile + 各种封装方法

## 前言
  开发一套适用于移动端的框架，多种项目演示，因此安装的依赖过多，请合理使用查看

#### 如果本项目对你有帮助，请不要吝啬你的star

## 目录结构

    |-- public                                
    |-- src                                   # 开发目录
    |   |-- assets                            # 本地静态资源
    |   |-- components                        # 业务组件
    |   |-- pages                             # 页面模板
    |   |-- styles                            # 全局css文件
    |   |   |-- theme.jsx                     # 全局css颜色样式
    |   |-- unilts                            # 公共方法
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
  
## 项目功能

  - [x] antd-mobile
  - [x] less（配置全局less文件）
  - [x] 别名
  - [x] 装饰器
  - [x] 开发模式下，单位px，打包模式下rem
  - [x] 别名