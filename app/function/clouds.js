'use strict';

const cloud = require('qiniu');

class CloudUtils {
  // eslint-disable-next-line
  constructor(app) {
    this.app = app;
    this.initial();
  }

  initial() {
    const { app } = this;
    const { access, secret, scope } = app.config.cloud;
    const mac = new cloud.auth.digest.Mac(access, secret);
    const policy = new cloud.rs.PutPolicy({
      scope,
    });
    this.mac = mac;
    this.policy = policy;
  }

  token() {
    const { domain } = this.app.config.cloud;
    const { policy, mac } = this;

    return {
      domain,
      token: policy.uploadToken(mac),
    };
  }
}

module.exports = CloudUtils;
