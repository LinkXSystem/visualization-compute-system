'use strict';

const jieba = require('nodejieba');

const NLP = require('../constants/nlp');

function getTagBySentence(sentence = '') {
  const words = jieba.tag(sentence);
  return words;
}

function getTagByFilter(sentence = '', filter = NLP.PartOfSpeech.X) {
  const words = getTagBySentence(sentence) || [];

  return words.filter(word => {
    return word.tag !== filter;
  });
}

module.exports = {
  getTagBySentence,
  getTagByFilter,
};
