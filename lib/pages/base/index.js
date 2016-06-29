var identifier = require('./identifiers.js'),
    loginPageIdentifier = require('../login/identifiers.js'),
    seleniumDriver = require('../../driver').getInstance();

var _instance;

basePage = function basePage() {

    var logoutButton = seleniumDriver.byCss(identifier.CSS.logoutButton),
        loginForm = seleniumDriver.byCss(loginPageIdentifier.CSS.loginForm);

    var logout = function () {
        seleniumDriver.clickOn(logoutButton);
        return seleniumDriver.verifyElementPresent(loginForm);
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
