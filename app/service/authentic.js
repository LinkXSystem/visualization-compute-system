'use strict';

const { Service } = require('egg');

class AuthenticService extends Service {
  // eslint-disable-next-line
  constructor(ctx) {
    super(ctx);
  }

  async build(uuid) {
    const { ctx } = this;

    return ctx.app.jwt.sign(
      {
        data: {
          uuid,
        },
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
      },
      ctx.app.config.jwt.secret,
    );
  }
}

module.exports = AuthenticService;
