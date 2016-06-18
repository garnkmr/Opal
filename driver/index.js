var webdriver = require('selenium-webdriver');

var _instance;

var Driver = function () {};

Driver.prototype.getDriver = function () {
    var driver = new webdriver.Builder()
        .forBrowser('firefox')
        .build();
    return driver;
};

Driver.prototype.getBy = function () {
    return webdriver.By;
};

Driver.prototype.getPromise = function () {
    return webdriver.promise;
};

module.exports = {
    getInstance: function () {
        if (!_instance) {
            _instance = new Driver();
        }
        return _instance;
    }
};
