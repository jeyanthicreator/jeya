import {test,expect} from "../custom_fixtures/loginfixture"
test("task1",async({signedInUser})=>{
    await signedInUser.locator('[class="inventory_item"]',{hasText:prod}).locator('button').click()

    await signedInUser.pause()
})