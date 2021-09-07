/// <reference types="cypress" />


class signinPage {

    emailField(value){
        cy.get('input[type="email"]').type(value)
    }
    passwordField(value){
        cy.get('input[type="password"]').type(value)
    }
    signInBtn(){
        return cy.get('label>button[type="submit"]')
    }
}
export default signinPage
