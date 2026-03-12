import {test,expect} from "@playwright/test"
import payload from "../API/userCreation.json"
test("validate POST call",{tag:"@api"},async({request})=>{

    const userCreation=await request.post("/users",{data:payload})
    expect(userCreation.status()).toBe(201)

    const body=await userCreation.json()
    console.log(body)
})