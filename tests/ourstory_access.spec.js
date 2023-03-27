import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://db627.github.io/mywebclass-simiolation-2/story.html');
  await page.getByRole('link', { name: 'MyWebClass.org' }).click();
  await page.getByRole('link', { name: 'MyWebClass.org' }).click();
  await page.getByRole('link', { name: 'Our Story' }).click();
});
