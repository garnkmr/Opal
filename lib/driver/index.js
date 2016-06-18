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

    var getBy = function () {
        return webdriver.By;
    };

    var getPromise = function () {
        return webdriver.promise;
    };

    return {
        getDriver: getDriver,
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
