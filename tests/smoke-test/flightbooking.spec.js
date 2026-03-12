import {test,expect} from "@playwright/test"

test("verify flight booking details",{tag="@smoke"},async({page,context})=>{

    await page.goto('https://www.makemytrip.com/flights/')

    await page.getByAltText('minimize').click();
  await page.locator('[class="commonModal__close"]').click();
  await page.locator('[class="menu_Flights"]').click();
    await page.mouse.click(10, 10);

  //await page.locator('[class="coachmark"]').click();

  await page.locator('[id="fromCity"]').click();
  await page.getByPlaceholder('From').fill('Chennai');
  await page.getByText('Chennai International Airport',{exact:true}).click();

  await page.locator('[id="toCity"]').click();
  await page.getByPlaceholder("To").fill('Bengaluru');
  await page.getByText('Bengaluru International Airport',{exact:true}).click();
  //await page.getByTestId("departure").click()

  await page.locator('[for="departure"]').click()
  const depDate="Thu Mar 12 2026"
  await page.locator(`[aria-label="${depDate}"]`).click()
  //await page.getByAltText('minimize').click();

  await page.locator('[class="lbl_input appendBottom5"]').click()
  await page.locator('[data-cy="adults-2"]').click();
// Select Business class
  await page.locator('[data-cy="travelClass-2"]').click();
// Click Apply button
  await page.locator('[data-cy="travellerApplyBtn"]').click();
  await page.waitForTimeout(2000);
// Optional validation
  await expect(page.locator('[data-cy="travellerText"]')).toContainText("2 Travellers");


  //await page.locator('a[class*="primaryBtn font24"]').click()
  
  //await page.locator('.primaryBtn,font24,latoBold,widgetSearchBtn #Search').click()
  
 
  // Wait for navigation to search results
//const searchBtn = page.locator('a[class="primaryBtn font24 latoBold widgetSearchBtn"]');
const searchBtn = page.locator('.primaryBtn,font24,latoBold,widgetSearchBtn #Search');
await expect(searchBtn).toBeVisible();
await searchBtn.click();
await page.waitForTimeout(3000)

// Wait for results page
  await page.waitForURL(/flight\/search/, { timeout: 60000 });
  await page.waitForLoadState('networkidle');

// Wait for flights to render
  await page.waitForSelector('text=/\\d+h\\s*\\d+m/', { timeout: 60000 });

const flightCards = page.locator('div[data-test="component-listing"]');

const count = await flightCards.count();

let minDuration = Number.MAX_VALUE;
let fastestIndex = 0;

for (let i = 0; i < count; i++) {

  const card = flightCards.nth(i);

  const durationText = await card.locator('text=/\\d+h\\s*\\d+m/').first().innerText();

  const match = durationText.match(/(\d+)h\s*(\d+)m/);

  if (match) {
    const hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const totalMinutes = hours * 60 + minutes;

    if (totalMinutes < minDuration) {
      minDuration = totalMinutes;
      fastestIndex = i;
    }
  }
}

// Now get fastest flight card
const fastestFlight = flightCards.nth(fastestIndex);

// Extract required details

const airline = await fastestFlight.locator('p[class*="airlineName"]').first().innerText();

const departureTime = await fastestFlight.locator('p[class*="depTime"]').first().innerText();

const arrivalTime = await fastestFlight.locator('p[class*="arrTime"]').first().innerText();

const price = await fastestFlight.locator('p[class*="actual-price"], p[class*="price"]').first().innerText();

// Print exactly like you asked

console.log("Fastest Flight Details:");
console.log("Airline:", airline);
console.log("Departure:", departureTime);
console.log("Arrival:", arrivalTime);
console.log("Duration:", minDuration, "minutes");
console.log("Price:", price);
  await page.pause()
})


  