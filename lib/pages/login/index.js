var config = require('../../config.json'),
    identifier = require('./identifiers.js'),
    seleniumDriver = require('../../driver').getInstance();

var _instance;

loginPage = function loginPage() {

    var url = config.loginUrl,
        driver = seleniumDriver.getDriver();

    var loginForm = seleniumDriver.byCss(identifier.CSS.loginForm),
        usernameLabel = seleniumDriver.byXpath(identifier.XPATH.usernameLabel),
        usernameField = seleniumDriver.byCss(identifier.CSS.usernameField),
        passwordLabel = seleniumDriver.byXpath(identifier.XPATH.passwordLabel),
        passwordField = seleniumDriver.byCss(identifier.CSS.passwordField),
        forgotPaswordLink = seleniumDriver.byXpath(identifier.XPATH.forgotPaswordLink),
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
        driver.isElementPresent(usernameLabel);
        driver.isElementPresent(passwordLabel);
        driver.isElementPresent(forgotPaswordLink);
        return driver.isElementPresent(loginForm);
    };

    var loginUsing = function (username, password) {
        driver.findElement(usernameField).sendKeys(username);
        driver.findElement(passwordField).sendKeys(password);
        driver.findElement(loginButton).click();
        seleniumDriver.waitUntil(loginSuccessDialog);
        return driver.isElementPresent(loginSuccessDialog);
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
