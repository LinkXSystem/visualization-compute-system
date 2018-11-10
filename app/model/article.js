'use strict';

module.exports = app => {
  const { mongoose } = app;

  const ArticleSchema = new mongoose.Schema({
    uuid: {
      type: String,
      unique: true,
      required: true,
    },
    column: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Column',
    },
    label: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Label',
      },
    ],
    title: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    paragraphs: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    update_time: {
      type: Date,
      required: true,
    },
    create_time: {
      type: Date,
      default: Date.now,
    },
  });

  return mongoose.model('Article', ArticleSchema);
};
