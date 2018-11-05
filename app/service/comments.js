'use strict';

const ConstraintService = require('./constraint');

class CommentService extends ConstraintService {
  constructor(ctx) {
    super(ctx);

    this.model = ctx.model.Comment;
  }
}

module.exports = CommentService;
