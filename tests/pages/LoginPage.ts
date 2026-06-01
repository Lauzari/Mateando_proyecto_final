import { Page,Locator} from '@playwright/test'
import { BasePage } from './BasePage' 

export class LoginPage extends BasePage {

  readonly emailInput: Locator

  readonly passwordInput: Locator

  readonly loginButton: Locator

  constructor(page: Page) {

    super(page)

    this.emailInput = page.getByRole('textbox', {
      name: 'Email:'
    })

    this.passwordInput = page.getByRole('textbox', {
      name: 'Contraseña:'
    })

    this.loginButton = page.getByRole('button', {
      name: 'Iniciar sesión'
    })
  }

  async goto() {

    await super.goto('/login')
  }

  async login(email: string, password: string) {

    await this.emailInput.fill(email)

    await this.passwordInput.fill(password)

    await this.loginButton.click()
  }
}



/*
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
*/

  /*
  async login(email: string, password: string) {
    await this.page.fill('#email', email)
    await this.page.fill('#password', password)

    await this.page.click('button[type="submit"]')
  }
  */

/*
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
}*/