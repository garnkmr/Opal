var webdriver = require('selenium-webdriver'),
    chromeDriver = require('chromedriver');

var _instance;

Driver = function Driver() {

    var driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    var getDriver = function () {
        //driver.manage().timeouts().implicitlyWait(10);
        return driver;
    };

    var goToUrl = function (url) {
        return driver.get(url);
    };

    var getPageTitle = function () {
        return driver.getTitle();
    };

    var verifyElementPresent = function (element) {
        driver.wait(webdriver.until.elementLocated(element));
        return driver.isElementPresent(element);
    };

    var verifyElementNotPresent = function (element) {
        driver.wait(function () {
            return driver.isElementPresent(element)
                .then(function (present) {
                    return !present;
                });
        }, 10000, 'The element was still present when it should have disappeared.');
    };

    var waitUntil = function (element) {
        return driver.wait(webdriver.until.elementLocated(element));
    };

    var byCss = function (element) {
        return webdriver.By.css(element);
    };

    var byXpath = function (element) {
        return webdriver.By.xpath(element);
    };

    var getBy = function () {
        return webdriver.By;
    };

    var getPromise = function () {
        return webdriver.promise;
    };

    var setValue = function (element, text) {
        driver.wait(webdriver.until.elementLocated(element));
        return driver.findElement(element).sendKeys(text);
    };

    var clickOn = function (element) {
        driver.wait(webdriver.until.elementLocated(element));
        return driver.findElement(element).click();
    };

    return {
        getDriver: getDriver,
        goToUrl: goToUrl,
        getPageTitle: getPageTitle,
        verifyElementPresent: verifyElementPresent,
        verifyElementNotPresent: verifyElementNotPresent,
        waitUntil: waitUntil,
        byCss: byCss,
        byXpath: byXpath,
        getBy: getBy,
        getPromise: getPromise,
        setValue: setValue,
        clickOn: clickOn
    };

};

module.exports = {
    getInstance: function () {
        if (!_instance) {
            _instance = new Driver();
        }
        return _instance;
    }
};
