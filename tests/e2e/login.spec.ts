import { test, expect } from '@playwright/test'

test('usuario puede iniciar sesión', async ({ page }) => {

  test.setTimeout(120000)

  await page.goto('https://mateando-tup.onrender.com/login', {
    waitUntil: 'domcontentloaded'
  })

  await expect(page).not.toHaveTitle(/Render/i, {
    timeout: 90000
  })

  await page.getByRole('textbox', { name: 'Email:' })
    .fill('laumoy@gmail.com')

  await page.getByRole('textbox', { name: 'Contraseña:' })
    .fill('1234')

  await page.getByRole('button', { name: 'Iniciar sesión' })
    .click()

  await expect(
    page.getByRole('link', { name: 'Productos' })
  ).toBeVisible({
    timeout: 30000
  })

})