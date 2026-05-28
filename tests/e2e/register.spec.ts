import { test, expect } from '@playwright/test'

import { RegisterPage } from '../pages/RegisterPage'

import { testUser } from '../utils/testData'

import { generateEmail } from '../utils/generateEmail'



test('usuario puede registrarse', async ({ page }) => {

  test.setTimeout(120000)

 const registerPage = new RegisterPage(page)

  const email = generateEmail()

  await registerPage.goto()

  await registerPage.registerUser({

    ...testUser,

    email
  })

  await expect(
    page.getByRole('link', {
      name: 'Productos'
    })
  ).toBeVisible({
    timeout: 30000
  })


/*  const email = `test${Date.now()}@gmail.com`

  await page.goto('https://mateando-tup.onrender.com', {
    waitUntil: 'domcontentloaded'
  })

  await expect(page).not.toHaveTitle(/Render/i, {
    timeout: 90000
  })

  await page.getByRole('link', { name: 'Iniciar sesión' })
    .click()

  await page.getByRole('link', { name: 'Registrate' })
    .click()

  await page.getByRole('textbox', { name: 'Nombre:' })
    .fill('Laura')

  await page.getByRole('textbox', { name: 'Apellido:' })
    .fill('Moyano')

  await page.getByRole('textbox', { name: 'Email:' })
    .fill(email)

  await page.getByRole('textbox', { name: 'Telefono:' })
    .fill('341555666')

  await page.getByRole('textbox', { name: 'Dirección:' })
    .fill('Amenabar 1234')

  await page.locator('#passwordConfirm')
    .fill('1234')

  await page.getByRole('button', { name: 'Crear cuenta' })
    .click()
    await expect(
  page.getByRole('link', { name: 'Productos' })
).toBeVisible({
  timeout: 30000
})

await expect(
  page.getByRole('link', { name: 'Productos' })
).toBeVisible({
  timeout: 30000
})*/

})