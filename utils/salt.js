'use strict';

const crypto = require('crypto');

module.exports = {
  build(length) {
    return crypto
      .randomBytes(Math.ceil(length / 2))
      .toString('hex')
      .slice(0, length);
  },

  crypto(target, salt) {
    const hash = crypto.createHash('sha512', salt);
    hash.update(target);
    const ciphertext = hash.digest('hex');

    return {
      salt,
      ciphertext,
    };
  },
};
