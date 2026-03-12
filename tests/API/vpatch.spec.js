import {test,expect} from "@playwright/test"
test("Validate Patch call",{tag:"@api"},async({request})=>{
    const modifiedUser=await request.patch("https://jsonplaceholder.typicode.com/users/5",

    {
        data: {
        username:"virat",
        city:"Chennai"        
    
              }
    
    })

    expect(modifiedUser.status()).toBe(200)
    
    const body=await modifiedUser.json()
    console.log(body)
})