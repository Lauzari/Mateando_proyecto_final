import { expect, Page } from '@playwright/test'

export async function waitForApp(page: Page) {

    await expect(page).not.toHaveTitle(/Render/i, {
    timeout: 90000
  })
  await page.waitForTimeout(10000)
}