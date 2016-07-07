var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect;

chai.use(chaiAsPromised);

var config = require('../lib/config.json');

var utils = require('../lib/utils').getInstance(),
    loginPage = require('../lib/pages/login').getInstance(),
    basePage = require('../lib/pages/base').getInstance(),
    scenarioPage = require('../lib/pages/scenarios').getInstance();

global.assert = assert;
global.test = test;
global.chai = chai;
global.chaiAsPromised = chaiAsPromised;
global.expect = expect;
global.config = config;
global.utils = utils;
global.loginPage = loginPage;
global.basePage = basePage;
global.scenarioPage = scenarioPage;
