// @ts-check
import { test, expect } from '@playwright/test';

test('Should find Our Story link with alt text', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simulation-2/');
  const ourStoryLink = await page.$('li.nav-item.mb-2 a[alt="The story behind MyWebClass"]');
  expect(ourStoryLink).not.toBeNull();
});
