import { Page, Locator} from '@playwright/test'
import { BasePage } from './BasePage'

export class RegisterPage extends BasePage {

  readonly loginLink: Locator

  readonly registerLink: Locator

  readonly nameInput: Locator

  readonly lastnameInput: Locator

  readonly emailInput: Locator

  readonly phoneInput: Locator

  readonly addressInput: Locator

  readonly passwordConfirmInput: Locator

  readonly createAccountButton: Locator

  constructor(page: Page) {

    super(page)

    this.loginLink = page.getByRole('link', {
      name: 'Iniciar sesión'
    })

    this.registerLink = page.getByRole('link', {
      name: 'Registrate'
    })

    this.nameInput = page.getByRole('textbox', {
      name: 'Nombre:'
    })

    this.lastnameInput = page.getByRole('textbox', {
      name: 'Apellido:'
    })

    this.emailInput = page.getByRole('textbox', {
      name: 'Email:'
    })

    this.phoneInput = page.getByRole('textbox', {
      name: 'Telefono:'
    })

    this.addressInput = page.getByRole('textbox', {
      name: 'Dirección:'
    })

    this.passwordConfirmInput = page.locator('#passwordConfirm')

    this.createAccountButton = page.getByRole('button', {
      name: 'Crear cuenta'
    })
  }

  async goto() {

    await super.goto('/')

    await this.loginLink.click()

    await this.registerLink.click()
  }

  async registerUser(user: any) {

    await this.nameInput.fill(user.name)

    await this.lastnameInput.fill(user.lastname)

    await this.emailInput.fill(user.email)

    await this.phoneInput.fill(user.phone)

    await this.addressInput.fill(user.address)

    await this.passwordConfirmInput.fill(user.password)

    await this.createAccountButton.click()
  }
}




/*
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
  }*/
