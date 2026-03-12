import{test,expect} from "../custom_fixtures/loginfixture"
test("validate Login using login Fixtures",async({signedInUser})=>{
    await signedInUser.pause();
})