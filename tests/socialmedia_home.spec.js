// @ts-check
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simulation-2/')
  await page.getByRole('link', { name: 'Linkedin' }).click();
  await page.getByRole('link', { name: 'Twitter' }).click();
  await page.getByRole('link', { name: 'Facebook' }).click();
});
