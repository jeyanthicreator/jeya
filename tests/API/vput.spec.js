import {test,expect} from "@playwright/test"
import payload from "../API/userCreation.json"

test("validate put call",{tag:"@api"},async({request})=>{
    const userUpdation=await request.put("/users/4",{data:payload})
    expect(userUpdation.status()).toBe(200)

    const body=await userUpdation.json()
    console.log(body)
})