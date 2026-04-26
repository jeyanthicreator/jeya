//import {test,expect} from './regression-tests/fixtures/Cusfixture'
import { test, expect } from './regression-tests/fixtures/Cusfixture.js';
test('End-to-End Test - Add 3 items and validate cart', async ({
    loginPage,inventoryPage,cartPage}) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.addFirstThreeItems();
    await inventoryPage.goToCart();
    const result = await cartPage.validateItemsCount(3);
    expect(result).toBeTruthy();
});