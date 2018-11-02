'use strict';

const { Service } = require('egg');
const V1 = require('uuid/v1');

class ConstraintService extends Service {
  // eslint-disable-next-line
  constructor(ctx) {
    super(ctx);
  }

  create(payload) {
    const { model } = this;

    const temp = Object.assign({}, payload, {
      uuid: V1(),
      update_time: Date.now(),
    });

    return model.create(temp);
  }

  update(payload) {
    const { ctx } = this;
    const { query, update } = payload;

    return ctx.model.User.update(query, update, {
      upsert: false,
    });
  }

  delete(payload) {
    const { ctx } = this;

    return ctx.model.Article.deleteOne(payload);
  }
}

module.exports = ConstraintService;
