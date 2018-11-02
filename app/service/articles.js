'use strict';

const ConstraintService = require('./constraint');

class ArticleService extends ConstraintService {
  // eslint-disable-next-line
  constructor(ctx) {
    super(ctx);
    this.model = ctx.model.Article;
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
      {
        label: {
          $all: label,
        },
      },
      {
        __v: 0,
        _id: 0,
      },
    ).sort({ update_time: -1 });
  }
}

module.exports = ArticleService;
