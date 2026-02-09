import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    headless: true,
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
});
