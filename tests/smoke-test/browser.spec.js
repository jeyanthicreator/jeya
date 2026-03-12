import{test,expect} from "@playwright/test"
test("validate basic elements using playwright",{tag:"@smoke"},async({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.youtube.com/")
    await page.pause()
})