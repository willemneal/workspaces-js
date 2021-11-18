module.exports = {
  ...require('near-willem-workspaces-ava/ava.testnet.config.cjs'),
  ...require('./ava.config.cjs'),
};

module.exports.files.push(
  '!__tests__/02*',
  '!__tests__/05*',
);
