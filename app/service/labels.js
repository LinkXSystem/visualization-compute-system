'use strict';

const ConstraintService = require('./constraint');
const V1 = require('uuid/v1');

class LabelService extends ConstraintService {
  constructor(ctx) {
    super(ctx);
    this.model = ctx.model.Label;
  }

  count(payload) {
    const { model } = this;

    return model.count(payload);
  }

  find(payload) {
    const { model } = this;

    return model.find(payload, {
      __v: 0,
      _id: 0,
    });
  }

  batchInsert(payload) {
    const { model } = this;
    const cache = payload.map(item => Object.assign({}, item, { uuid: V1() }));
    return model.insertMany(cache);
  }
}

module.exports = LabelService;
