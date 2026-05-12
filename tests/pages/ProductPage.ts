import { Page } from '@playwright/test'

export class ProductPage {
  constructor(private page: Page) {}

  async selectSize(size: string) {
    await this.page.click(`text=${size}`)
  }

  async addToCart() {
    await this.page.click('text=Agregar al carrito')
  }
}