var identifier = require('./identifiers.js'),
    loginPageIdentifier = require('../login/identifiers.js'),
    seleniumDriver = require('../../driver').getInstance();

var _instance;

basePage = function basePage() {

    var driver = seleniumDriver.getDriver();

    var logoutButton = seleniumDriver.byCss(identifier.CSS.logoutButton),
        loginForm = seleniumDriver.byCss(loginPageIdentifier.CSS.loginForm);

    var logout = function () {
        seleniumDriver.waitUntil(logoutButton);
        driver.findElement(logoutButton).click();
        seleniumDriver.waitUntil(loginForm);
        return driver.isElementPresent(loginForm);
    };

    return {
        logout: logout
    };
};

module.exports = {
    getInstance: function () {
        if (!_instance) {
            _instance = new basePage();
        }
        return _instance;
    }
};
