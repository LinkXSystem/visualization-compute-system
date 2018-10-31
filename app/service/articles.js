'use strict';

const { Service } = require('egg');
const V1 = require('uuid/v1');

class ArticleService extends Service {
  // eslint-disable-next-line
  constructor(ctx) {
    super(ctx);
  }

  create(payload) {
    const { ctx } = this;

    const temp = Object.assign({}, payload, {
      uuid: V1(),
      update_time: Date.now(),
    });

    return ctx.model.Article.create(temp);
  }

  count(payload) {
    const { ctx } = this;

    return ctx.model.Article.count(payload);
  }

  find(payload) {
    const { ctx } = this;
    return ctx.model.Article.find(payload, {
      __v: 0,
      _id: 0,
    }).sort({
      update_time: -1,
    });
  }

  findArticleByUuid(uuid) {
    const { ctx } = this;

    return ctx.model.Article.findOne(
      { uuid },
      {
        __v: 0,
        _id: 0,
      },
    );
  }

  // eslint-disable-next-line
  findArticleByLabel(label) {
    const { ctx } = this;
    return ctx.model.Article.find(
      {},
      {
        __v: 0,
        _id: 0,
      },
    ).sort({ update_time: -1 });
  }
}

module.exports = ArticleService;
