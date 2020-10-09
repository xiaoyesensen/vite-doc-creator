const { mkdirSync, existsSync } = require('fs');

const {
  outerPath: {
    srcPath, // src
    jsPath, // src/js
    cssPath, // src/css
    htmlPath, // src/html
    mdPath // workspace
  }
} = require('../config');

function initFolders () {
  // 相应文件夹不存在的情况下创建
  if (!existsSync(srcPath)) {
    createFolder(srcPath);
  }

  if (!existsSync(htmlPath)) {
    createFolder(htmlPath);
  }

  if (!existsSync(mdPath)) {
    createFolder(mdPath);
  }

  if (!existsSync(cssPath)) {
    createFolder(cssPath);
  }

  if (!existsSync(jsPath)) {
    createFolder(jsPath);
  }
}

function createFolder (path) {
  // mkdirSync 同步创建文件夹
  /**
   * param path 文件夹路径
   * param callback 创建失败，错误信息抛出
   */
  mkdirSync(path, function (err) {
    if (err) {
      throw new Error('Folder is failed to create.', err);
    }
  })
}

module.exports = initFolders;