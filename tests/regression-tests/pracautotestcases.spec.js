import{test,expect} from '@playwright/test'
test("Testcase:1 : Positive Login Test",{tag:"@regression"},async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator('[id="username"]').fill("student")
    await page.locator('[id="password"]').fill("Password123")
    await page.locator('button[id="submit"]').click()
    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
    await expect(page).toHaveTitle("Logged In Successfully | Practice Test Automation")
    const successMessage=page.locator('p strong')
    await expect(successMessage).toContainText("Congratulations")
    const logoutBtn=page.locator('a[href*="https://practicetestautomation.com/practice-test-login/"]')
    await expect(logoutBtn).toBeVisible()

})

test("Testcase:2 :Negative username test",{tag:["@smoke","@regression"]},async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.locator("[id='username']").fill(" incorrectUser")
    await page.locator("[id='password']").fill("Password123")
    await page.locator("button[id='submit']").click()   
    const errMessage=page.locator('#error.show')
    await expect(errMessage).toContainText("is invalid!")
    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/")
})

test("Test case 3: Negative password test",{tag:["@smoke","@regression"]},async({page})=>
{
 await page.goto('https://practicetestautomation.com/practice-test-login/')
await page.locator('[id="username"]').fill("student")
await page.locator("[id='password']").fill("incorrectPassword")
await page.locator("button[id='submit']").click()
const erMessage=page.locator('div.show')
await expect(erMessage).toContainText("password")
await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/")
const footer=page.locator('#site-footer')
await expect(footer).toContainText("Copyright")
await expect(footer).toContainText('Practice Test Automation');
await expect(footer).toContainText('Privacy Policy');
//const footerlink=page.locator('a[href*="practicetestautomation"]')
//await expect(footerlink).toBeVisible()

})