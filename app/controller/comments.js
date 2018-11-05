'use strict';

const { Controller } = require('egg');

class CommentController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.CommentCreateTransfer = {
      user: {
        type: 'string',
        required: true,
      },
      content: {
        type: 'string',
        required: true,
      },
      article: {
        type: 'string',
        required: true,
      },
    };
  }

  index() {}

  async create() {
    const { ctx, CommentCreateTransfer } = this;

    ctx.validate(CommentCreateTransfer);

    const payload = ctx.request.body || {};

    const data = await ctx.service.comments.create(payload);

    ctx.helper.success(ctx, data);
  }
}

module.exports = CommentController;
