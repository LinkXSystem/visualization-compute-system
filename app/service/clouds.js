'use strict';

const { Service } = require('egg');
const cloud = require('qiniu');

class CloudService extends Service {
  // eslint-disable-next-line
  constructor(ctx) {
    super(ctx);
    this.initial();
  }

  initial() {
    console.log('====================================');
    console.log('single');
    console.log('====================================');
    const { access, secret, scope } = this.config.cloud;
    const mac = new cloud.auth.digest.Mac(access, secret);
    const policy = new cloud.rs.PutPolicy({
      scope,
    });
    this.mac = mac;
    this.policy = policy;
  }

  token() {
    const { policy, mac } = this;
    return policy.uploadToken(mac);
  }
}

module.exports = CloudService;
