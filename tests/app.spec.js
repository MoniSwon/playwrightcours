const { test, expect } = require('@playwright/test');

test('local app', async ({ page }) => {
    await page.goto('http://localhost:3000');
  
    await page.getByRole('link', { name: 'Learn React' }).click();
  
    //On obtient la page de la doc de React en cliquant sur le lien
    await expect(page).toHaveTitle(/React/);
  });