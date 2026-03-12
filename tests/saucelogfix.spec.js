import {test,expect} from "../custom_fixtures/loginfixture.js"
test("task",async({signedInUser})=>{
   await signedInUser.locator('[class="inventory_item"]',{hasText:" Backpack"}).locator('button').click();
   await signedInUser.pause()
})