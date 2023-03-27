// @ts-check
import { test, expect } from '@playwright/test';

test('Should navigate to Our Story page when clicking on link in footer', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simulation-2/');
  await page.click('footer a:has-text("Our Story")');
  await expect(page).toHaveURL('https://db627.github.io/mywebclass-simulation-2/our-story.html');
});
