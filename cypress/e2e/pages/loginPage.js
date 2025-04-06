import DataUser from '../../fixtures/usersData.json'

class LoginPage {

   selectList(){

        const selectors ={

            userNameField: "[name='user-name']",
            passwordField: "[type='password']",
            submitButton: "[type='submit']",
            erroContainer: "[data-test='error']"
        }
        return selectors
    }
    acessloginPage(){
        cy.visit("/")
    }
    loginSuccess(){

        cy.get(this.selectList().userNameField).clear().type(DataUser.succesLogin.user)
        cy.get(this.selectList().passwordField).clear().type(DataUser.succesLogin.password)
        

    }
    submitSuccess(){

        cy.get(this.selectList().submitButton).click()
        cy.get(".app_logo")
    }
    loginFail(value){

        if(value == "Empty"){

            cy.get(this.selectList().userNameField).clear()
            cy.get(this.selectList().passwordField).clear()
            cy.get(this.selectList().submitButton).click()

        }
        else if(value== "wrongUser"){

            cy.get(this.selectList().userNameField).clear().type(DataUser.failLoginWrongUser.user)
            cy.get(this.selectList().passwordField).clear().type(DataUser.failLoginWrongUser.password)
            cy.get(this.selectList().submitButton).click()

        }
        else if(value=="wrongPassword"){

            cy.get(this.selectList().userNameField).clear().type(DataUser.failLoginWrongPassword.user)
            cy.get(this.selectList().passwordField).clear().type(DataUser.failLoginWrongPassword.password)
            cy.get(this.selectList().submitButton).click()

        }
        else if(value=="emptyPassword"){

            cy.get(this.selectList().userNameField).clear().type(DataUser.failLoginWrongPassword.user)
            cy.get(this.selectList().passwordField).clear()
            cy.get(this.selectList().submitButton).click()

        }
        else if(value=="emptyUser"){

            cy.get(this.selectList().userNameField).clear()
            cy.get(this.selectList().passwordField).clear().type(DataUser.failLoginWrongPassword.password)
            cy.get(this.selectList().submitButton).click()

        }


    }
    messageError(value){

        cy.get(this.selectList().erroContainer).should('have.text',value)
    }
    

}
export default LoginPage