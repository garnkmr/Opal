var config = require('../../config.json'),
    identifier = require('./identifiers.js'),
    seleniumDriver = require('../../driver').getInstance();

var _instance;

loginPage = function loginPage() {

    var url = config.loginUrl,
        driver = seleniumDriver.getDriver();

    var loginForm = seleniumDriver.byCss(identifier.CSS.loginForm),
        userNameField = seleniumDriver.byCss(identifier.CSS.userNameField),
        passwordField = seleniumDriver.byCss(identifier.CSS.passwordField),
        loginButton = seleniumDriver.byCss(identifier.CSS.loginButton),
        loginSuccessDialog = seleniumDriver.byCss(identifier.CSS.loginSuccessDialog);

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

    var loginUsing = function (username, password) {
        driver.findElement(userNameField).sendKeys(username);
        driver.findElement(passwordField).sendKeys(password);
        driver.findElement(loginButton).click();
        return seleniumDriver.waitUntil(loginSuccessDialog);
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
