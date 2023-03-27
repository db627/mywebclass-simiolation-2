import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('pw8@njit.edu');
  await page.getByRole('button', { name: 'Subscribe' }).click();
});
