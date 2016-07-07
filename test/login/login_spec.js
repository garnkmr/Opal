require('../helper.js');

test.before(function () {
    console.log("start test -------------------------");
});

test.describe('Login Page', function () {

    test.it('open the login form', function () {
        loginPage.visit();
        expect(loginPage.getTitle()).to.eventually.equal('Opex Analytics');
        expect(loginPage.isLoginFormPresent()).to.eventually.equal(true);
    });

    test.it('login into application', function () {
        loginPage.loginDefault();
    });
});

test.after(function () {
    expect(basePage.logout()).to.eventually.equal(true);
});
