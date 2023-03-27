import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simiolation-2/');
  await page.getByRole('button').nth(2).click();
  await page.getByRole('link', { name: 'Read Now' }).click();
  await page.getByRole('button').nth(1).click();
  await page.getByRole('link', { name: 'MyWebClass.org' }).click();
  await page.getByRole('button').nth(2).click();
});
