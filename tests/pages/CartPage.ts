import { Page } from '@playwright/test'

export class CartPage {
  constructor(private page: Page) {}

  async increaseQuantity() {
    await this.page.click('text=+')
  }

  async removeProduct() {
    await this.page.click('text=Eliminar')
  }
}