import { Page } from '@playwright/test'
import { BasePage } from './BasePage'

export class RegisterPage extends BasePage {

  constructor(page: Page) {
    super(page)
  }

  async goto() {

    await this.page.goto('/', {
      waitUntil: 'domcontentloaded'
    })

    await this.waitForRender()

    await this.waitExtraTime()

    await this.page.getByRole('link', {
      name: 'Iniciar sesión'
    }).click()

    await this.page.getByRole('link', {
      name: 'Registrate'
    }).click()
  }

  async registerUser(user: any) {

    await this.page.getByRole('textbox', {
      name: 'Nombre:'
    }).fill(user.name)

    await this.page.getByRole('textbox', {
      name: 'Apellido:'
    }).fill(user.lastname)

    await this.page.getByRole('textbox', {
      name: 'Email:'
    }).fill(user.email)

    await this.page.getByRole('textbox', {
      name: 'Telefono:'
    }).fill(user.phone)

    await this.page.getByRole('textbox', {
      name: 'Dirección:'
    }).fill(user.address)

    await this.page.locator('#passwordConfirm')
      .fill(user.password)

    await this.page.getByRole('button', {
      name: 'Crear cuenta'
    }).click()
  }
}