'use strict';

const { Controller } = require('egg');

class ArticleController extends Controller {
  constructor(ctx) {
    super(ctx);

    this.ArticleCreateTransfer = {
      column: {
        type: 'string',
        required: false,
      },
      label: {
        type: 'array',
        require: true,
      },
      title: {
        type: 'string',
        required: true,
      },
      user: {
        type: 'string',
        required: true,
      },
      paragraphs: {
        type: 'string',
        required: true,
      },
      comments: {
        type: 'array',
        required: false,
      },
    };

    this.ArticleLabelTransfer = {
      label: {
        type: 'array',
        required: true,
      },
    };

    this.ArticleUpdateTransfer = {
      label: {
        type: 'array',
        required: false,
      },
      title: {
        type: 'string',
        required: false,
      },
      user: {
        type: 'string',
        required: false,
      },
      paragraphs: {
        type: 'string',
        required: false,
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
  async show() {
    const { ctx } = this;

    const { id: uuid } = ctx.params || {};

    if (!uuid) {
      throw Object.assign({}, new Error(), {
        status: 422,
        message: 'querying interface must have uuid about article',
      });
    }

    const data = await ctx.service.articles.findArticleByUuid(uuid);

    if (!data) {
      throw Object.assign({}, new Error(), {
        status: 404,
        message: 'article is not found, please check your querying',
      });
    }

    ctx.helper.success(ctx, data);
  }

  /**
   *
   *
   * @description PUT
   * @memberof ArticleController
   */
  async update() {
    const { ctx, ArticleUpdateTransfer } = this;

    ctx.validate(ArticleUpdateTransfer);

    // eslint-disable-next-line
    const { id: uuid } = ctx.params || {};
    const data = ctx.request.body || {};

    await ctx.service.articles.update({
      query: { uuid },
      update: data,
    });

    ctx.helper.success(ctx, {
      message: 'article is updated',
    });
  }

  /**
   *
   *
   * @description DELETE
   * @memberof ArticleController
   */
  async destroy() {
    const { ctx } = this;

    const { id: uuid } = ctx.params || {};

    await ctx.service.articles.delete({
      uuid,
    });

    ctx.helper.success(ctx, {
      message: 'article is deleted',
    });
  }

  async findArticleByLabel() {
    const { ctx, ArticleLabelTransfer } = this;

    ctx.validate(ArticleLabelTransfer);

    const { label } = ctx.request.body || {};

    const total = await ctx.service.articles.count({
      label: {
        $all: label,
      },
    });
    const list = await ctx.service.articles.findArticleByLabel(label);

    ctx.helper.success(ctx, {
      total,
      list,
    });
  }
}

module.exports = ArticleController;
