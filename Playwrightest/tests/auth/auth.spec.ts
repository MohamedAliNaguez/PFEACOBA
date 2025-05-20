import { test, expect } from '@playwright/test';
import { login,  TEST_EMAIL, TEST_PASSWORD } from '../utils';

test('Login test', async ({ page }) => {
  await login(page, TEST_EMAIL, TEST_PASSWORD);
  await expect(page.getByRole('link', { name: 'My Customers' })).toBeVisible();
});