module.exports = {
    CSS: {
        createScenarioButton: 'button[ng-click="createScenario($event)"]',
        createScenarioForm: 'md-dialog.create_project',
        newScenarioNameField: 'input[ng-model="pname"]',
        newScenarioNotesField: 'textarea[ng-model="pnotes"]',
        saveScenarioButton: 'button[ng-click="addProject()"]',
        saveScenarioSuccessDialog: 'div.toast-message,div[aria-label="Scenario created!"]'
    },
    XPATH: {
        scenarioName: '//*[contains(@class, "landing_scenario__name")][div[text()="%s"]]',
        deleteScenario: '//div[text()="%s"]//parent::div[contains(@class, "landing_scenario")]//following-sibling::*[contains(@class, "landing_scenario__actions")]//descendant::*[contains(@ng-click, "deleteProject($event, project.id, $index)")]',
        deleteScenarioConfirmationYes: '//md-dialog[contains(@aria-label, "Are you sure ...")]//descendant::*[contains(@ng-click, "dialog.hide()")]',
        deleteScenarioSuccessToast: '//div[contains(@id, "toast-container")]//descendant::*[contains(text(), "The project has been successfully removed.")]'
    }
};
