import { Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class HomePage extends BasePage {

  constructor(page: Page) {
    super(page)
  }

  async searchProduct(product: string) {

    await this.page.fill(
      '[placeholder="Buscar"]',
      product
    )

    await this.page.keyboard.press('Enter')
  }

  async openCategory(category: string) {

    await this.page.click(`text=${category}`)
  }

  async openCart() {

    await this.page.getByRole('link', {
      name: 'Ver carrito'
    }).click()
  }
}

/*export class HomePage {
  constructor(private page: Page) {
    this.page = page
    this.searchProduct = this.searchProduct.bind(this)
    this.openCategory = this.openCategory.bind(this)
  }

  async searchProduct(product: string) {
    await this.page.fill('[placeholder="Buscar"]', product)

    await this.page.keyboard.press('Enter')
  }

  async openCategory(category: string) {
    await this.page.click(`text=${category}`)
  }
}*/