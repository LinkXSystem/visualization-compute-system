'use strict';

const { Controller } = require('egg');

class ArticleController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.rules = {
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
  index() {
    const { ctx } = this;

    ctx.body = {
      message: 'The Article of Query !',
    };

    ctx.status = 200;
  }

  /**
   *
   *
   * @description POST
   * @memberof ArticleController
   */
  async create() {
    const { ctx, rules } = this;
    ctx.validate(rules);

    const uuid = await ctx.service.articles.create();

    ctx.body = {
      uuid,
    };

    ctx.status = 200;
  }

  system() {
    const { ctx } = this;

    ctx.body = {
      message: 'system',
    };

    ctx.status = 200;
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
}

module.exports = ArticleController;
