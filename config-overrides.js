const { override, addLessLoader, addWebpackPlugin, addWebpackAlias, addPostcssPlugins, addDecoratorsLegacy, disableEsLint } = require('customize-cra');
const path = require('path')
const theme = require('./src/style/theme.jsx')
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')


// 配置开发模式和打包模式
const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === 'production') {
    config.devtool = false; //去除map文件

    const { promisify } = require('util');
    const clear = require('clear')
    const chalk = require('chalk')
    const figlet =  promisify(require('figlet'))
    clear()
    const log = content => console.log(chalk.blue(content))
    figlet('DOMESY !').then(res => log(res))

    // 添加js打包gzip配置
    config.plugins = [...config.plugins, new CompressionWebpackPlugin({
      test: /\.js$|\.css$/,
      threshold: 1024,
    })]
  } else if(process.env.NODE_ENV === 'development'){
  }
  return config;
}

module.exports = override(
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: theme,
      localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
    }
  }),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src")
  }),
  process.env.NODE_ENV === 'production' ? addPostcssPlugins([require("postcss-px2rem-exclude")({ remUnit: 37.5, exclude: /node_modules/i })]) : null,
  addDecoratorsLegacy(),
  disableEsLint(), //忽略eslint警告
  addCustomize(),
  process.env.NODE_ENV === 'production' ? addWebpackPlugin(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static' //输出静态报告文件report.html，而不是启动一个web服务
    })
  ) : undefined
);
