var config = require('../../config.json'),
    identifier = require('./identifiers.js'),
    seleniumDriver = require('../../driver').getInstance();

var _instance;

loginPage = function loginPage() {

    var url = config.loginUrl;

    var loginForm = seleniumDriver.byCss(identifier.CSS.loginForm),
        usernameLabel = seleniumDriver.byXpath(identifier.XPATH.usernameLabel),
        usernameField = seleniumDriver.byCss(identifier.CSS.usernameField),
        passwordLabel = seleniumDriver.byXpath(identifier.XPATH.passwordLabel),
        passwordField = seleniumDriver.byCss(identifier.CSS.passwordField),
        forgotPaswordLink = seleniumDriver.byXpath(identifier.XPATH.forgotPaswordLink),
        loginButton = seleniumDriver.byCss(identifier.CSS.loginButton),
        loginSuccessDialog = seleniumDriver.byCss(identifier.CSS.loginSuccessDialog),
        usernameDefault = config.username,
        passwordDefault = config.password;

    var visit = function () {
        return seleniumDriver.goToUrl(url);
    };

    var getTitle = function () {
        return seleniumDriver.getPageTitle();
    };

    var isLoginFormPresent = function () {
        seleniumDriver.verifyElementPresent(loginForm);
        seleniumDriver.verifyElementPresent(usernameLabel);
        seleniumDriver.verifyElementPresent(passwordLabel);
        seleniumDriver.verifyElementPresent(forgotPaswordLink);
        return seleniumDriver.verifyElementPresent(loginForm);
    };

    var loginUsing = function (username, password) {
        seleniumDriver.verifyElementPresent(loginForm);
        seleniumDriver.setValue(usernameField, username);
        seleniumDriver.setValue(passwordField, password);
        seleniumDriver.clickOn(loginButton);
        seleniumDriver.verifyElementPresent(loginSuccessDialog);
        return seleniumDriver.verifyElementNotPresent(loginSuccessDialog);
    };

    var loginDefault = function () {
        seleniumDriver.verifyElementPresent(loginForm);
        seleniumDriver.setValue(usernameField, usernameDefault);
        seleniumDriver.setValue(passwordField, passwordDefault);
        seleniumDriver.clickOn(loginButton);
        seleniumDriver.verifyElementPresent(loginSuccessDialog);
        return seleniumDriver.verifyElementNotPresent(loginSuccessDialog);
    };

    return {
        visit: visit,
        getTitle: getTitle,
        isLoginFormPresent: isLoginFormPresent,
        loginUsing: loginUsing,
        loginDefault: loginDefault
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
