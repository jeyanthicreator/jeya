import {test,expect} from "@playwright/test"

import LoginPage from "../../POM/loginPage"
import data from "../../sauce.json"
import InventoryPage from "../../POM/inventoryPage"
import CartPage from "../../POM/cartpage"
import CheckoutStepOnePage from "../../POM/checkoutStepOne"
import CheckoutStepTwoPage from "../../POM/checkoutStepTwo"
test("validating subtotal in checkout page",{tag:["@smoke","@regression"]},async({page})=>{
  const loginPage=new LoginPage(page)
  const inventoryPage=new InventoryPage(page)
  const cartPage=new CartPage(page)
  const checkoutStepOne=new CheckoutStepOnePage(page)
  const checkoutStepTwo=new CheckoutStepTwoPage(page)
  
  await page.goto("/")
  await loginPage.fillingUsername(data.username)
  await loginPage.fillingPassword(data.password)
  await loginPage.clickingOnLoginBtn()
  await inventoryPage.waitingForPageLoading()
  await inventoryPage.addingProductsToCart(data.protoadd)
  await inventoryPage.clickingOnCartIcon()

  await cartPage.clickingOnCheckoutButton()
  await checkoutStepOne.fillingFirstname(data.firstname)
  await checkoutStepOne.fillingLastname(data.lastname)
  await checkoutStepOne.fillingPostalcode(data.postalcode)
  await checkoutStepOne.clickingContinueBtn();
  await checkoutStepTwo.waitingForPageLoading();
  const subtotal=await checkoutStepTwo.calculateSubTotal();
  console.log("Subtotal:",subtotal)
  await page.pause();
  })

  

  
  /*await page.locator('[id="checkout"]').click()
  await page.locator('#first-name').fill("jeya")
  await page.locator('#last-name').fill("chandran")
  await page.locator('#postal-code').fill('600075')
  await page.locator('[value="Continue"]').click()
  const cartPrice=await page.locator('[class="cart_item"] [class="inventory_item_price"]').allTextContents()
  let total=cartPrice.map(ele=>Number(ele.split("$")[1].trim())).reduce((a,b)=>a+b,0)
  console.log(Math.floor(total));
  console.log(total)*/
  

