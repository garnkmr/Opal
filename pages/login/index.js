// npms
var webdriver = require('selenium-webdriver');

// files
var identifier = require('./identifiers.js'),
    config = require('../../config.json');

// vars
var _instance;

RalphSaysPage = function RalphSaysPage(driver) {
    this.driver = driver;
    this.url = 'http://ralphsays.github.io';
    this.quoteSelector = webdriver.By.id('quote');
};

RalphSaysPage.prototype.visit = function () {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};

RalphSaysPage.prototype.quoteContainerPresent = function () {
    var d = webdriver.promise.defer();
    this.driver.isElementPresent(this.quoteSelector).then(function (present) {
        d.fulfill(present);
    });
    return d.promise;
};

RalphSaysPage.prototype.quoteTextDisplayed = function () {
    var d = webdriver.promise.defer();
    this.driver.findElement(this.quoteSelector).getText().then(function (text) {
        d.fulfill(text);
    });
    return d.promise;
};

module.exports = RalphSaysPage;


//RalphSaysPage = function RalphSaysPage(driver) {
//    this.driver = driver;
//    this.url = "http://ralphsays.github.io";
//    this.quoteSelector = webdriver.By.id(identifier.ID.quoteSelector);
//
//    var visit = function () {
//        this.driver.get(this.url);
//        return webdriver.promise.fulfilled(true);
//    };
//
//    var quoteContainerPresent = function () {
//        return this.driver.isElementPresent(this.quoteSelector);
//    };
//
//    var quoteTextDisplayed = function () {
//        return browser.findElement(this.quoteSelector).getText(function (txt) {
//            console.log("txt");
//        });
//    };
//
//    return {
//        visit: visit,
//        quoteContainerPresent: quoteContainerPresent,
//        quoteTextDisplayed: quoteTextDisplayed
//    };
//
//};
//
//module.exports = {
//    getInstance: function () {
//        if (!_instance) {
//            _instance = new RalphSaysPage();
//        }
//        return _instance;
//    }
//}
