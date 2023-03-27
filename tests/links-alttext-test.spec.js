// @ts-check
import { test, expect } from '@playwright/test';

test('Should have alt text on links in footer', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simulation-2/');
  const links = await page.$$('footer a');
  for (const link of links) {
    const altText = await link.getAttribute('alt');
    await expect(altText).toBeTruthy();
  }
});
