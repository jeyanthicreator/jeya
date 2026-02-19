/*import{test,expect} from "@playwright/test"
test("Listout mobiles in the given priceRange",async({page})=>
{
    await page.goto("https://www.amazon.in/")
    await page.locator('[id="twotabsearchtextbox"]').fill("mobiles")
    await page.locator('[class="nav-search-submit nav-sprite"]').click()
    await page.waitForLoadState('load')
    const minBound= page.locator('[id="p_36/range-slider_slider-item_lower-bound-slider"]'
    const maxBound= page.locator('[aria-label="Maximum price"]')  
    const minLabel=page.locator('[class="a-form-label sf-range-slider-label sf-lower-bound-label"]')
    const maxLabel=page.locator('[class="a-form-label sf-range-slider-label sf-upper-bound-label"]')

    await minBound.focus()
    let minText=await minLabel.innerText()

    await maxBound.focus()
    let maxText=await maxLabel.innerText()

    )
})*/
//code-success

/*import { test, expect } from '@playwright/test';

test.only("Amazon Price Slider using Mouse Drag", async ({ page }) => {

    await page.goto("https://www.amazon.in/");
    await page.locator('#twotabsearchtextbox').fill("mobiles");
    await page.locator('#nav-search-submit-button').click();

    await page.waitForLoadState("networkidle");

    const lowerSlider = page.locator('#p_36\\/range-slider_slider-item_lower-bound-slider');
    const upperSlider = page.locator('#p_36\\/range-slider_slider-item_upper-bound-slider');

    const lowerLabel = page.locator('.sf-lower-bound-label');
    const upperLabel = page.locator('.sf-upper-bound-label');

    // ----------------------------
    // 🔹 MOVE LOWER SLIDER TO ₹10,900
    // ----------------------------

    const lowerBox = await lowerSlider.boundingBox();

    if (lowerBox) {

        await page.mouse.move(
            lowerBox.x + lowerBox.width / 2,
            lowerBox.y + lowerBox.height / 2
        );

        await page.mouse.down();

        let lowerText = await lowerLabel.innerText();

        while (!lowerText.includes('₹10,9')) {

            await page.mouse.move(lowerBox.x + lowerBox.width / 2 + 5, lowerBox.y + lowerBox.height / 2);
            lowerText = await lowerLabel.innerText();
        }

        await page.mouse.up();
    }

    // ----------------------------
    // 🔹 MOVE UPPER SLIDER TO ₹25,400
    // ----------------------------

    const upperBox = await upperSlider.boundingBox();

    if (upperBox) {

        await page.mouse.move(
            upperBox.x + upperBox.width / 2,
            upperBox.y + upperBox.height / 2
        );

        await page.mouse.down();

        let upperText = await upperLabel.innerText();

        while (!upperText.includes('₹25,4')) {

            await page.mouse.move(upperBox.x + upperBox.width / 2 - 5, upperBox.y + upperBox.height / 2);
            upperText = await upperLabel.innerText();
        }

        await page.mouse.up();
    }

    await page.waitForLoadState("networkidle");

    // Count filtered products
    const products = page.locator('.s-result-item[data-component-type="s-search-result"]');
    const totalCount = await products.count();

    console.log("=================================");
    console.log(`Total mobiles between ₹10,900 - ₹25,400: ${totalCount}`);
    console.log("=================================");

});*/
//chatgpt_code
/*import { test } from '@playwright/test';

test.only("Amazon Price Slider Drag Proper", async ({ page }) => {

    await page.goto("https://www.amazon.in/");
    await page.locator('#twotabsearchtextbox').fill("mobiles");
    await page.locator('#nav-search-submit-button').click();
    await page.waitForLoadState("networkidle");

    const lowerSlider = page.locator('#p_36\\/range-slider_slider-item_lower-bound-slider');
    const upperSlider = page.locator('#p_36\\/range-slider_slider-item_upper-bound-slider');

    const lowerLabel = page.locator('.sf-lower-bound-label');
    const upperLabel = page.locator('.sf-upper-bound-label');

    // -----------------------------
    // 🎯 SET LOWER TO ₹10,900
    // -----------------------------
    const lowerBox = await lowerSlider.boundingBox();

    if (lowerBox) {

        let currentX = lowerBox.x + lowerBox.width / 2;
        const y = lowerBox.y + lowerBox.height / 2;

        await page.mouse.move(currentX, y);
        await page.mouse.down();

        let lowerText = await lowerLabel.innerText();
        let safety = 0;
        while (!lowerText.includes('₹10,9') && safety < 150) {

            currentX += 6;  // move right gradually
            await page.mouse.move(currentX, y);

            await page.waitForTimeout(3000); // small delay for UI update
            lowerText = await lowerLabel.innerText();
            safety++;
        }

        await page.mouse.up();
    }
    // 🎯 SET UPPER TO ₹25,400
    const upperBox = await upperSlider.boundingBox();
     if (upperBox) {

        let currentX = upperBox.x + upperBox.width / 2;
        const y = upperBox.y + upperBox.height / 2;

        await page.mouse.move(currentX, y);
        await page.mouse.down();

        let upperText = await upperLabel.innerText();
        let safety = 0;

        while (!upperText.includes('₹25,4') && safety < 150) {

            currentX -= 6;  // move left gradually
            await page.mouse.move(currentX, y);

           //await page.waitForLoadState('load')
            upperText = await upperLabel.innerText();
            safety++;
        }

        await page.mouse.up();
    }

    await page.waitForLoadState('load');

    // -----------------------------
    // 📱 COUNT RESULTS
    // -----------------------------
    const products = page.locator('.s-result-item[data-component-type="s-search-result"]');
    const total = await products.count();

    console.log("======================================");
    console.log(`Mobiles between ₹10,900 - ₹25,400: ${total}`);
    console.log("======================================");

});*/
//googleAI final
/*import { test, expect } from '@playwright/test';

test("Amazon Price Slider Drag Proper", async ({ page }) => {
    test.setTimeout(120000); 

    // 1. Navigate and search
    await page.goto("https://www.amazon.in");
    const searchBox = page.locator('#twotabsearchtextbox');
    await searchBox.fill("mobiles");
    await searchBox.press('Enter');

    // Wait for the results to actually appear instead of network idle
    await page.waitForSelector('.s-result-item');

    // 2. Locate Sliders and Labels
    const lowerSlider = page.locator('#p_36\\/range-slider_slider-item_lower-bound-slider');
    const upperSlider = page.locator('#p_36\\/range-slider_slider-item_upper-bound-slider');
    const lowerLabel = page.locator('.sf-lower-bound-label');
    const upperLabel = page.locator('.sf-upper-bound-label');

    // Ensure sliders are scrolled into view
    await lowerSlider.scrollIntoViewIfNeeded();

    /**
     * Helper function to move a slider until the label matches a target
     * @param {Locator} slider - The slider handle
     * @param {Locator} label - The text label to monitor
     * @param {string} targetText - The partial text to look for (e.g., "10,9")
     * @param {number} direction - 1 for right (increase), -1 for left (decrease)
     */
    /*async function moveSliderToValue(slider, label, targetText, direction) {
        const box = await slider.boundingBox();
        if (!box) throw new Error("Slider not found");

        let currentX = box.x + box.width / 2;
        const y = box.y + box.height / 2;

        await page.mouse.move(currentX, y);
        await page.mouse.down();

        let safety = 0;
        let currentLabelText = await label.innerText();

        // Loop until label contains target or safety limit reached
        while (!currentLabelText.includes(targetText) && safety < 100) {
            currentX += (8 * direction); // Small increments for accuracy
            await page.mouse.move(currentX, y);
            
            // Short wait for the UI to update the label text
            await page.waitForTimeout(20); 
            currentLabelText = await label.innerText();
            safety++;
        }
        await page.mouse.up();
        // Brief pause for Amazon's filter to register the final position
        await page.waitForTimeout(500); 
    }

    // 🎯 SET LOWER TO ₹10,900 (Move Right)
    console.log("Setting lower bound...");
    await moveSliderToValue(lowerSlider, lowerLabel, "10,9", 1);

    // 🎯 SET UPPER TO ₹25,400 (Move Left)
    console.log("Setting upper bound...");
    await moveSliderToValue(upperSlider, upperLabel, "25,4", -1);

    // 3. Finalize Filter
    // Amazon usually requires a 'Go' click or a brief wait after slider release
    await page.keyboard.press('Enter'); 
    
    // Instead of networkidle, wait for the results container to refresh
    await page.waitForSelector('.s-result-item[data-component-type="s-search-result"]');

    // 4. Count Results
    const products = page.locator('.s-result-item[data-component-type="s-search-result"]');
    const total = await products.count();

    console.log("======================================");
    console.log(`Mobiles between ₹10,900 - ₹25,400: ${total}`);
    console.log("======================================");
    
    expect(total).toBeGreaterThan(0);
    await page.pause();
});*/

