import checkoutonelocator from "../utils/Locators/checkoutoneLocators.json"
class CheckoutStepOnePage{

    constructor(page){
        this.page=page;

    }

    async fillingFirstname(fname){
        await this.page.locator(checkoutonelocator.firstnamebox).fill(fname)
    }

    async fillingLastname(lname){
        await this.page.locator(checkoutonelocator.lastnamebox).fill(lname)
    }

    async fillingPostalcode(pcode){
        await this.page.locator(checkoutonelocator.postalcodebox).fill(pcode)
    }

    async clickingContinueBtn(cbtn){
        await this.page.locator(checkoutonelocator.continuebutton).click()
    }
}
export default CheckoutStepOnePage;