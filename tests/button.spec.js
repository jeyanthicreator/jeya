import {test,expect} from '@playwright/test'

test("simple task on buttons",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator('input[value="radio1"]').check()
    await expect(page.locator('input[value="radio1"]')).toBeChecked()
    var options=["option1","option3"]
    for(let opt of options){
        await page.locator(`input[value="${opt}"]`).check()
    }
    
    await expect(page.locator('input[value="option1"]')).toBeChecked()
        await expect(page.locator('input[value="option3"]')).toBeChecked()
});
