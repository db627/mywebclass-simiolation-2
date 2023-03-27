import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simulation-2/')
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('button', { name: 'Read Now' }).click();
  await page.getByRole('link', { name: 'Section 4' }).click();
});
