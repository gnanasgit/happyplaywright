import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: './tests',
  testMatch: '**/*.spec.ts',
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        headless: process.env.CI ? true : false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        viewport: null,
        deviceScaleFactor: undefined,
        // launchOptions: {
        //   args: ['--start-maximized']
        // }
      }
    }
  ]
});