var webdriver = require('selenium-webdriver'),
    chromeDriver = require('chromedriver');

var _instance;

Driver = function Driver() {

    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    var getDriver = function () {
        return driver;
    };

    var until = function () {
        return webdriver.until;
    };

    var waitUntil = function (element) {
        return driver.wait(webdriver.until.elementLocated(element));
    };

    var byCss = function (element) {
        return webdriver.By.css(element);
    };

    var getBy = function () {
        return webdriver.By;
    };

    var find = function () {
        return webdriver.findElement();
    }

    var getPromise = function () {
        return webdriver.promise;
    };

    return {
        getDriver: getDriver,
        until: until,
        waitUntil: waitUntil,
        byCss: byCss,
        getBy: getBy,
        getPromise: getPromise
    };

};

module.exports = {
    getInstance: function () {
        if (!_instance) {
            _instance = new Driver();
        }
        return _instance;
    }
};
