'use strict';
const { Controller } = require('egg');

class AuthenticController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.UserRegisterTransfer = {
      nickname: {
        type: 'string',
        required: true,
      },
      email: {
        type: 'string',
        required: true,
      },
      password: {
        type: 'string',
        required: true,
      },
    };

    this.UserLoginTransfer = {
      email: {
        type: 'string',
        required: true,
      },
      password: {
        type: 'string',
        required: 'true',
      },
    };
  }

  async register() {
    const { ctx, UserRegisterTransfer } = this;

    ctx.validate(UserRegisterTransfer);

    const payload = ctx.request.body || {};

    await ctx.service.users.create(payload);

    ctx.helper.success(ctx, {
      message: 'register successful',
    });
  }

  async login() {
    const { ctx, UserLoginTransfer } = this;

    ctx.validate(UserLoginTransfer);

    const payload = ctx.request.body || {};

    const data = await ctx.service.users.find(payload);

    ctx.helper.success(ctx, data);
  }

  logout() {}
}

module.exports = AuthenticController;
