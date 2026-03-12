import {test,expect} from "@playwright/test"
import LoginPage from "../../POM/loginPage"
import data from "../../testdatas/sauce.json"
test("Validate login",async({page})=>{
    const loginPage=new LoginPage(page)
    await page.goto('/')
    await loginPage.fillingUsername(data.username)
    await loginPage.fillingPassword(data.password)
    await loginPage.clickingOnLoginBtn()
})