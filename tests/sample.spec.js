import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.getByRole('link', { name: 'Kurtis, Tunics & Tops' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Janasya Women\'s Orange Pure Cotton Floral Printed Flared Tunic Janasya Women\'s' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'M' }).click();
  await page.pause();
});