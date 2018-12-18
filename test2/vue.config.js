const path = require('path');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const baseUrl = process.env.NODE_ENV === "production" ? "/static/" : "/"; //font scss资源路径 不同环境切换控制
module.exports = {
  outputDir: 'docs',
  // baseUrl: process.env.NODE_ENV === 'production' ? '/vant-demo/' : './',
  baseUrl:'./',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	assetsDir: 'assets',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
  // chainWebpack: config => {
  //     // 修复HMR(热更新)
  //     config.resolve.symlinks(true);
  // }
};