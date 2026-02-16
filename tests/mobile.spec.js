import {test,expect} from "@playwright/test"
test("verify mobile brand details",async({page})=>{

    await page.goto("https://www.amazon.in/")
    await page.locator('input[id="twotabsearchtextbox"]').fill("mobiles")
    await page.locator('input[id="nav-search-submit-button"]').click()
    let expectedProduct="iphone"
    await page .waitForSelector('[id="brandsRefinements"] ul li input')
    await page.locator(`[id="brandsRefinements"]ul[aria-label*="${expectedProduct}"]input`).click({force:true})
    await page.waitForTimeout(10000)
    const titles=page.locator()
    //await page.getByText("Samsung").toBeChecked()
    await page.waitForSelector('text=Brands')
    
})
