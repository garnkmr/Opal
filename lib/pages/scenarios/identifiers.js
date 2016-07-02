module.exports = {
    CSS: {
        createScenarioButton: 'button[ng-click="createScenario($event)"]',
        createScenarioForm: 'md-dialog.create_project',
        newScenarioNameField: 'input[ng-model="pname"]',
        newScenarioNotesField: 'textarea[ng-model="pnotes"]',
        saveScenarioButton: 'button[ng-click="addProject()"]',
        saveScenarioSuccessDialog: 'div.toast-message,div[aria-label="Scenario created!"]'
    }
};
