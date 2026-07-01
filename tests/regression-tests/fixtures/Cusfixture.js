import { test as base,expect } from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage.js';
import { CartPage } from '../../../pages/Cartpage.js';
import { InventoryPage } from '../../../pages/Inventorypage.js';
export const test = base.extend({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },

});