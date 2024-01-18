import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.formulaires.service-public.fr/gf/recherche.do');
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('123');
  await page.getByRole('button', { name: 'Rechercher' }).click();
  await expect(page.getByRole('cell', { name: '15017*' })).toBeVisible();
  await expect(page.getByRole('cell', { name: '13824*' })).toBeVisible();
  await expect(page.getByRole('cell', { name: '15928*' })).toBeVisible();
  await expect(page.getByRole('cell', { name: '16277*' })).toBeVisible();
  await expect(page.getByRole('cell', { name: '16278*' })).toBeVisible();
  await expect(page.getByRole('cell', { name: '16279*' })).toBeVisible();
});