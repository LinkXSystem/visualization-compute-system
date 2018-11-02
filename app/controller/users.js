'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.UserCreateTransfer = {
      email: {
        type: 'string',
        required: true,
        allowEmpty: false,
        format: /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/,
      },
      password: {
        type: 'string',
        required: true,
      },
      nickname: {
        type: 'string',
        required: true,
        allowEmpty: false,
      },
      avatar: {
        type: 'string',
        required: false,
      },
    };
  }

  async create() {
    const { ctx, UserCreateTransfer } = this;

    ctx.validate(UserCreateTransfer);

    const payload = ctx.request.body || {};

    const user = await ctx.service.users.create(payload);

    ctx.helper.success(ctx, user);
  }
}

module.exports = UserController;
