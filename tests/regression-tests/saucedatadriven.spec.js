import {test,expect} from "@playwright/test"
import data from "../regression-tests/swagloginscenario.json"

for (const scenario of data) {

  test(`${scenario.id} - ${scenario.testName}`,{tag:"@regression"},async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    await page.locator('#user-name').fill(scenario.username);
    await page.locator('#password').fill(scenario.password);
    await page.locator('#login-button').click();

    if (scenario.expected.type === "success") {

      await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    } else {

      const errorMessage = page.locator('[data-test="error"]');
      await expect(errorMessage).toContainText(scenario.expected.message);

    }

  });

}


  /*await page.waitForLoadState('load')
 // const products=["Backpack","Bike","Onesie"]
  for(let prod of products){
    await page.locator('[class="inventory_item"]',{hasText:prod}).locator('button').click()

  }
  await page.locator('a[class="shopping_cart_link"]').click()
  await page.locator('[id="checkout"]').click()
  await page.locator('#first-name').fill(data.firstname)
  await page.locator('#last-name').fill(data.lastname)
  await page.locator('#postal-code').fill(data.postalcode)
  await page.locator('[value="Continue"]').click()

  
  const cartPrice=await page.locator('[class="cart_item"] [class="inventory_item_price"]').allTextContents()
  let total=cartPrice.map(ele=>Number(ele.split("$")[1].trim())).reduce((a,b)=>a+b,0)
  //console.log(Math.floor(total));
  console.log(total)*/
   