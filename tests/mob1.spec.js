import { test, expect } from '@playwright/test';

test('List Samsung mobiles descriptions', async ({ page }) => {

  // 1) Go to Amazon
  await page.goto('https://www.amazon.in');

  // 2) Search mobiles
  await page.locator('input[name="field-keywords"]').fill('mobiles');
  await page.locator('#nav-search-submit-button').click();

  // Wait for search results
  await page.waitForSelector('#search');

  // 3) Click Samsung brand filter
  await page.locator('label:has-text("Samsung")').click();

  // ✅ Wait for filtered product titles instead of networkidle
  const products = page.locator('span.a-size-medium.a-color-base.a-text-normal');
  await products.first().waitFor();

  const count = await products.count();
  console.log("Total Samsung Products Found:", count);

  let resultNumber = 1;

  for (let i = 0; i < count; i++) {
    const text = await products.nth(i).textContent();
    console.log(`Result ${resultNumber}: ${text.trim()}`);
    resultNumber++;
  }

});
