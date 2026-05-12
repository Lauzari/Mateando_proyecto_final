import { Page } from '@playwright/test'

export class HomePage {
  constructor(private page: Page) {}

  async searchProduct(product: string) {
    await this.page.fill('[placeholder="Buscar"]', product)

    await this.page.keyboard.press('Enter')
  }

  async openCategory(category: string) {
    await this.page.click(`text=${category}`)
  }
}