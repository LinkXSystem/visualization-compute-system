'use strict';

// const { assert } = require('egg-mock/bootstrap');
const assert = require('assert');

const NLP = require('../../utils/nlp');

describe('test/utils/nlp.test.js', () => {
  it('getTagBySentence', function() {
    const words = NLP.getTagBySentence(
      '基于G2的数据可视化设计的博客系统（NodeJS模块）',
    );

    assert(words.length === 13);
  });

  it('getTagByFilter', function() {
    const words = NLP.getTagByFilter(
      '基于G2的数据可视化设计的博客系统（NodeJS模块）',
    );

    assert(words.length === 11);
  });
});
