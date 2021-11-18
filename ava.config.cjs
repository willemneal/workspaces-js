module.exports = require('near-willem-workspaces-ava/ava.config.cjs');

module.exports.files.push(
  '!packages/init/bootstrap-starter/**/*',
  '!test-near-willem-workspaces-init/**/*',
  '!packages/init/__tests__/install.ava.ts',
);
