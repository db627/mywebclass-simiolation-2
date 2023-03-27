import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.getByText('Our mission is to create a community of people committed to helping students of ').click();
  await page.getByText('People: We value the people in our community and believe that every student and ').click();
  await page.getByText('Learning: We believe that learning is a lifelong process and that everyone has s').click();
  await page.getByText('Efficiency: We recognize that time is a valuable resource, and we strive to make').click();
  await page.getByText('Dependability: We understand the importance of being reliable and consistent. We').click();
  await page.getByText('Each of these values supports our mission by creating a welcoming and supportive').click();
  await page.getByText('Mywebclass.org was founded in 2023 by Keith Williams, a University Lecturer at N').click();
  await page.getByText('Thank you for your interest in mywebclass.org. Together, we can create a communi').click();
});
