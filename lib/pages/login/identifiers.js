module.exports = {
    CSS: {
        loginForm: 'div.login_form__container',
        usernameField: 'div.login_form__container input[type=text]',
        passwordField: 'div.login_form__container input[type=password]',
        loginButton: 'div.login_form__container button.login-btn',
        loginSuccessDialog: 'div[class="toast-message"][aria-label="You have successfully logged in"]',
        loginError: 'div.login_toastr_error'
    },
    XPATH: {
        usernameLabel: '//div[contains(@class, "login_form__container")]//descendant::label[text()= "Username"]',
        passwordLabel: '//div[contains(@class, "login_form__container")]//descendant::label[text()= "Password"]',
        forgotPaswordLink: '//div[contains(@class, "login_form__container")]//descendant::span[text()= "Forgot Password?"]'
    }
};
