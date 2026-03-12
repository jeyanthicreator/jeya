import {test as base,expect} from "@playwright/test"

export const test= base.extend({
    signedInUser:async({page},use)=>{

    await page.goto("https://www.saucedemo.com/")
    await page.locator('[id="user-name"]').fill("standard_user")
    await page.locator('[id="password"]').fill("secret_sauce")
    await page.locator('[value="Login"]').click()
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
    await use(page)
    }
})
export{expect}