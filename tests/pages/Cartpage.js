export class CartPage {
    constructor(page) {
        this.page = page;
        this.cartItems = '.cart_item';
    }

    async validateItemsCount(expectedCount) {
        const count = await this.page.locator(this.cartItems).count();
        return count === expectedCount;
    }
}