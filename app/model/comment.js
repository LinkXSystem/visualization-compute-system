'use strict';

module.exports = app => {
  const { mongoose } = app;

  const CommentSchema = new mongoose.Schema({
    uuid: {
      type: String,
      unique: true,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    content: {
      type: String,
      required: true,
    },
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article',
    },
    create_time: {
      type: Date,
      default: Date.now,
    },
  });

  return mongoose.model('Comment', CommentSchema);
};
