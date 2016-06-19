var assert = require('assert'),
    test = require('selenium-webdriver/testing');

var config = require('../../config.json'),
    loginPage = require('../../pages/login').getInstance();

const mochaTimeOut = config.timeout; //ms

test.before(function () {
    console.log("start test -------------------------");
});

test.describe('Login Page', function () {

    this.timeout(mochaTimeOut);

    test.it('open the login form', function () {
        loginPage.visit();
        loginPage.getTitle()
            .then(function (title) {
                console.log("title-----------------------------", title);
                assert.equal(title, "Opex Analytics", "Page Title is wrong");
            });
        loginPage.isLoginFormPresent()
            .then(function (present) {
                assert.equal(present, true, "Page not loaded...");
            });
    });

    test.it('login into application', function () {
        loginPage.loginUsing(config.userName, config.passWord);
    });

});
