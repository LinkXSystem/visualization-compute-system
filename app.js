'use strict';

module.exports = app => {
  app.beforeStart(() => {
    app.bull.get('bull').process(job => {
      setTimeout(() => {
        console.log('====================================');
        console.log(job.data);
        console.log('====================================');
      }, 2000);
    });
  });
};
