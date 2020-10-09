const {
  watch,
  existsSync,
  unlinkSync
} = require('fs');

const {
  outerPath: {
    htmlPath,
    mdPath
  }
} = require('../config');

const {
  createIndexHtml,
  mdToHtml
} = require('../compiler');

// watch 监听文件或者文件夹的变化 -> watch的回调函数
// watch
/**
 * param path 需要监听的文件夹或文件路径
 * param callback 当文件或文件夹变化的时候执行的回调函数
 */
// callback
/**
 * param event 变化的时候告诉你是什么变化 change
 * param filename 变化的文件是什么 
 */

// watchers初始化函数
function initWatchers (options) {
  watchHtml(options);
  watchMarkdown();
}

// 监听html文件夹及文件变化
function watchHtml (options) {
  watch(htmlPath, function (event, filename) {
    // 如果文件变化
    if (filename) {
      // event === change 文件更改
      // 重新生成index.html文件
      // 如果说event === change 传入filename
      // see createHtml.js -> createIndexHtml 50行
      createIndexHtml(options, event === 'change' && filename);
    }
  })
}

// 监听workspace文件夹及文件的变化
function watchMarkdown () {
  watch(mdPath, function (event, filename) {
    // 如果文件变化了
    if (filename) {
      // 找这个文件在workspace里是否存在
      // 如果不存在，证明是删除操作
      if (!existsSync(mdPath + '/' + filename)) {
        // 不存在的情况，就要删除html文件夹对应的文件
        const removingFile = htmlPath + '/' + filename.replace('.md', '.html');
        existsSync(removingFile) && unlinkSync(removingFile);
        return;
      }
      // 如果filename存在在workspace中，
      // 将这个md文件转换成html放入html文件夹中
      mdToHtml(filename);
    }
  });
}

module.exports = initWatchers;