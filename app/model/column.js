'use strict';

module.exports = app => {
  const { mongoose } = app;

  const ColumnSchema = new mongoose.Schema({
    uuid: {
      type: String,
      unique: true,
      required: true,
    },
    user_uuid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    labels: {
      type: Array,
      default: [],
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

  return mongoose.model('Column', ColumnSchema);
};
