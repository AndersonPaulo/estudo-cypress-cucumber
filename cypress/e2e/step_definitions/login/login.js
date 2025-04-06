import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../pages/loginPage"

const loginPage = new LoginPage()

Given("I'm on the login page",() =>{

    loginPage.acessloginPage()
    
})

When("I type a registered my user and password",() =>{

    loginPage.loginSuccess()
    
})

Then("I have a successful login",() =>{

   loginPage.submitSuccess()

})

Given("I'm on the login page",()=>{

    loginPage.acessloginPage()

})
When("I type a registered wrong user and done password",() =>{

    loginPage.loginFail("wrongUser")

})
Then("show it a message as this 'Epic sadface: Username and password do not match any user in this service'",() =>{

    loginPage.messageError('Epic sadface: Username and password do not match any user in this service')

})


Given("I'm on the login page",() =>{

    loginPage.acessloginPage()

})

When("I type a registered done user and wrong password",()=>{

    loginPage.loginFail("wrongPassword")

})

Then("show it a message as this  'Epic sadface: Username and password do not match any user in this service'",() =>{

    loginPage.messageError('Epic sadface: Username and password do not match any user in this service')

})

Given("I'm on the login page",()=>{

    loginPage.acessloginPage()

})
When("I type a registered user and password Emptys",() =>{

    loginPage.loginFail("Empty")

})

Then("show it a message as this 'Epic sadface: Username is required'",() =>{

    loginPage.messageError('Epic sadface: Username is required')

})

Given("I'm on the login page",()=>{

    loginPage.acessloginPage()

}
)

When("I type a registered user done and password Empty",()=>{

    loginPage.loginFail("emptyPassword")

})

Then("show it a message as this 'Epic sadface: Password is required'",()=>{

    loginPage.messageError('Epic sadface: Password is required')

})


Given("I'm on the login page",() =>{

    loginPage.acessloginPage()
})
When("I type a registered user Empty and password done",()=>{

    loginPage.loginFail("emptyUser")

})

Then("show it a message as this 'Epic sadface: Username is required'",()=>{

    loginPage.messageError('Epic sadface: Password is required')

})