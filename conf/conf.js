
exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  framework: 'jasmine',

  specs: ['../tests/otcmTest.js'],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
