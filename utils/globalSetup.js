import { chromium } from "@playwright/test";
async function globalSetup(){
    
    const browser=await chromium.launch()
    const page=await browser.newPage()
    await page.goto("https://www.saucedemo.com/")
    await page.locator('[id="user-name"]').fill("standard_user")
    await page.locator('[id="password"]').fill("secret_sauce")
    await page.locator('[value="Login"]').click()
     await page.waitForLoadState('load')
    //adding inventorypage loc (myown test)
    const products=["Backpack","Bike","Onesie"]
    for(let prod of products){
    await page.locator('[class="inventory_item"]',{hasText:prod}).locator('button').click()
  }
  await page.locator('a[class="shopping_cart_link"]').click()
  //adding checkout and filling details as fname,lname & pcode
  await page.locator('[id="checkout"]').click()
  await page.locator('#first-name').fill("jeya")
  await page.locator('#last-name').fill("chandran")
  await page.locator('#postal-code').fill("630415")
  await page.locator('[value="Continue"]').click()

  await page.context().storageState({path:"storageState.json"})

  await browser.close()
  }
export default globalSetup;
 