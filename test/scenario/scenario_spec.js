require('../helper.js');

test.before(function () {
    this.timeout(mochaTimeOut);
    loginPage.visit();
    loginPage.loginDefault();
    console.log('Starting scenario test...');
});

test.describe('Scenario Page', function () {

    var scenarioName = 'Scenario_' + utils.randomNameGenerator();
    var scenarioNote = 'Note_' + utils.randomNoteGenerator(10);

    this.timeout(mochaTimeOut);

    test.it('Create New Scenario', function () {
        scenarioPage.clickCreateNewScenario();
        scenarioPage.createNewScenario(scenarioName, scenarioNote)
            .then(function (toast) {
                assert.equal(toast, true, 'Toast lost, unable to create scenario');
            });
    });
});

test.after(function () {
    basePage.logout();
});
