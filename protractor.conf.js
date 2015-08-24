exports.config = {
  capabilities: {
      'browserName': 'chrome'
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['demo/appSpecs.js']
};
