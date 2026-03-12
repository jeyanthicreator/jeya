import{test,expect} from "@playwright/test"
test("File Download checking",async({page})=>{
    await page.goto("https://demo.automationtesting.in/FileDownload.html")
    await page.locator('#textbox').pressSequentially("Welcome to playwright training course")

    await page.waitForTimeout(3000)
    await page.locator("//button[@id='createTxt']").click()

    const downloads=await Promise.all([
        page.waitForEvent("download"),
        page.click("#link-to-download"),
        
    ]);

    const filename=downloads[0].suggestedFilename()
    await downloads[0].saveAs(filename);
    
    await page.waitForTimeout(4000)
})