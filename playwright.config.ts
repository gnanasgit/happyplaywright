import {defineConfig, devices } from "playwright/test";
export default defineConfig({

    projects: [
        {
            name: 'Google Chrome',
            use: {
                ...devices['Desktop Chrome'],
                channel: 'chrome',
                headless: false,
                // IMPORTANT — allow window to control size
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
})