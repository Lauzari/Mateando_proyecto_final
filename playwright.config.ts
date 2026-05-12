import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',

  use: {
    baseURL: 'https://mateando-tup.onrender.com',

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',
  },

  reporter: [['html', { outputFolder: 'playwright-report' }]],
})
