  import loginlocator from "../utils/Locators/loginLocators.json"
  class LoginPage{
    constructor(page){
        this.page=page;
    }
    async fillingUsername(usern){
        await this.page.locator(loginlocator.usernameBox).fill(usern)
    }
    async fillingPassword(userpass){
        await this.page.locator(loginlocator.passwordBox).fill(userpass)
    }
    async clickingOnLoginBtn(){
       await this.page.locator(loginlocator.loginButton).click()
    }
  }
  export default LoginPage;
  

  