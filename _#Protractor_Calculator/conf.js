var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {

  directConnect: true,
  seleniumAddress:'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['--use-fake-device-for-media-stream','--use-fake-ui-for-media-stream'],
     }
  },
  framework: 'jasmine',
  specs: ['BasicCalculator.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 600000
  },
  onPrepare: function() {
     jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'report/screenshots'
     }).getJasmine2Reporter());
  },
}
var reporter = new HtmlReporter({
  baseDirectory: 'report/screenshots'
});
