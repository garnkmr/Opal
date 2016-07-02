var identifier = require('./identifiers.js'),
    seleniumDriver = require('../../driver').getInstance();

var _instance;

scenarioPage = function scenarioPage() {

    var createScenarioButton = seleniumDriver.byCss(identifier.CSS.createScenarioButton),
        createScenarioForm = seleniumDriver.byCss(identifier.CSS.createScenarioForm),
        newScenarioNameField = seleniumDriver.byCss(identifier.CSS.newScenarioNameField),
        newScenarioNotesField = seleniumDriver.byCss(identifier.CSS.newScenarioNotesField),
        saveScenarioButton = seleniumDriver.byCss(identifier.CSS.saveScenarioButton),
        saveScenarioSuccessDialog = seleniumDriver.byCss(identifier.CSS.saveScenarioSuccessDialog);

    var clickCreateNewScenario = function () {
        seleniumDriver.verifyElementPresent(createScenarioButton);
        seleniumDriver.clickOn(createScenarioButton);
        seleniumDriver.waitUntil(createScenarioForm);
        seleniumDriver.verifyElementPresent(newScenarioNameField);
        seleniumDriver.verifyElementPresent(newScenarioNotesField);
        return seleniumDriver.verifyElementPresent(saveScenarioButton);
    };

    var createNewScenario = function (scenarioName, scenarioNote) {
        seleniumDriver.waitUntil(createScenarioForm);
        seleniumDriver.setValue(newScenarioNameField, scenarioName);
        seleniumDriver.setValue(newScenarioNotesField, scenarioNote);
        seleniumDriver.clickOn(saveScenarioButton);
        return seleniumDriver.verifyElementPresent(saveScenarioSuccessDialog);
    };

    return {
        clickCreateNewScenario: clickCreateNewScenario,
        createNewScenario: createNewScenario
    };
};

module.exports = {
    getInstance: function () {
        if (!_instance) {
            _instance = new scenarioPage();
        }
        return _instance;
    }
};
