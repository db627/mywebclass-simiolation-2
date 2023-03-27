import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simiolation-2/index.html');
  await page.getByRole('button', { name: 'Agree', exact: true }).click();
  await page.getByRole('combobox', { name: 'Language Translate Widget' }).selectOption('dv');
});
