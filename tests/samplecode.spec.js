import{test,expect} from '@playwright/test'

test.only("Project 2",async({page})=>
{
    await page.goto("https://www.amazon.in/")
    await page.locator('input#twotabsearchtextbox').fill('Mobile')
    await page.locator("[type='submit']").click()
    await page.locator('#brandsRefinements li a',{hasText:"Samsung"}).click()
    await page.waitForLoadState("load")
    const lowerbound=page.locator('[id="p_36/range-slider_slider-item_lower-bound-slider"]')
    const upperbound=page.locator('[id="p_36/range-slider_slider-item_upper-bound-slider"]')
    const lowerlabel=page.locator('[class="a-form-label sf-range-slider-label sf-lower-bound-label"]')
    const upperlabel=page.locator('[class="a-form-label sf-range-slider-label sf-upper-bound-label"]')
    await upperbound.focus()
    let uppertext=await upperlabel.innerText()
    while(!uppertext.trim().includes('₹15,'))
    {
    await upperbound.press('ArrowLeft');
    uppertext=await upperlabel.innerText()
    if(uppertext.includes('₹16,'))
    break;
    }
    await upperbound.focus()
    let lowertext=await lowerlabel.innerText()
    while(!lowertext.trim().includes('₹10,'))
    {
    await lowerbound.press('ArrowRight');
    lowertext=await lowerlabel.innerText()
    if(lowertext.includes('₹11,'))
    break; 
}
await page.waitForLoadState('load'); 
const titlesLocator = page.locator('h2.a-size-medium.a-spacing-none.a-color-base.a-text-normal[aria-label]');
const pricesLocator = page.locator('span.a-price-whole');
const [titles, prices] = await Promise.all([ titlesLocator.allTextContents(),
pricesLocator.allTextContents() ]); 
//console.log('Titles:', titles); 
//console.log('Prices:', prices);

const beforeBracket = titles.map(title =>"Result:" + "Mobile name:" +title.split('(')[0].trim());
 //console.log(beforeBracket)
 await page.waitForLoadState("load")
 expect(titles).toEqual(expect.arrayContaining([ expect.stringMatching(/Samsung/) ]))
 console.log("yes all title name contains expected value")
for (let i=0;i<beforeBracket.length;i++)
{
   let PT=await page.locator('h2.a-size-medium.a-spacing-none.a-color-base.a-text-normal[aria-label]').nth(i).innerText()
   let PN=await page.locator('a span [class="a-price-whole"]').nth(i).innerText()
  console.log("Result",i+1)
  console.log(PT)
  console.log(PN)
}
})
