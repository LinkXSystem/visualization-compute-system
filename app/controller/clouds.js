'use strict';

const { Controller } = require('egg');

class CloudController extends Controller {
  // eslint-disable-next-line
  constructor(ctx) {
    super(ctx);
  }

  token() {
    const { ctx } = this;
    const upload = ctx.app.function.clouds.token();

    ctx.helper.success(ctx, upload);
  }
}

module.exports = CloudController;
