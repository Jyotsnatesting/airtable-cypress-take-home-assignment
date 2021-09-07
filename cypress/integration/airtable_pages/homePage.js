/// <reference types="cypress" />


class homePage {

    visit() {
        cy.clearCookies()
        cy.visit('https://www.airtable.com/')
    }

    signUp() {
        cy.get('.huge.css-so3ofz').click();
    }
    signIn(){
        return cy.get('div>a[href="https://airtable.com/login"]')
    }
    sharedUsersIcons(){
        return cy.get('.userIcon >img')
    }

}
export default homePage
