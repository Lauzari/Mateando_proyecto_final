import { Page } from '@playwright/test'

import { RegisterPage } from '../pages/RegisterPage'

import { LoginPage } from '../pages/LoginPage'

import { generateEmail } from './generateEmail'

import { testUser } from './testData'

export async function createUserAndLogin(page: Page) {

  const registerPage = new RegisterPage(page)

  const loginPage = new LoginPage(page)

  const email = generateEmail()

  const user = {

    ...testUser,

    email
  }

  // REGISTRO

  await registerPage.goto()

  await registerPage.registerUser(user)

  // LOGIN

  await loginPage.goto()

  await loginPage.login(
    user.email,
    user.password
  )

  return user
}