import { test, expect } from '@playwright/test';

test('achat sur ghibli store', async ({ page }) => {
  await page.goto('https://www.donguri-sora.com/item/21502540.html');
  await expect(page.locator('h3')).toContainText('ハウルの動く城 ぬいぐるみ カルシファー L');
  await expect(page.locator('a').first()).toBeVisible();
});