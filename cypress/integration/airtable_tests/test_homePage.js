/// <reference types="cypress" />
import homePage from "../airtable_pages/homePage";

const hp = new homePage();
describe('Home Page Suite', ()=>{

  
    it('Launch Airtable home page and verify Title of the page', () => {
        cy.clearCookies()
        hp.visit()
        cy.title().should('eq', "Airtable | Create apps that perfectly fit your team's needs")
    
    })
    it('Click on "Signup for free" button', () => {
        hp.signUp()
        cy.title().should('eq', 'Sign up - Airtable')
    
    })


})