import {test,expect} from "@playwright/test"
test("validate HideShow button elements using playwright",async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const showButton=page.locator('[id="show-textbox"]')
    const hideButton=page.locator('[id="hide-textbox"]')
    const textBox=page.locator('[id="displayed-text"]')
    await expect(textBox).toBeVisible()
    await hideButton.click()
    await expect(textBox).toBeHidden()
    await showButton.click()
    await expect(textBox).toBeVisible()
    await textBox.fill("fine")
    await page.pause()

})


    

   

    


