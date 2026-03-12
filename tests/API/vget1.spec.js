import {test,expect,request} from "@playwright/test"
test("validate GET call",{tag:"@api"},async({request})=>{

    const response=await request.get("https://jsonplaceholder.typicode.com/users/3")
    expect(response.status()).toBe(200)
    const body=await response.json()
    console.log(body)
    expect(body.id).toBe(3)
    expect(body.name).toBe("Clementine Bauch")
    expect(body.address.city).toBe("McKenziehaven")
    expect(body.username).toBeDefined()
    expect(body.address).toHaveProperty("zipcode")
    console.log(body.address.geo.lng)

})