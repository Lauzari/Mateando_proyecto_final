import { expect, Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class CartPage extends BasePage {
  constructor( page: Page) {
    super(page)
  }

  async increaseQuantity() {
    await this.page.click('text=+')
  }

  async removeProduct() {
    await this.page.click('text=Eliminar')
  }

   async buy() {

    const buyButton = this.page.getByRole('button', {
      name: 'Comprar'
    })

    await expect(buyButton).toBeVisible({
      timeout: 30000
    })

    await buyButton.click()
  }
}