// @ts-check
const { test, expect } = require('@playwright/test')

test('Click Read Now link', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simulation-2/')

  // Click on the "Read Now" link.
  await page.waitForSelector('a#readnowbutton');
  await page.getByRole('link', { name: 'Read Now' }).click();

  // Wait for the page to load and check if the URL contains "content.html".
  await page.waitForLoadState()
  expect(page.url()).toContain('content.html')
})
