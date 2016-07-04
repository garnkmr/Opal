var util = require('util');

var identifier = require('./identifiers.js'),
    seleniumDriver = require('../../driver').getInstance();

var _instance;

scenarioPage = function scenarioPage() {

    var createScenarioButton = seleniumDriver.byCss(identifier.CSS.createScenarioButton),
        createScenarioForm = seleniumDriver.byCss(identifier.CSS.createScenarioForm),
        newScenarioNameField = seleniumDriver.byCss(identifier.CSS.newScenarioNameField),
        newScenarioNotesField = seleniumDriver.byCss(identifier.CSS.newScenarioNotesField),
        saveScenarioButton = seleniumDriver.byCss(identifier.CSS.saveScenarioButton),
        saveScenarioSuccessDialog = seleniumDriver.byCss(identifier.CSS.saveScenarioSuccessDialog),
        deleteScenarioConfirmationYes = seleniumDriver.byXpath(identifier.XPATH.deleteScenarioConfirmationYes),
        deleteScenarioSuccessToast = seleniumDriver.byXpath(identifier.XPATH.deleteScenarioSuccessToast);

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
        seleniumDriver.verifyElementNotPresent(createScenarioForm);
        seleniumDriver.verifyElementPresent(saveScenarioSuccessDialog);
        console.log('Created new scenario ------------------', scenarioName);
        return seleniumDriver.verifyElementNotPresent(saveScenarioSuccessDialog);
    };

    var verifyScenarioName = function (scenarioName) {
        var existingScenarioName = seleniumDriver.byXpath(util.format(identifier.XPATH.scenarioName, scenarioName));
        return seleniumDriver.verifyElementPresent(existingScenarioName);
    };

    var deleteScenario = function (scenarioName) {
        var existingScenarioName = seleniumDriver.byXpath(util.format(identifier.XPATH.scenarioName, scenarioName));
        var deleteEntry = seleniumDriver.byXpath(util.format(identifier.XPATH.deleteScenario, scenarioName));
        seleniumDriver.clickOn(deleteEntry);
        seleniumDriver.waitUntil(deleteScenarioConfirmationYes);
        seleniumDriver.clickOn(deleteScenarioConfirmationYes);
        seleniumDriver.waitUntil(deleteScenarioSuccessToast);
        seleniumDriver.verifyElementNotPresent(deleteScenarioSuccessToast);
        return seleniumDriver.verifyElementNotPresent(existingScenarioName);
    };

    return {
        clickCreateNewScenario: clickCreateNewScenario,
        createNewScenario: createNewScenario,
        verifyScenarioName: verifyScenarioName,
        deleteScenario: deleteScenario
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
