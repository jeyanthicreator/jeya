/*import{test,expect}from "@playwright/test"
test("verify pricerange of mobiles",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.locator('input[id="twotabsearchtextbox"]').fill("mobiles")
    await page.locator('input[id="nav-search-submit-button"]').click()
    await page.waitForLoadState("load")
    //slider handles(price loacting)
    const minPrice=page.locator('[id="p_36/range-slider_slider-item"]')
    const maxPrice=page.locator('[id="p_36/range-slider_slider-item_upper-bound-slider"]')
    //Labels showing current value
    const lowerLabel=page.locator('[class="a-form-label sf-range-slider-label sf-lower-bound-label"]')
    const upperLabel=page.locator('[class="a-form-label sf-range-slider-label sf-upper-bound-label"]')

    await maxPrice.focus();

    let maxText = await upperLabel.innerText();
    let maxAttempts=0
    while (!maxText.includes('₹25,400') && maxAttempts < 50) {
        await maxPrice.press('ArrowLeft');
        maxText = await upperLabel.innerText();
        maxAttempts++;
    }
    // ---------- SET MIN TO 10,900 ----------
    await minPrice.focus();

    let minText = await lowerLabel.innerText();
    let minAttempts = 0;

    while (!minText.includes('₹10,900') && minAttempts < 50) {
    await minPrice.press('ArrowRight');
    minText = await lowerLabel.innerText();
    minAttempts++;
}
        

await page.pause();
})*/


/*import { test, expect } from "@playwright/test";

test("verify pricerange of mobiles", async ({ page }) => {

    const minRange = 10900;
    const maxRange = 25400;

    await page.goto("https://www.amazon.in/");
    await page.locator('#twotabsearchtextbox').fill("mobiles");
    await page.locator('#nav-search-submit-button').click();
    await page.waitForLoadState("load");

    // Slider handles
    const minPrice = page.locator('#p_36\\/range-slider_slider-item');
    const maxPrice = page.locator('#p_36\\/range-slider_slider-item_upper-bound-slider');

    // Labels showing current value
    const lowerLabel = page.locator('.sf-lower-bound-label');
    const upperLabel = page.locator('.sf-upper-bound-label');

    // -------- SET MAX PRICE --------
    await maxPrice.focus();
    let maxAttempts = 0;

    while (maxAttempts < 60) {

        const maxText = await upperLabel.innerText();
        const currentMax = parseInt(maxText.replace(/[^0-9]/g, ''));

        if (currentMax <= maxRange) break;

        await maxPrice.press('ArrowLeft');
        maxAttempts++;
    }

    // -------- SET MIN PRICE --------
    await minPrice.focus();
    let minAttempts = 0;

    while (minAttempts < 60) {

        const minText = await lowerLabel.innerText();
        const currentMin = parseInt(minText.replace(/[^0-9]/g, ''));

        if (currentMin >= minRange) break;

        await minPrice.press('ArrowRight');
        minAttempts++;
    }

    //await page.waitForLoadState("networkidle");
     //await page.waitForLoadState("load");


    console.log("----- Filtered Mobile List -----");

    const products = page.locator('.s-result-item');
    const count = await products.count();

    for (let i = 0; i < count; i++) {

        const nameLocator = products.nth(i).locator('h2 span');
        const priceLocator = products.nth(i).locator('.a-price-whole');

        if (await nameLocator.count() > 0 && await priceLocator.count() > 0) {

            const name = await nameLocator.innerText();
            const priceText = await priceLocator.innerText();

            const numericPrice = parseInt(priceText.replace(/,/g, ''));

            if (numericPrice >= minRange && numericPrice <= maxRange) {

                console.log(`Mobile: ${name}`);
                console.log(`Price : ₹${numericPrice}`);
                console.log("--------------------------------");

                expect(numericPrice).toBeGreaterThanOrEqual(minRange);
                expect(numericPrice).toBeLessThanOrEqual(maxRange);
            }
        }
    }

});*/

//final code-correct way-added by jeya-added to cart func

import { test, expect } from '@playwright/test'

test.only("Verify mobiles in given Price Range", async ({ page,context }) => {

    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill('Mobile')
    await page.locator("[type='submit']").click()

    await page.waitForLoadState("load")

    const lowerbound = page.locator('[id="p_36/range-slider_slider-item_lower-bound-slider"]')
    const upperbound = page.locator('[id="p_36/range-slider_slider-item_upper-bound-slider"]')
    const lowerlabel = page.locator('[class="a-form-label sf-range-slider-label sf-lower-bound-label"]')
    const upperlabel = page.locator('[class="a-form-label sf-range-slider-label sf-upper-bound-label"]')

    // 🎚 Set Upper Bound to ₹25,400
    await upperbound.focus()
    let uppertext = await upperlabel.innerText()

    while (!uppertext.trim().includes('₹50,')) {
        await upperbound.press('ArrowLeft')
        uppertext = await upperlabel.innerText()

        if (uppertext.includes('₹49,')){
            break;
    }}

    // 🎚 Set Lower Bound to ₹10,900
    await lowerbound.focus()
    let lowertext = await lowerlabel.innerText()

    while (!lowertext.trim().includes('₹10,')) {
        await lowerbound.press('ArrowRight')
        lowertext = await lowerlabel.innerText()

        if (lowertext.includes('₹9,')){
            break;
    }
   }

    await page.waitForLoadState("load")

    const products = page.locator('div.s-search-result h2 a');
    const mobileCount = await products.count();
    console.log("====================================")
    console.log(`Total mobiles between ₹10,900 and ₹25,400: ${mobileCount}`)
    console.log("====================================")

 // 4️⃣ Click First Product (opens new tab)
    
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        products.first().click({ force: true })
    ])
    await page.locator('//span[contains(text(),"iQOO Z10 Lite 5G (Titanium Blue, 6GB RAM, 128GB St")]').click()

    await page.waitForTimeout(10000)
    

    //await newPage.waitForLoadState('load');

    // 5️⃣ Click Add to Cart (IMPORTANT: use newPage)
    //await page.locator("//div[@class='a-section a-spacing-none a-padding-none']//div[@id='addToCart_feature_div']//div//input[@id='add-to-cart-button']").click({force : true});
    //await page.waitForTimeout(10000)
   // 6️⃣ Verify Success Message
    const successMsg = await page.locator('#NATC_SMART_WAGON_CONF_MSG_SUCCESS');
    await expect(successMsg).toContainText('Added to Cart');
    await page.pause();
})


    
//await page.locator('//span[contains(text(),"iQOO Z10 Lite 5G (Titanium Blue, 6GB RAM, 128GB St")]').click()
//await page.waitForTimeout(10000)


    

   
  