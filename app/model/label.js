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
    create_time: {
      type: Date,
      default: Date.now,
    },
  });

  return mongoose.model('Label', LabelSchema);
};
