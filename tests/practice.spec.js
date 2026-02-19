import {test,expect} from "@playwright/test"
import loginData from "../TestData/login.json"
test.describe("Login Feature using Data Driven Tests", () =>{

    for(const testData of loginData){
       test(`${testData.id} - ${testData.testName}`, async ({page}) => {
        await page.goto("https://practicetestautomation.com/practice-test-login/")
        await page.locator('[id="username"]').fill(testData.username)
        await page.locator('[id="password"]').fill(testData.password)
        await page.locator('button[id="submit"]').click()

        if (testData.expected.type === "success") {

        await expect(page).toHaveURL(
          'https://practicetestautomation.com/logged-in-successfully/'
        );

        await expect(page).toHaveTitle(
          'Logged In Successfully | Practice Test Automation'
        );
         }

        else {

        const errorMessage = page.locator('#error');

        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText(testData.expected.message);
        await page.pause()
              }
            });
     }            

 })
    
    
   
    