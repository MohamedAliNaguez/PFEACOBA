exports.config = {
    //
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    //
    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],

    //
    // ============
    // Capabilities
    // ============
    maxInstances: 1, // Android emulator usually supports 1 instance at a time
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:platformVersion': '15',
        'appium:appPackage': 'com.acoba.cms.id.stg',
        'appium:appActivity': 'com.acoba.cms.id.MainActivity',
        'appium:noReset': true,
        'appium:autoGrantPermissions': true
    }],

    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    //
    // =================
    // Services
    // =================
    services: [
        ['appium', {
            command: 'C:\\Users\\Daly\\AppData\\Roaming\\npm\\appium.cmd', // full path to Appium on Windows
            args: {
                relaxedSecurity: true,
                logLevel: 'info',
                drivers: 'uiautomator2' // explicitly load UiAutomator2 driver
            }
        }]
    ],

    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            useCucumberStepReporter: false
        }]
    ],

    //
    // Capture screenshot on failure
    afterTest: function(test, context, { error }) {
        if (error) {
            browser.takeScreenshot();
        }
    },

    //
    // Mocha options
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
