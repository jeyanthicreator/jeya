import{test,expect} from "@playwright/test"
test("file Uploads using setfiles function",async({page})=>{
    await page.goto("https://demo.automationtesting.in/FileUpload.html")
    const [uploadfile]=await Promise.all([
        page.waitForEvent('filechooser'),
        page.click("input[id='input-4']"),
    ])
    const multiple=uploadfile.isMultiple()
    console.log(multiple)

    await uploadfile.setFiles(["./files/check.txt","./files/Testing_course_certificate.pdf","./files/basics.txt"])
    await page.pause()
})