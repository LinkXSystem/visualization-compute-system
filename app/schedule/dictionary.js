'use strict';

const Subscription = require('egg').Subscription;

class Dictionary extends Subscription {
  static get schedule() {
    return {
      cron: '59 59 23 * * *',
      type: 'worker',
    };
  }

  async subscribe() {
    console.log('====================================');
    console.log('LinkSystem');
    console.log('====================================');
  }
}

module.exports = Dictionary;
