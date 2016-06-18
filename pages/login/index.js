// npms

// files
var identifier = require('./identifiers.js'),
    config = require('../../config.json'),
    seleniumDriver = require('../../driver').getInstance();

// vars
var _instance;

RalphSaysPage = function RalphSaysPage() {

    url = "http://ralphsays.github.io";
    var driver = seleniumDriver.getDriver();
    var By = seleniumDriver.getBy();
    var quoteSelector = By.id(identifier.ID.quoteSelector);

    var visit = function () {
        return driver.get(url);
        // return seleniumDriver.getPromise().fulfilled(true);
    };

    var quoteContainerPresent = function () {
        return driver.isElementPresent(quoteSelector);
    };

    var quoteTextDisplayed = function () {
        return driver.findElement(this.quoteSelector).getText(function (txt) {
            console.log("txt");
        });
    };

    return {
        visit: visit,
        quoteContainerPresent: quoteContainerPresent,
        quoteTextDisplayed: quoteTextDisplayed
    };

};

module.exports = {
    getInstance: function () {
        if (!_instance) {
            _instance = new RalphSaysPage();
        }
        return _instance;
    }
}
