import { Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class ProductPage extends BasePage {
  constructor( page: Page) {
    super(page)
    this.selectProduct = this.selectProduct.bind(this)
    this.addToCart = this.addToCart.bind(this)
    
  }

  async selectProduct(product: string) {
    await this.page.click(`text=${product}`)
  }

  async addToCart(index = 0) {

    await this.page.getByRole('button', {
      name: 'Agregar al carrito'
    }).nth(index).click()
  }
}