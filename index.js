// 导入三个初始化程序
const {
  initFolders,
  initFiles,
  initWatchers
} = require('./init');

class ViteDocCreator {
  constructor (options) {
    this.options = {
      // 页面标题
      title: undefined,
      // 程序端口号
      port: 0,
      // 域名配置
      domain: undefined
    }

    if (options) {
      // 合并用户配置与默认配置
      Object.assign(this.options, options);
    }
    
    // 执行工具初始化函数
    this.initialize();
  }

  initialize () {
    // 初始化项目文件夹
    initFolders(this.options);
    // 初始化项目文件
    initFiles(this.options);
    // 初始化监听html与markdown文件及文件夹变化程序
    initWatchers(this.options);
  }
}

module.exports = ViteDocCreator;