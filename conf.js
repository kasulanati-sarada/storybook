/* eslint-env protractor, jasmine */

// Enable ES6 for Protractor
// require('babel-register');

require('@babel/register');
require('@babel/polyfill');
const failFast = require('protractor-fail-fast');
const e2eSpecPath = './e2e/specs';
// const suiteType = require('yargs').argv.suite;//?
// Enable fail fast if:
// 1: The script was executed with protractor flake
// 2: The script is in its 1st or 2nd test iteration
// 3: The DISABLE_PROTRACTOR_FAIL_FAST environment variable is NOT set to 'true'
// 4: The ENABLE_FAIL_FAST_ALL_RUNS environment variable is set to 'true'
const enableFailFastPlugin = process.env.ENABLE_FAIL_FAST_ALL_RUNS === 'true' &&
    process.env.DISABLE_PROTRACTOR_FAIL_FAST !== 'true';
// let currentSpec = '';
const e2eConfig = {
    SELENIUM_PROMISE_MANAGER: false,
    framework: 'jasmine2',
    // Using ChromeDriver directly... this has highest priority
    directConnect: true,
    // baseUrl: 'http://localhost:6006/?path=/story/welcome--to-storybook',
    baseUrl: '',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--test-type=browser', 'disable-infobars'],
        },
        platform: 'ANY',
        version: 'ANY',
    },
    randomizeTests: false,
    // Entire suites are executed when there is no command line argument
    // Specific suites are executed if those are provided via command line argument
    // By default the specs within a suite will be executed in alphabetical order
    suites: {
        main: `${e2eSpecPath}/main/*.spec.js`,
        debug: `${e2eSpecPath}/debug/*.spec.js`
    },
    // This function is called only once during current test execution(Not before each browser instance. onPrepare is called
    // before each browser instance)
    beforeLaunch() {
    },
    onPrepare: async () => {
        // Add jasmine spec reporter
        browser.ignoreSynchronization = true;
        const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(
            new SpecReporter({
                spec: {
                    displayErrorMessages: true,
                    displayStacktrace: true,
                    displayDuration: true,
                },
                summary: {
                    displayErrorMessages: false,
                    displayStacktrace: false,
                    displayFailed: false,
                    displayPending: false,
                    displayDuration: true
                },
            })
        );
        // set true for non-angular app testing
        await browser.waitForAngularEnabled(false);
        await browser.waitForAngular();
        await browser.sleep(500);
        // global.since is namespaced for use by jasmine custom message
        // global.since = require('jasmine2-custom-message');
        // const config = await browser.getProcessedConfig();

        const pageBuilder = require('./e2e/pageObjects/pageBuilder');

        browser.pageObj = pageBuilder();
        global.window = global;
        window.addEventListener = () => { };
        window.requestAnimationFrame = () => {
            throw new Error('requestAnimationFrame is not supported in Node');
        };
    },
    onComplete: async () => {
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 300000,
        print: () => { }         // Disable dot reporter
    }
};
// If the user specifies `DISABLE_SCREENSHOTS_PLUGIN=true` as an environment variable/value,
// then lets not include the screenshoter plugin
// This section is executed on each browser instance
if (enableFailFastPlugin) {
    e2eConfig.plugins.push(
        failFast.init({ abortAllShards: false })
    );
    e2eConfig.onCleanUp = () => {
        failFast.clean();
    };
    // e2eConfig.afterLaunch = () => {
    // };
}
exports.config = e2eConfig;
