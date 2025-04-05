import DataUser from '../../fixtures/usersData.json'

class LoginPage {

   selectList(){

        const selectors ={

            userNameField: "[name='user-name']",
            passwordField: "[type='password']",
            submitButton: "[type='submit']"
        }
        return selectors
    }
    visitPage(){
        cy.visit("/")
    }
    loginSuccess(){

        cy.get(this.selectList().userNameField).clear().type(DataUser.succesLogin.user)
        cy.get(this.selectList().passwordField).clear().type(DataUser.succesLogin.password)
        cy.get(this.selectList().submitButton).click()

    }
    submitSuccess(){
   
        cy.get(".app_logo")
    }
    

}
export default LoginPage