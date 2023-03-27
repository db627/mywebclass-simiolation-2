// @ts-check
import { test, expect } from '@playwright/test';

test('Should have keywords in the head section', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simulation-2/');
  const head = await page.$('head');
  const keywords = await head.$eval('meta[name="keywords"]', el => el.content);
  expect(keywords).toContain('My Webclass Homepage');
});
