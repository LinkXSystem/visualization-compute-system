'use strict';

const { Controller } = require('egg');

class ArticleController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.ArticleCreateTransfer = {
      label: {
        type: 'array',
        require: true,
      },
      title: {
        type: 'string',
        required: true,
      },
      author: {
        type: 'string',
        required: true,
      },
      content: {
        type: 'string',
        required: true,
      },
    };
  }

  /**
   *
   *
   * @description GET
   * @memberof ArticleController
   */
  async index() {
    const { ctx } = this;
    const payload = ctx.request.body || {};

    const count = await ctx.service.articles.count(payload);
    const list = await ctx.service.articles.find(payload);

    ctx.helper.success(ctx, {
      total: count,
      list,
    });
  }

  /**
   *
   *
   * @description POST
   * @memberof ArticleController
   */
  async create() {
    const { ctx, ArticleCreateTransfer } = this;

    ctx.validate(ArticleCreateTransfer);

    const payload = ctx.request.body || {};

    const data = await ctx.service.articles.create(payload);

    ctx.helper.success(ctx, data);
  }

  /**
   *
   *
   * @description GET
   * @memberof ArticleController
   */
  show() {
    const { ctx } = this;

    ctx.body = {
      message: 'The Article of Query By UUID !',
    };

    ctx.status = 200;
  }

  /**
   *
   *
   * @description PUT
   * @memberof ArticleController
   */
  update() {}

  /**
   *
   *
   * @description DELETE
   * @memberof ArticleController
   */
  destroy() {}

  async findArticleByLabel() {
    const { ctx } = this;
    const { label } = ctx.query || {};
    if (!label) {
      ctx.helper.arguments(ctx, {
        message: 'the label is null, please check your query',
      });
    }

    const list = await ctx.service.articles.findArticleByLabel(label);

    ctx.helper.success(ctx, {
      list,
    });
  }
}

module.exports = ArticleController;
