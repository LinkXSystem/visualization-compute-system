'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1540906612090_1537';

  // add your config here
  config.middleware = ['error'];

  config.cluster = {
    listen: {
      port: 8080,
      path: '',
      hostname: '0.0.0.0',
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.mongoose = {
    client: {
      url: 'mongodb://193.112.23.66:27017/blog',
      options: {},
    },
  };

  config.jwt = {
    secret: 'linksystem',
    enable: true,
    match: '/jwt',
  };

  config.cloud = {
    access: '2H2hnPVgPEHVumhuItl7YEB6wqJ8sOkLvLhLM5Ug',
    secret: 'qRLm5jVOQmzdIRx1mF9G8geXC1r4BXZa3E8WY51z',
    scope: 'linksystem',
  };

  config.bull = {
    clients: {
      bull: {
        name: 'bull',
      },
    },
    default: {
      redis: {
        host: '193.112.23.66',
        port: 6379,
        // 设置 0 号库
        db: 0,
      },
    },
  };

  return config;
};
