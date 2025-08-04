import { test, expect } from '@playwright/test';
import { login, TEST_EMAILD, TEST_PASSWORD } from '../utils';

test('Login and save session as dis', async ({ page }) => {
  await page.goto('https://dashboard.cam2drive-bt.com/login');

  await login(page, TEST_EMAILD, TEST_PASSWORD);

   await page.waitForSelector('text=Installers', { timeout: 300000 });

  await expect(page.getByText('Installers', { exact: true })).toBeVisible();

  await page.context().storageState({ path: 'authd.json' });
});