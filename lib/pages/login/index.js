var config = require('../../config.json'),
    identifier = require('./identifiers.js'),
    seleniumDriver = require('../../driver').getInstance();

var _instance;

loginPage = function loginPage() {

    var url = config.loginUrl,
        driver = seleniumDriver.getDriver();

    var loginForm = seleniumDriver.byCss(identifier.CSS.loginForm),
        userNameField = seleniumDriver.byCss(identifier.CSS.userNameField);

    var visit = function () {
        return driver.get(url);
    };

    var getTitle = function () {
        return driver.getTitle();
    };

    var isLoginFormPresent = function () {
        seleniumDriver.waitUntil(loginForm);
        return driver.isElementPresent(loginForm);
    };

    var loginUsing = function () {
        return driver.findElement(userNameField);
    };

    return {
        visit: visit,
        getTitle: getTitle,
        isLoginFormPresent: isLoginFormPresent,
        loginUsing: loginUsing
    };
};

module.exports = {
    getInstance: function () {
        if (!_instance) {
            _instance = new loginPage();
        }
        return _instance;
    }
};
