import { test, expect } from '@playwright/test'

test('usuario puede comprar productos', async ({ page }) => {

  test.setTimeout(120000)

  await page.goto('https://mateando-tup.onrender.com', {
    waitUntil: 'domcontentloaded'
  })

  await expect(page).not.toHaveTitle(/Render/i, {
    timeout: 90000
  })

  // LOGIN
  await page.getByRole('link', { name: 'Iniciar sesión' })
    .click()

  await page.getByRole('textbox', { name: 'Email:' })
    .fill('laumoy@gmail.com')

  await page.getByRole('textbox', { name: 'Contraseña:' })
    .fill('1234')

  await page.getByRole('button', { name: 'Iniciar sesión' })
    .click()

  // AGREGAR PRODUCTO
  await page.getByRole('button', {
    name: 'Agregar al carrito'
  }).nth(1).click()

  // VER CARRITO
  await page.getByRole('link', {
    name: 'Ver carrito'
  }).click()

  // COMPRAR
  const buyButton = page.getByRole('button', {
    name: 'Comprar'
  })

  await expect(buyButton).toBeVisible({
    timeout: 30000
  })

  await buyButton.click()

})