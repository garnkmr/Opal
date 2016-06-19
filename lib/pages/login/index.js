var config = require('../../config.json'),
    identifier = require('./identifiers.js'),
    seleniumDriver = require('../../driver').getInstance();

var _instance;

loginPage = function loginPage() {

    var url = config.loginUrl,
        driver = seleniumDriver.getDriver(),
        By = seleniumDriver.getBy(),
        loginForm = By.css(identifier.CSS.loginForm),
        userNameField = By.css(identifier.CSS.userNameField),
        until = seleniumDriver.until();

    var visit = function () {
        return driver.get(url);
    };

    var getTitle = function () {
        return driver.getTitle();
    };

    var isLoginFormPresent = function () {
        return driver.wait(until.elementLocated(loginForm))
            .then(function () {
                return driver.isElementPresent(loginForm);
            });
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
