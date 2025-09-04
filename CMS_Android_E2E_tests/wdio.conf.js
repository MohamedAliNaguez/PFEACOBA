exports.config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [],

    maxInstances: 1, // safer for Android emulators

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

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [
        ['appium', {
            command: 'C:\\Users\\Daly\\AppData\\Roaming\\npm\\appium.cmd',
            args: {
                relaxedSecurity: true,
                logLevel: 'info',
                port: 4723
            }
        }]
    ],

    framework: 'mocha',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    afterTest: function(test, context, { error }) {
        if (error) {
            browser.takeScreenshot();
        }
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
