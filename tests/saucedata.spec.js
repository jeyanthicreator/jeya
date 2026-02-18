import {test,expect} from "@playwright/test"
import data from "../TestData/sauce.json"

test("validating subtotal in checkout page",async({page})=>{
  await page.goto("https://www.saucedemo.com/")
  await page.locator('[id="user-name"]').fill(data.username)
  await page.locator('[id="password"]').fill(data.password)
  await page.locator('[value="Login"]').click()
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
   await page.pause();


})