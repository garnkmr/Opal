# Test Automation Framework

### Run:

To  run all the spec files within the test folder.

```
$ npm run test_all 
```

Or

```
$ mocha
```

To run individual files enter command mocha followed by path to test spec file.

```
$ mocha test/login/login_spec.js
```

### Get:

```sh
git clone https://github.com/garnkmr/Opal.git
```

### Folder Structure:

- lib/config.json has some basic configuration settings
- lib/driver contains the chromedriver and selenium custom wrapper commands in index,js
- lib/pages contains the pageobjects modelled after the webpages in the webapp
- test folder contains the test script files
- helper.js has the base files required and can be used globally.
- mocha.opts specify opts path

### Selenium Webdriver

WebDriver is a tool for automating web application testing, and in particular to verify that they work as expected

https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs

```sh
$ npm install selenium-webdriver
```

### Chromedriver

ChromeDriver is a standalone server which implements WebDriver's wire protocol for Chromium

http://chromedriver.storage.googleapis.com/index.html?path=2.22/

Download and place it in lib/driver

### Mocha

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.

https://mochajs.org/

```sh
$ npm install -g mocha
```
