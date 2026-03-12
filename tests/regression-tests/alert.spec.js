import{test,expect} from "@playwright/test"
test("validate alert messages",{tag:"@smoke"},async({page,context})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    page.on('dialog',async(dialog)=>{

        console.log(dialog.type())
        console.log(dialog.message())
        //expect(dialog.message()).toBe("Hello , Are you sure you want to confirm?")
       expect(dialog.message()).toBe("Hello , share this practice page and share your knowledge")
       await dialog.accept()
       //await dialog.dismiss()
    })
    //await page.locator('input[id="confirmbtn"]').click()
    await page.locator('input[id="alertbtn"]').click()
    await page.pause();

    })
