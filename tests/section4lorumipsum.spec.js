import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('link', { name: 'Read Now' }).click();
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.locator('#section4 > p:nth-child(6)').click();
  await page.locator('#section4 > p:nth-child(5)').click();
  await page.locator('#section4 > p:nth-child(4)').click();
  await page.locator('#section4 > p:nth-child(3)').click();
  await page.locator('#section4 > p').first().click();
});
