const { test, expect } = require('@playwright/test');

test('Check lead paragraph styles', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://db627.github.io/mywebclass-simiolation-2/');

  // Locate the lead paragraph element
  const leadParagraph = await page.locator('.lead-paragraph');

  // Check if the lead paragraph exists
  expect(await leadParagraph.count()).toBe(1);

  // Get the computed styles for the lead paragraph
  const leadParagraphStyles = await leadParagraph.computedStyle([
    'font-size',
    'font-weight',
    'color'
  ]);

  // Validate the lead paragraph styles
  expect(leadParagraphStyles['font-size']).toBe('24px');
  expect(leadParagraphStyles['font-weight']).toBe('bold');
  expect(leadParagraphStyles['color']).toBe('rgb(0, 0, 255)');
});

