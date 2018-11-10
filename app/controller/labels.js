'use strict';

const { Controller } = require('egg');
const Word = require('../../utils/word');

class LabelController extends Controller {
  // eslint-disable-next-line
  constructor(ctx) {
    super(ctx);

    this.LabelCreateTransfer = {
      labels: {
        type: 'array',
        required: true,
      },
    };

    this.LabelBuildTransfer = {
      paragraph: {
        type: 'string',
      },
    };
  }

  async query() {
    const { ctx } = this;
    const payload = ctx.request.body || {};

    const total = await ctx.service.labels.count(payload);
    const list = await ctx.service.labels.find(payload);

    ctx.helper.success(ctx, {
      total,
      list,
    });
  }

  async batch() {
    const { ctx, LabelCreateTransfer } = this;

    ctx.validate(LabelCreateTransfer);

    const { labels } = ctx.request.body || {};

    await ctx.service.labels(labels);

    ctx.helper.success(ctx, {
      message: 'batch insert successful !',
    });
  }

  async build() {
    const { ctx, LabelBuildTransfer } = this;

    ctx.validate(LabelBuildTransfer);

    const { paragraph } = ctx.request.body || {};

    const list = Word.analysis(paragraph);

    ctx.helper.success(ctx, list);
  }
}

module.exports = LabelController;
