import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
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
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        viewport: null,
        deviceScaleFactor: undefined,
        launchOptions: {
          args: ['--start-maximized']
        }
      }
    }
  ]
});