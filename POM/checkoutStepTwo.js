class CheckoutStepTwoPage{
    constructor(page){
        this.page=page;
        this.cartItems="[class='cart_item']"
        this.itemPrice="[class='inventory_item_price']"
        this.itemTotalLabel = '.summary_subtotal_label';
    
    }
    async waitingForPageLoading(){
        await this.page.waitForLoadState('load')

}
   async calculateSubTotal(){

    const cartPrice = await this.page.locator(`${this.cartItems} ${this.itemPrice}`).allTextContents();

    let total = cartPrice.map(ele => Number(ele.split("$")[1].trim())).reduce((a,b) => a + b, 0);

    console.log(total);

    return total;
   }
}
export default CheckoutStepTwoPage;