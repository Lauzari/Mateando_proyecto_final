import { expect, Page , Locator} from '@playwright/test'
import { BasePage } from './BasePage'

export class CartPage extends BasePage {



   readonly increaseButton: Locator

  readonly removeButton: Locator

  readonly buyButton: Locator

  constructor(page: Page) {

    super(page)

    this.increaseButton = page.locator('text=+')

    this.removeButton = page.locator('text=Eliminar')

    this.buyButton = page.getByRole('button', {
      name: 'Comprar'
    })
  }

  async increaseQuantity() {

    await this.increaseButton.click()
  }

  async removeProduct() {

    await this.removeButton.click()
  }

  async buy() {

    await expect(this.buyButton).toBeVisible({
      timeout: 30000
    })

    await this.buyButton.click()
  }
}

  /*constructor( page: Page) {
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
}*/