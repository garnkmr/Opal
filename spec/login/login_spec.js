var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var driver;

//var ralphSaysPage = require('../../pages/login').getInstance();

var RalphSaysPage = require('../../pages/login');

const mochaTimeOut = 1130000; //ms

test.before(function () {
    this.timeout(mochaTimeOut);
    console.log("before-------------------------");
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
});


test.after(function () {
    driver.quit();
});

test.describe('Ralph Says', function () {
    this.timeout(mochaTimeOut);

    test.it('shows a quote container', function () {
        var ralphSaysPage = new RalphSaysPage(driver);
        ralphSaysPage.visit();
        ralphSaysPage.quoteContainerPresent().then(function (present) {
            assert.equal(present, true, "Quote container not displayed");
        });
    });

    test.it('shows a non-empty quote', function () {
        var ralphSaysPage = new RalphSaysPage(driver);
        ralphSaysPage.visit();
        ralphSaysPage.quoteTextDisplayed().then(function (text) {
            assert.notEqual(text, '', 'Quote is empty');
        });
    });
});
