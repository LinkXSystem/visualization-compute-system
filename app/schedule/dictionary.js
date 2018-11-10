'use strict';

// const Subscription = require('egg').Subscription;

// class Dictionary extends Subscription {
//   // 通过 schedule 属性来设置定时任务的执行间隔等配置
//   static get schedule() {
//     return {
//       interval: '1m', // 1 分钟间隔
//       type: 'all', // 指定所有的 worker 都需要执行
//     };
//   }

//   // subscribe 是真正定时任务执行时被运行的函数
//   async subscribe() {
//     console.log('dala');
//   }
// }

// module.exports = Dictionary;

module.exports = () => {
  return {
    schedule: {
      interval: '1s',
      type: 'all',
    },

    async task(ctx) {
      console.log(ctx);
    },
  };
};
