var config = require('../../config.json'),
    identifier = require('./identifiers.js'),
    seleniumDriver = require('../../driver').getInstance();

var _instance;

loginPage = function loginPage() {

    var url = config.loginUrl,
        driver = seleniumDriver.getDriver(),
        By = seleniumDriver.getBy(),
        loginForm = By.css(identifier.CSS.loginForm),
        userNameField = By.css(identifier.CSS.userNameField);

    var visit = function () {
        return driver.get(url);
    };

    var isLoginFormPresent = function () {
        return driver.isElementPresent(loginForm)
    };

    var loginUsing = function () {
        return driver.isElementPresent(userNameField);
    };

    return {
        visit: visit,
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
