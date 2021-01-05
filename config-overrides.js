const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path')
const theme = require('./src/style/theme.jsx')
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const addCustomize = () => config => {
  if (process.env.NODE_ENV === 'production') {
    // 添加js打包gzip配置
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.js$|\.css$/,
        threshold: 1024,
      }),
    )
  }
  return config;
}

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
  }),
  addCustomize(),
);
