'use strict';

const Word = require('./utils/word');

module.exports = app => {
  app.beforeStart(async () => {
    // 任务队列
    app.bull.get('bull').process(job => {
      const labels = Word.analysis(...job.data);

      app.service.labels.batchInsert(labels);
    });

    // 任务调度
    await app.runSchedule('dictionary');
  });
};
