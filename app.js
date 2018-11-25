'use strict';

const Word = require('./utils/word');
const Markdown = require('./utils/markdown');
const path = require('path');

module.exports = app => {
  app.beforeStart(async () => {
    // 任务队列
    app.bull.get('bull').process(job => {
      const { paragraphs } = job;

      const content = Markdown.CleanExtract(paragraphs);
      const titles = Markdown.TitleExtract(paragraphs);
      // eslint-disable-next-line
      const keyword = Markdown.BoldExtract(paragraphs);

      const cLabels = Word.analysis(content);

      let tLabels = [];

      if (titles) {
        titles.forEach(item => {
          const temp = Word.analysis(item, 20, 1);
          tLabels = tLabels.concat(temp);
        });
      }

      console.log('====================================');
      console.log(cLabels, tLabels);
      console.log('====================================');

      // app.service.labels.batchInsert(labels);
    });

    // 任务调度
    await app.runSchedule('dictionary');
  });

  const dir = path.join(app.config.baseDir, 'app/function');

  app.loader.loadToApp(dir, 'function', {
    ignore: '*.md',
    initializer(model) {
      // 第一个参数为 export 的对象
      // 第二个参数为一个对象，只包含当前文件的路径
      return new model(app);
    },
  });
};
