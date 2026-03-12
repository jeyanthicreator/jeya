import {test,expect} from "@playwright/test"
import payload from "../API/userCreation.json"
test("Validate delete call",{tag:"@api"},async({request})=>{

    const delResponse= await request.delete("users/1")//give /users2 alone
    expect(delResponse.status()).toBe(200)

    const body=await delResponse.json()
    console.log(body)
})