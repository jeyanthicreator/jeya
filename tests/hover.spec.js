import{test,expect} from "@playwright/test"
test("validate hover elements using playwright",async({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
await page.locator('button[id="mousehover"]').hover()
await page.locator('[href="#top"]').click()
await expect(page.url()).toContain("#top")
const reload=await page.locator('//a[text()="Reload"]')
await page.waitForTimeout(3000)
})