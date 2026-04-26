import {test,expect} from "../custom_fixtures/loginfixture"
test("task2",async({signedInUser})=>{
   
   //await signedInUser.locator('.inventory_item').filter({ hasText: prod }).getByRole('button', { name: 'Add to cart' }).click();

   await signedInUser.locator('[class="inventory_item"]', { hasText:"Backpack" }).locator('button').click();
   await signedInUser.locator('.shopping_cart_link').click();
   await expect(signedInUser).toHaveURL("https://www.saucedemo.com/cart.html");

    await signedInUser.pause()
})