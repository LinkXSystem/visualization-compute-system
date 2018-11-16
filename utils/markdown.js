'use strict';

class Markdown {
  static TitleExtract(target) {
    return target.match(/^(#+)(.*)/g).filter(item => !/^(#+)(.*)/gi.test(item));
  }

  static ImageExtract(target) {
    const temp = {};
    // eslint-disable-next-line
    target.match(/!\[[^\]]+\]\([^\)]+\)/g).forEach(item => {
      const alias = item.match(/\[[^\]\]+]/g)[0];
      const image = item.match(/\([^\)]+\)/g)[0];
      temp[alias] = image;
    });

    return temp;
  }

  static CodesExtract(target) {
    return target.match(/```([\s\S]*?)```[\s]?/g);
  }

  static BoldExtract(target) {
    return target.match(/(\*\*|__)(.*?)\1/g).replace(/\*/g, '');
  }

  static BlockExtract(target) {
    return target.match(/(&gt;|\>)(.*)/g);
  }

  // Markdown => 纯文本
  static CleanExtract(target) {
    return (
      target
        // 源代码
        .replace(/```([\s\S]*?)```[\s]?/g, '')
        // 引用块
        .replace(/(&gt;|\>)(.*)/g, '')
        // 图片
        .replace(/!\[[^\]]+\]\([^\)]+\)/g, '')
        // 清洗标题
        .replace(/^(#+)(.*)/g, '')
    );
  }
}

module.exports = Markdown;
