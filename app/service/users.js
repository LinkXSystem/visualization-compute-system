'use strict';

const ConstraintService = require('./constraint');

class UserService extends ConstraintService {
  constructor(ctx) {
    super(ctx);
    this.model = ctx.model.User;
  }

  findUserByUuid() {}
}

module.exports = UserService;
