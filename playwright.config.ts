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
    name: 'chromium',
    use: {
      browserName: 'chromium',
      headless: true,
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    }
  }
]
});