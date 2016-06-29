var identifier = require('./identifiers.js'),
    seleniumDriver = require('../../driver').getInstance();

var _instance;

scenarioPage = function scenarioPage() {

    var addScenarioButton = seleniumDriver.byCss(identifier.CSS.addScenarioButton),
        saveScenarioButton = seleniumDriver.byCss(identifier.CSS.saveScenarioButton);

    var addScenario = function () {
        return seleniumDriver.clickOn(addScenarioButton);
    };

    var clickSave = function () {
        return seleniumDriver.clickOn(saveScenarioButton);
    };

    return {
        addScenario: addScenario,
        clickSave: clickSave
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
