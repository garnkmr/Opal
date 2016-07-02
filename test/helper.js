var assert = require('assert'),
    test = require('selenium-webdriver/testing');

var config = require('../lib/config.json');

var mochaTimeOut = config.timeout;

var utils = require('../lib/utils').getInstance(),
    loginPage = require('../lib/pages/login').getInstance(),
    basePage = require('../lib/pages/base').getInstance(),
    scenarioPage = require('../lib/pages/scenarios').getInstance();

global.assert = assert;
global.test = test;
global.config = config;
global.utils = utils;
global.mochaTimeOut = mochaTimeOut;
global.loginPage = loginPage;
global.basePage = basePage;
global.scenarioPage = scenarioPage;
