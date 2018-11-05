'use strict';

const ConstraintService = require('./constraint');

class ColumnService extends ConstraintService {
  constructor(ctx) {
    super(ctx);
    this.model = ctx.model.Column;
  }

  find(payload) {
    const { model } = this;

    return model
      .find(payload, {
        __v: 0,
        _id: 0,
      })
      .populate({
        path: 'user',
        select: 'uuid -_id avatar nickname',
      })
      .sort({
        update_time: -1,
      });
  }
}

module.exports = ColumnService;
