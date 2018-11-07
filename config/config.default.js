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

  return config;
};
