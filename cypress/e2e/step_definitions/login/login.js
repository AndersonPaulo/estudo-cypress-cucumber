import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import DataUser from '../../../fixtures/usersData.json'

Given("I'm on the login page",() =>{

    cy.visit("/")
})

When("I type a registered my user and password",() =>{

    cy.get("[name='user-name']").clear().type(DataUser.succesLogin.user)
    cy.get("[type='password']").clear().type(DataUser.succesLogin.password)
    cy.get("[type='submit']").click()
})

Then("I have a successful login",() =>{

    cy.get(".app_logo")

})