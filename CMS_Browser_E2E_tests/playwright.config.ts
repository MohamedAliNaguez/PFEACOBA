import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  timeout: 50000,
  reporter: [
    ['line'],
    ['allure-playwright', { 
      outputFolder: require('path').resolve(__dirname, '../../allure-results'),
      detail: true,
      suiteTitle: true
    }]
  ],
  expect: {
    timeout: 30000 
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
