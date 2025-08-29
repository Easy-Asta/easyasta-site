import { test, expect } from '@playwright/test';

test('Home page loads and displays tagline', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=Your Simple Gateway')).toBeVisible();
});