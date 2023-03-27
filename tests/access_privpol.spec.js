import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simiolation-2/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#privacyModal').getByRole('link', { name: 'Privacy Policy' }).click();
  const page1 = awaiit page1Promise;
  await page1.getByRole('button', { name: 'Agree', exact: true }).click();
});
