import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../pages/loginPage"

const loginPage = new LoginPage()

Given("I'm on the login page",() =>{

    loginPage.visitPage()
    
})

When("I type a registered my user and password",() =>{

    loginPage.loginSuccess()
    
})

Then("I have a successful login",() =>{

   loginPage.submitSuccess()

})