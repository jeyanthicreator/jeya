class InventoryPage{
    constructor(page){
        this.page=page;
        this.invitems='[class="inventory_item"]'
        this.atcbtn='button'
        this.cartIcon='a[class="shopping_cart_link"]'
    }
    async waitingForPageLoading(){
        await this.page.waitForLoadState('load')
    }
    async addingProductsToCart(products){
        for(let prod of products){
        await this.page.locator(this.invitems,{hasText:prod}).locator(this.atcbtn).click()
  }
    }
    async clickingOnCartIcon(){
       await this.page.locator(this.cartIcon).click()
    }
}
export default InventoryPage;
  