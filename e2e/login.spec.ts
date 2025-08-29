import { test, expect } from '@playwright/test';

test('Admin login page is accessible', async ({ page }) => {
  await page.goto('/login');
  await expect(page.locator('text=Admin Login')).toBeVisible();
  await expect(page.locator('input[type="email"]')).toBeVisible();
  await expect(page.locator('input[type="password"]')).toBeVisible();
});