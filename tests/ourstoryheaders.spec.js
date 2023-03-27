 import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simiolation-2/index.html');
  await page.getByRole('link', { name: 'Our Story' }).click();
  await page.getByRole('heading', { name: 'Values' }).click();
  await page.getByRole('heading', { name: 'Mission' }).click();
  await page.getByRole('heading', { name: 'Our Story' }).click();
  await page.getByRole('heading', { name: 'Origin' }).click();
  await page.getByRole('heading', { name: 'Navigation' }).click();
});
