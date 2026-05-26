import { Page, expect } from '@playwright/test'

export class BasePage {

  constructor(protected page: Page) {}

  async waitForRender() {

    // Render tarda mucho en despertar
    // dejamos timeout alto intencionalmente

    await expect(this.page).not.toHaveTitle(/Render/i, {
      timeout: 90000
    })
  }

  async waitExtraTime() {

    // Espera adicional necesaria por Render

    await this.page.waitForTimeout(10000)
  }
}