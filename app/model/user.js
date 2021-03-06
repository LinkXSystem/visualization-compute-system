'use strict';

module.exports = app => {
  const { mongoose } = app;

  const UserSchema = new mongoose.Schema({
    uuid: {
      type: String,
      unique: true,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    update_time: {
      type: Date,
      required: true,
    },
    create_time: {
      type: Date,
      default: Date.now,
    },
  });

  return mongoose.model('User', UserSchema);
};
