import { test, expect } from '@playwright/test';

test('List Samsung mobiles descriptions',{tag:"@smoke"},async ({ page }) => {

  // 1) Go to Amazon
  await page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded' });

  // 2) Search mobiles
  await page.locator('#twotabsearchtextbox').fill('mobiles');
  await page.locator('#nav-search-submit-button').click();

  // 3) Wait for search results container
  await page.waitForSelector('div.s-main-slot');

  // 4) Click Samsung brand filter (more stable XPath)
  const samsungFilter = page.locator('//span[text()="Samsung"]/ancestor::a');

  await samsungFilter.first().click();

  // 5) Wait for results to refresh
  await page.waitForSelector('div.s-main-slot');

  // 6) Get product titles
  const products = page.locator('h2 span');

  await expect(products.first()).toBeVisible();

  const count = await products.count();
  console.log("Total Samsung Products Found:", count);

  for (let i = 0; i < count; i++) {
    const text = await products.nth(i).textContent();
    console.log(`Result ${i + 1}: ${text?.trim()}`);
  }

});

/*import { test, expect } from '@playwright/test';

test('List Samsung mobiles full descriptions', async ({ page }) => {

  await page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded' });

  // Search mobiles
  await page.locator('#twotabsearchtextbox').fill('mobiles');
  await page.locator('#nav-search-submit-button').click();

  // Wait for results
  await page.waitForSelector('div.s-main-slot');

  // Click Samsung filter
  await page.locator('//span[text()="Samsung"]/ancestor::a').first().click();

  // Wait for filtered results
  await page.waitForSelector('div.s-main-slot');

  // Get all product cards
  const products = page.locator('div.s-main-slot div[data-component-type="s-search-result"]');

  const count = await products.count();
  console.log("Total Samsung Products Found:", count);

  for (let i = 0; i < count; i++) {

    const product = products.nth(i);

    // Product Title
    const title = await product.locator('h2 span').textContent();

    // Store Name (if available)
    const store = await product.locator('h2 + div a').first().textContent().catch(() => '');

    console.log(`\nResult ${i + 1}:`);
    console.log(title?.trim());

    if (store) {
      console.log(store.trim());
    }
  }
});*/

/*import {test,expect} from '@playwright/test';

test('Print all Samsung mobile titles', async ({ page }) => {

  // Go to Amazon
  await page.goto('https://www.amazon.in', { waitUntil: 'domcontentloaded' });

  // Search mobiles
  await page.locator('#twotabsearchtextbox').fill('mobiles');
  await page.locator('#nav-search-submit-button').click();

  // Wait for results
  await page.waitForSelector('div.s-main-slot');

  // Click Samsung brand filter
  await page.locator('//span[text()="Samsung"]/ancestor::a').first().click();

  // Wait for filtered results to load
  await page.waitForSelector('div.s-main-slot');

  // Locate all Samsung product titles
  const titles = page.locator('div[data-component-type="s-search-result"] h2 span');

  const count = await titles.count();
  console.log(`Total Samsung Mobiles Found: ${count}`);

  for (let i = 0; i < count; i++) {

    const titleText = await titles.nth(i).innerText();

    console.log(`\nResult ${i + 1}:`);
    console.log(titleText.trim());
  }

});*/



    

