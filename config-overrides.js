const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path')
const fs = require('fs')
const theme = require('./src/style/theme.jsx')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'less',
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: theme,
      localIdentName: '[local]--[hash:base64:5]' // 自定义 CSS Modules 的 localIdentName
    }
  }),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src")
  })
);
