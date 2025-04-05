import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("I'm on the login page",() =>{

    cy.visit("https://www.saucedemo.com/")
})

When("I type a registered my user and password",() =>{

    cy.get("[name='user-name']").clear().type('standard_user')
    cy.get("[type='password']").clear().type('secret_sauce')
    cy.get("[type='submit']").click()
})

Then("I have a successful login",() =>{

    cy.get(".app_logo")

})