'use strict';

const { Controller } = require('egg');

class TaskController extends Controller {
  // eslint-disable-next-line
  constructor(ctx) {
    super(ctx);

    this.TaskBuildTransfer = {
      paragraph: {
        type: 'string',
        required: true,
      },
    };
  }

  build() {
    const { ctx, TaskBuildTransfer } = this;

    ctx.validate(TaskBuildTransfer);

    const payload = ctx.request.body || {};

    ctx.service.tasks.build(payload);

    ctx.helper.success(ctx, {
      message: 'build successful',
    });
  }
}

module.exports = TaskController;
