'use strict';

const ConstraintService = require('./constraint');
const V1 = require('uuid/v1');

const Salt = require('../../utils/salt');

class UserService extends ConstraintService {
  constructor(ctx) {
    super(ctx);
    this.model = ctx.model.User;
  }

  async create(payload) {
    const { nickname, email, password } = payload;
    const { ctx, model } = this;

    const user = await model.findOne({
      email,
    });

    if (user) {
      ctx.throw('403', 'the email is exist, please checking !');
    }

    const salt = Salt.build(12);
    const cipher = Salt.crypto(password, salt);

    return await model.create({
      uuid: V1(),
      nickname,
      email,
      password: cipher.ciphertext,
      salt,
      update_time: Date.now(),
    });
  }

  async find(payload) {
    const { email, password } = payload;
    const { ctx, service, model } = this;

    const user = await model.findOne({
      email,
    });

    if (!user) {
      ctx.throw('404', 'the user is not found, please checking !');
    }

    const cipher = Salt.crypto(password, user.salt);

    if (cipher.ciphertext !== user.password) {
      ctx.throw('403', 'the password is error, please checking !');
    }

    return {
      token: await service.authentic.build(user._id),
    };
  }

  findUserByUuid() {}
}

module.exports = UserService;
