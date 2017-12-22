"use strict"

exports.config={

  directConnection: true,

  capabilities: {
    'browserName': 'chrome'

  },

  framework:'mocha',

  onPrepare : function(){
    browser.ignoreSynchronization=true;
    browser.driver.manage().window().maximize();
    browser.driver.manage().timeouts().implicitlyWait(10000);
  },

    mochaOpts:
    {
        reporter: 'good-mocha-html-reporter', //good-mocha-html-reporter, spec, nyan
        timeout: 15000,
        bail: false,
        savePath: './E2E-reports/', // the path to desired location
        filename: 'report.html', // filename gets attached at the end of savePath
        mode: 'Verbose'
    },

    suites: {
      functionalTest:[
        'Specs/testCase.spec.js'
      ],
    }


};
