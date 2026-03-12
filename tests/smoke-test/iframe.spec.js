import {test,expect} from "@playwright/test"
test("validate iframe elements using playwright",{tag:"@smoke"},async({page})=>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
const frame= page.frameLocator('iframe[id="courses-iframe"]')
await frame.locator('a[href="mentorship"]').first().click()
await page.pause()
 })