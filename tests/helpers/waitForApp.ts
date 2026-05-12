import { Page } from '@playwright/test'

export async function waitForApp(page: Page) {
  await page.waitForTimeout(10000)
}