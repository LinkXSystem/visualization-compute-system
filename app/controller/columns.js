'use strict';

const { Controller } = require('egg');

class ColumnController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.ColumnCreateTransfer = {
      user: {
        type: 'string',
        required: true,
      },
      title: {
        type: 'string',
        required: true,
      },
      description: {
        type: 'string',
        required: true,
      },
    };
  }

  async create() {
    const { ctx, ColumnCreateTransfer } = this;

    ctx.validate(ColumnCreateTransfer);

    const payload = ctx.request.body || {};

    const data = await ctx.service.columns.create(payload);

    ctx.helper.success(ctx, data);
  }

  async index() {
    const { ctx } = this;

    const data = await ctx.service.columns.find();

    ctx.helper.success(ctx, data);
  }
}

module.exports = ColumnController;
