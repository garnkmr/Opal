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
        loginPage.isLoginFormPresent();
    })

    test.it('login into application', function () {
        loginPage.loginUsing();
    });

});
