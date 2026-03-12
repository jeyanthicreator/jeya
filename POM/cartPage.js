class CartPage{
    constructor(page){
    this.page=page;

    this.checkoutButton='[id="checkout"]'
}


async clickingOnCheckoutButton(){
await this.page.locator(this.checkoutButton).click()

}
}
export default CartPage;