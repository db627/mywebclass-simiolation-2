import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simiolation-2/');
  await page.getByRole('heading', { name: 'Privacy Policy' }).click();
  await page.getByText('Please read our Privacy Policy carefully before using our website.').click();
  await page.getByText('Do you agree to our Privacy Policy?').click();
});
