var assert = require('assert');
var test = require('selenium-webdriver/testing');

var ralphSaysPage = require('../../pages/login').getInstance();

const mochaTimeOut = 1130000; //ms

test.before(function () {
    console.log("start test -------------------------");
});

test.describe('Ralph Says', function () {

    this.timeout(mochaTimeOut);

    test.it('shows a quote container', function () {
        ralphSaysPage.visit()
        ralphSaysPage.quoteContainerPresent()
            .then(function (present) {
                assert.equal(present, true, "Quote container not displayed");
            });
    })
});








//test.after(function () {
//    driver.quit();
//});
