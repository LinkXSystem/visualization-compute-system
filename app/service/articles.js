'use strict';

const { Service } = require('egg');

class ArticleService extends Service {
  // eslint-disable-next-line
  constructor(ctx) {
    super(ctx);
  }

  create() {
    return new Promise(resolve => {
      resolve('linksystem');
    });
  }
}

module.exports = ArticleService;
