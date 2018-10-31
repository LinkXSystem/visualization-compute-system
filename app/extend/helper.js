'use strict';

exports.success = (ctx, data) => {
  ctx.body = data;
  ctx.status = 200;
};

exports.arguments = (ctx, data) => {
  ctx.data = data;
  ctx.status = 406;
};
