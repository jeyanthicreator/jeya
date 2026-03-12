import{test} from "@playwright/test"
test("File upload checking",async({page})=>{
    await page.goto("https://demo.automationtesting.in/FileUpload.html")
    await page.setInputFiles("input[id=input-4]",["./files/check.txt"])
    await page.waitForTimeout(3000)
})