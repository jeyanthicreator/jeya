export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.items = '.inventory_item';
        this.cartIcon = '.shopping_cart_link';
    }

    async addFirstThreeItems() {
        const items = await this.page.locator(this.items);
        
        for (let i = 0; i < 3; i++) {
            await items.nth(i).locator('button').click();
        }
    }

    async goToCart() {
        await this.page.click(this.cartIcon);
    }
}