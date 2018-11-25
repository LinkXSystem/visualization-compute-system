'use strict';

const { Controller } = require('egg');

class CloudController extends Controller {
  // eslint-disable-next-line
  constructor(ctx) {
    super(ctx);
  }

  token() {
    const { ctx } = this;
    const token = ctx.app.function.clouds.token();

    ctx.helper.success(ctx, {
      token,
    });
  }
}

module.exports = CloudController;
