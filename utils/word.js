'use strict';

const jieba = require('nodejieba');

module.exports = {
  analysis(paragraphs, weight = 0, count = 10) {
    const label = jieba.extract(paragraphs, count);

    return label.filter(item => item.weight > weight);
  },
};
