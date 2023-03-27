// @ts-check
import { test, expect } from '@playwright/test';

test('Should fill in email form in footer', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simulation-2/');
  await page.fill('[name="EMAIL"]', 'pw8@njit.edu');
  await page.click('[name="subscribe"]');
  // You can add an assertion here to check that the form submission was successful
});
