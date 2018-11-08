'use strict';

const { Service } = require('egg');

class TaskService extends Service {
  // eslint-disable-next-line
  constructor(ctx) {
    super(ctx);
  }

  build() {
    const { ctx } = this;

    // ctx.app.bull.get('bull').add({
    //   job: payload,
    // });

    ctx.app.bull.get('bull').add({
      job: '1',
    });

    ctx.app.bull.get('bull').add({
      job: '2',
    });

    ctx.app.bull.get('bull').add({
      job: '3',
    });
  }
}

module.exports = TaskService;
