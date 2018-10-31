'use strict';

module.exports = app => {
  const { mongoose } = app;

  const ArticleSchema = new mongoose.Schema({
    uuid: {
      type: String,
      unique: true,
      required: true,
    },
    label: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
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

  return mongoose.model('Article', ArticleSchema);
};
