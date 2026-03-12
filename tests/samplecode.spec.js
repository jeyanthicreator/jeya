import{test,expect} from '@playwright/test'

test.only("Project 2",async({page})=>{
   await page.goto('/inventory.html')
   await page.pause()
})
