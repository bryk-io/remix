import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // title is properly set
  await expect(page).toHaveTitle('Remix App');
});

test('show base links', async ({ page }) => {
  await page.goto('/');

  // doc links are properly shown
  expect((await page.getByRole('link').all()).length).toBe(3);
});
