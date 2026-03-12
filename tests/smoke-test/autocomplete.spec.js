import {test,expect} from '@playwright/test'
test("validate basic elements using playwright",{tag:"@smoke"},async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    //static dropdown
    await page.locator('select').selectOption("option3")

    //dynamic dropdown
   await  page.locator('[id="autocomplete"]').fill("ar")
    await page.waitForSelector('li.ui-menu-item div',{state:'visible'})
    const options=page.locator('li.ui-menu-item div')
    const count=await options.count()
    for(let i=0;i<count;i++){
        let countryName= await options.nth(i).textContent()
        if(countryName==="Argentina"){
            await options.nth(i).click()
        }
    }
 await page.pause()

 await page.waitForTimeout(3000)
})

// using hastext concept

/*test("validate basic elements using playwright",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    //static dropdown
    await page.locator('select').selectOption("option3")

    //dynamic dropdown
    await page.locator('[id="autocomplete"]').fill("au")
    await page.waitForSelector('li.ui-menu-item div')
    await page.locator('li.ui-menu-item div',{hasText:"Australia"}).click()
    await page.pause()
})*/

// using filter method

/*test("validate basic elements using playwright",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    //static dropdown
    await page.locator('select').selectOption("option3")

    //dynamic dropdown
    await page.locator('[id="autocomplete"]').fill("in")
    await page.waitForSelector('li.ui-menu-item div')
    await page.locator('li.ui-menu-item div').filter({hasText:"Indonesia"}).click()
    await page.pause()

})*/

/*test("validate basic elements using playwright",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    //static dropdown
    await page.locator('select').selectOption("option3")

    //dynamic dropdown
    await page.locator('[id="autocomplete"]').fill("in")
    await page.waitForSelector('li.ui-menu-item div')
     await page.locator('li.ui-menu-item div').getByText('India',{exact:true}).click()
     await page.pause()
})*/


