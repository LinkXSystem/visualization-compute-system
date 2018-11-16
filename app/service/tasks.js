'use strict';

const { Service } = require('egg');

class TaskService extends Service {
  // eslint-disable-next-line
  constructor(ctx) {
    super(ctx);
  }

  build(payload) {
    const { ctx } = this;

    ctx.app.bull.get('bull').add({
      job: {
        paragraphs: payload,
      },
    });
  }
}

module.exports = TaskService;
