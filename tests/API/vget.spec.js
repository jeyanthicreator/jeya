import {test,expect,request} from "@playwright/test"
test("validate GET call",{tag:"@api"},async({request})=>{

    const response=await request.get("https://jsonplaceholder.typicode.com/users/")
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
    const body=await response.json()
    console.log(body)
    expect(body).toHaveLength(10)
    //expect(Array.isArray(body)).toBeTruthy()
}) 