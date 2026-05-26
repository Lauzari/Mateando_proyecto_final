import { Page } from '@playwright/test'
import { BasePage } from './BasePage' 


export class LoginPage extends BasePage {
  constructor( page: Page) {
      super(page)
      this.page = page
      this.goto = this.goto.bind(this)
      this.login = this.login.bind(this)
  }

  async goto() {

    await this.page.goto('/login', {
      waitUntil: 'domcontentloaded'
    })

    await this.waitForRender()

    await this.waitExtraTime()
  }


  /*
  async login(email: string, password: string) {
    await this.page.fill('#email', email)
    await this.page.fill('#password', password)

    await this.page.click('button[type="submit"]')
  }
  */


  async login(email: string, password: string) {

    await this.page.getByRole('textbox', {
      name: 'Email:'
    }).fill(email)

    await this.page.getByRole('textbox', {
      name: 'Contraseña:'
    }).fill(password)

    await this.page.getByRole('button', {
      name: 'Iniciar sesión'
    }).click()
  }
}