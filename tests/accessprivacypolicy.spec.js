// @ts-check
import { test, expect } from '@playwright/test';

test('Should find Privacy Policyh link with alt text', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simulation-2/');
  const ourPrivacyPolicy = await page.$('li.nav-item.mb-2 a[alt="MyWebClass Privacy Policy"]');
  expect(ourPrivacyPolicy).not.toBeNull();
});
