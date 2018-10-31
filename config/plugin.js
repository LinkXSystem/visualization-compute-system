'use strict';

// had enabled by egg
// exports.static = true;

exports.validate = {
  enabled: true,
  package: 'egg-validate',
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.routerPlus = {
  enabled: true,
  package: 'egg-router-plus',
};
