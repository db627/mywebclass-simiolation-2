// @ts-check
const { test, expect } = require('@playwright/test')

test('Should have MyWebClass.org title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await page.goto('https://db627.github.io/mywebclass-simulation-2/')
  await expect(page).toHaveTitle('MyWebClass.org')
})
