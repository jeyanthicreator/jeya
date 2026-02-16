import{test,expect} from "@playwright/test"
test("validatte basic elements using playwright",async({page,context})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const [newTab]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('[id="opentab"]').click()
    ]);
    await newTab.locator('a[href="about.html"]').first().click()
    await newTab.pause()
})


//New window
/*import{test,expect} from "@playwright/test"
test("validatte basic elements using playwright",async({page,context})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const [newWindow]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('[id="opentab"]').click()
    ]);
    await newWindow.locator('a[href="about.html"]').first().click()
    await newWindow.pause()
})*/