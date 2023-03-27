import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('link', { name: 'Privacy Policy' }).click();
  await page.getByRole('link', { name: 'Our Story' }).click();
  await page.goto('https://db627.github.io/mywebclass-simiolation-2/privacy.html');
  await page.goto('https://db627.github.io/mywebclass-simiolation-2/story.html');
  await page.goto('https://db627.github.io/mywebclass-simiolation-2/index.html');
  await page.getByRole('button', { name: 'Read Now' }).click();
});