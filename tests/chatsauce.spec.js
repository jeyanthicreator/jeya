import { test, expect } from "@playwright/test";

/*test("Remove item and validate updated subtotal", async ({ page }) => {

  // 1️⃣ Login
  await page.goto("https://www.saucedemo.com/");
  await page.locator('#user-name').fill("standard_user");
  await page.locator('#password').fill("secret_sauce");
  await page.locator('#login-button').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

  // 2️⃣ Add 3 products
  await page.locator('#add-to-cart-sauce-labs-backpack').click();
  await page.locator('#add-to-cart-sauce-labs-bike-light').click();
  await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click();

  // 3️⃣ Open cart
  await page.locator('.shopping_cart_link').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

  // 4️⃣ Remove one product
  await page.locator('#remove-sauce-labs-bike-light').click();

  // 5️⃣ Validate only 2 items remain in cart
  const remainingItems = await page.locator('.cart_item').count();
  expect(remainingItems).toBe(2);

  // 6️⃣ Proceed to checkout
  await page.locator('#checkout').click();
  await page.locator('#first-name').fill("jeya");
  await page.locator('#last-name').fill("chandran");
  await page.locator('#postal-code').fill("600075");
  await page.locator('#continue').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html");

  // 7️⃣ Calculate subtotal manually for remaining items
  const prices = page.locator('.inventory_item_price');
  const count = await prices.count();

  let calculatedTotal = 0;

  for (let i = 0; i < count; i++) {
    const priceText = await prices.nth(i).textContent();
    const priceValue = Number(priceText.replace(/[^0-9.]/g, ''));
    calculatedTotal += priceValue;
  }

  console.log(`Calculated Subtotal: $${calculatedTotal}`);

  // 8️⃣ Get subtotal displayed by application
  const subtotalText = await page.locator('.summary_subtotal_label').textContent();
  const uiSubtotal = Number(subtotalText.replace(/[^0-9.]/g, ''));

  console.log(`UI Subtotal: $${uiSubtotal}`);

  // 9️⃣ Compare calculated subtotal with UI subtotal
  expect(calculatedTotal).toBe(uiSubtotal);

  // 🔟 Finish order
  await page.locator('#finish').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");

  // 1️⃣1️⃣ Validate success message
  await expect(page.locator('.complete-header')).toContainText("Thank you");
});*/



test("verifying subtotal from saucesite", async({page})=>{
    
    await page.goto("https://www.saucedemo.com/");
    await page.locator('#user-name').fill('visual_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    await expect (page.getByText('Products')).toBeVisible();
    await page.locator('.product_sort_container').selectOption("Price (low to high)");

    await page.locator('#add-to-cart-sauce-labs-bike-light').click()
    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await page.locator('.shopping_cart_link').click()

    await expect (page.getByText('Your Cart')).toBeVisible();

    await page.locator('#checkout').click()

    await page.locator('#first-name').fill('Jake')
    await page.locator('#last-name').fill('sully')
    await page.locator('#postal-code').fill('626101')
    await page.locator('#continue').click();
    //to get prices from items
const itemprices=await page.locator('.inventory_item_price').allTextContents();
// to get total 
let sum=0;
for (let prices of itemprices){
    
    sum+=Number(prices.replace('$',''));
}
console.log(sum);
//to   get   displayed  item_total 
let a=await page.locator('.summary_subtotal_label').textContent()

const itemtotal=Number(a.replace('Item total: $',''));
console.log(itemtotal);

//assertion to check total
await expect(sum).toBe(itemtotal);

//finish 

await page.locator('//button[@data-test="finish"]').click();

 const process=await expect (page.locator("//h2[text()='Thank you for your order!']")).toBeVisible();
  
     console.log("Order Placed Successfully");
    

})
