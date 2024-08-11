import { CREATED_QUESTIONS_HEADING } from '@/app/ui/utils/headingsTexts';
import { test, expect } from '@playwright/test';

test('loads questions', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // loads title
  await expect(page.getByText(CREATED_QUESTIONS_HEADING)).toBeDefined();
  //loads one of the default questions
  await expect(page.getByText('Did Alena meet the requirements?')).toBeDefined();
});
