import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByRole('button', { name: 'Disagree' }).click();
  await page.getByRole('link', { name: 'Read Now' }).click();
  await page.getByRole('button', { name: 'Disagree' }).click();
});
