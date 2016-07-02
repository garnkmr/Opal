require('../helper.js');

test.before(function () {
    console.log("start test -------------------------");
});

test.describe('Login Page', function () {

    this.timeout(mochaTimeOut);

    test.it('open the login form', function () {
        loginPage.visit();
        loginPage.getTitle()
            .then(function (title) {
                assert.equal(title, "Opex Analytics", 'Page Title is wrong...');
            });
        loginPage.isLoginFormPresent()
            .then(function (present) {
                assert.equal(present, true, 'Login Page not loaded...');
            });
    });

    test.it('login into application', function () {
        loginPage.loginDefault();
        scenarioPage.addScenario();
    });
});

test.after(function () {
    this.timeout(mochaTimeOut);
    basePage.logout()
        .then(function (logoutDone) {
            assert.equal(logoutDone, true, 'Not returned to login page after logout...')
        });
});
