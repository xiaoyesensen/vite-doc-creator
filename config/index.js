const { resolve } = require('path');

// 默认端口号
const port = process.env.npm_config_port;
// 默认域名
const domain = 'http://localhost';
// 默认标题
const title = 'This is my first Document by Vite-Doc-Creator';

/**
 * 项目目录体系
 * src -> 
 *   css ->
 *   js -> 
 *   html -> md -> html
 * workspace -> 编辑markdown
 * index.html
 */
const outerPath = {
  rootPath: resolve(__dirname, '../../../'),
  srcPath: resolve(__dirname, '../../../src/'),
  htmlPath: resolve(__dirname, '../../../src/html/'),
  jsPath: resolve(__dirname, '../../../src/js/'),
  cssPath: resolve(__dirname, '../../../src/css/'),
  mdPath: resolve(__dirname, '../../../workspace/')
}

/**
 * 插件目录体系
 * temp_files ->
 *   css ->
 *   js ->
 *   html -> index.html/md.html/welcome.html
 */
const innerDir = {
  rootDir: resolve(__dirname, '../temp_files/'),
  htmlDir: resolve(__dirname, '../temp_files/html/'),
  cssDir: resolve(__dirname, '../temp_files/css/'), 
  jsDir: resolve(__dirname, '../temp_files/js/')
}

const regexp = {
  // 匹配ul menu-list内部的内容
  reg_ulContent: /<ul class=\"menu-list\">([\s\S]*?)<\/ul>/,
  // 匹配title中的内容
  reg_titleContent: /<title>([\s\S]*?)<\/title>/,
  // 匹配header-title中的内容
  reg_headerTitleContent: /<h1 class=\"header-title\">([\s\S]*?)<\/h1>/,
  // 匹配iframe page中的内容
  reg_iframeContent: /<div class=\"iframe-page\">([\s\S]*?)<\/div>/,
  // 匹配md.html内部的{{newStr}}
  reg_mdStr: /\{\{(.+?)\}\}/
}

module.exports = {
  port,
  domain,
  title,
  outerPath,
  innerDir,
  regexp
}