'use strict';

module.exports = app => {
  const { mongoose } = app;

  const LabelSchema = new mongoose.Schema({
    uuid: {
      type: String,
      unique: true,
      required: true,
    },
    label: {
      type: String,
      unique: true,
      required: true,
    },
    weight: {
      type: Number,
      default: 0,
    },
    create_time: {
      type: Date,
      default: Date.now,
    },
  });

  return mongoose.model('Label', LabelSchema);
};
