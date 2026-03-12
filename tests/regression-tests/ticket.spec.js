import {test,expect}from "@playwright/test"

test("Booking Movie Tickets & take SS",{tag:"@regression"},async({page})=>{

await page.goto("https://ticketnew.com/movies")

await page.locator('input[placeholder="Search city, area or locality"]').fill('Trichy')
await page.locator('button[aria-label="Trichy"]').click()
await page.locator('img[alt="Thaai Kizhavi"]').click()
await expect(page).toHaveURL('https://ticketnew.com/movies/thaai-kizhavi-movie-detail-212782')
await page.locator('[aria-label="Thursday12"]').click()
await page.waitForSelector(':text("02:15 PM")');
await page.locator(':text("02:15 PM")').click();
await page.waitForSelector('div[class*="seat"]')

// Scroll to Row G

await page.locator('[aria-label*="row G, column 12"]').click();
await page.locator('[aria-label*="row G, column 13"]').click();
//await page.locator('[aria-label="available  seat, class ELITE, row G, column 12, price 150  "]').click()
await page.locator('[aria-label="Proceed"]').click()
 const popup=page.locator('[class="dds-flex dds-flex-col dds-h-[70vh] dds-bg-white dds-rounded-lg dds-justify-center md-height:dds-justify-start"]')
 await popup.waitFor({state:"visible"})
 //await page.screenshot({path:"D:/Ticket_Screenshot/proceed-popup7.png"})
 await popup.screenshot({path:"D:/screenshot/resultsthaikiz.png"})
 //await page.waitForTimeout(6000)
 await page.pause();
})

    