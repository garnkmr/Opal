require('../helper.js');

test.before(function () {
    loginPage.visit();
    loginPage.loginDefault();
    console.log('Starting scenario test...');
});

test.describe('Scenario Page', function () {

    var scenarioName = 'Scenario_' + utils.randomNameGenerator();
    var scenarioNote = 'Note_' + utils.randomNoteGenerator(10);

    test.it('Create New Scenario', function () {
        scenarioPage.clickCreateNewScenario();
        scenarioPage.createNewScenario(scenarioName, scenarioNote);
        scenarioPage.verifyScenarioName(scenarioName);
    });

    test.it('Delete a Scenario', function () {
        scenarioPage.deleteScenario(scenarioName);
    });
});

test.after(function () {
    basePage.logout();
});
