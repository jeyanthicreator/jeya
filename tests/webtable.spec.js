import{test,expect} from "@playwright/test"
test("Table for displaying the course details",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    //test('Verify JMETER course price using filter', async ({ page }) => {

    const expectedPrice = "30";

    // const jmeterRow = page.locator("//table[@name='courses']//tr").filter({ hasText: "JMETER" });
    const jmeterRow = page.locator('table[name="courses"]').filter({ hasText: "JMETER" });

    const actualPrice = await jmeterRow.locator("td").nth(2).textContent();

    console.log("JMETER Price:", actualPrice);

    expect(actualPrice?.trim()).toBe(expectedPrice);
})
    


test('Verify JMETER course price from web table', async ({ page }) => {

    const expectedPrice = "25";

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const rows = page.locator("//table[@name='courses']//tr");

    const rowCount = await rows.count();

    for (let i = 0; i < rowCount; i++) {

        const courseName = await rows.nth(i).locator("td").nth(1).textContent();

        if (courseName?.trim() === "JMETER") {

            const actualPrice = await rows.nth(i).locator("td").nth(2).textContent();

            console.log("JMETER Price from table:", actualPrice);

            expect(actualPrice?.trim()).toBe(expectedPrice);

            break;
        }
    }
});

