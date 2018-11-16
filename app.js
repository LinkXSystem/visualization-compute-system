'use strict';

const Word = require('./utils/word');
const Markdown = require('./utils/markdown');

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
};
