import {test,expect} from "@playwright/test"
test("validate very first login_page",{tag:"@regression"},async({page})=>{
await page.goto('/')
await page.pause()
})

test("validate adding products to the cart",{tag:"@regression"},async({page})=>{
    
    await page.goto("/inventory.html");
    await page.pause();
},{retries:2})

test("validate sauce cart page",{tag:"@smoke"},async({page})=>{

    await page.goto("/cart.html")
    await page.pause()
})

test("validate saucedemo cart1 page",{tag:"@regression"},async({page})=>{
    await page.goto('/checkout-step-one.html')
    await page.pause();

})

test.skip("validate just login page",{tag:["@smoke","@regression"]},async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.pause();
})