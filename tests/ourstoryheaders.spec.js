// @ts-check
import { test, expect } from '@playwright/test';

test('Should click through links in footer', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simulation-2/');
  await page.click('footer a:has-text("Our Story")');
  await page.click('h2:has-text("Values")');
  await page.click('h2:has-text("Mission")');
  await page.click('h2:has-text("Our Story")');
  await page.click('h2:has-text("Origin")');
  await page.click('h2:has-text("Navigation")');
  // You can add an assertion here to check that the clicks navigated to the correct pages
});
