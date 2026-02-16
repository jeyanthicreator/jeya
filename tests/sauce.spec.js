import{test,expect} from"@playwright/test"
test("validate items subtotal in saucesite",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.locator('[id="user-name"]').fill("standard_user")
    await page.locator('[id="password"]').fill("secret_sauce")
    await page.locator('[value="Login"]').click()
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")

    await page.locator('#add-to-cart-sauce-labs-backpack').click()
    await page.locator('#add-to-cart-sauce-labs-bike-light').click()
    await page.locator('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    await page.locator('.shopping_cart_badge').click()
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html")
    await page.locator('#checkout').click()
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html")
    await page.locator('#first-name').fill("jeya")
    await page.locator('#last-name').fill("chandran")
    await page.locator('#postal-code').fill("600075")
    await page.locator('[value="Continue"]').click()
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-two.html")
    const price =page.locator('[class="inventory_item_price"]')
    const count=await price.count()
    let total=0;
    for(let i=0;i<count;i++){
    const priceContent=await price.nth(i).textContent()
    const prices=Number(priceContent.replace('$', ''));
    total+=prices;
    }
    console.log(`Subtotal is: $${total}`)
    const totalText=await page.locator(".summary_subtotal_label").textContent()
    const totalValue=Number(totalText.split("$")[1])
    expect(total).toBe(totalValue)
    await page.locator('#finish').click()
    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html")
    const successMessage=page.locator('div h2')
    await expect(successMessage).toContainText("Thank you")
    await page.pause()
})


