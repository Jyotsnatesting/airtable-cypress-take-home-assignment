/// <reference types="cypress" />

class inviteCollaboratorPage {

    shareButton(){
      return cy.contains('Share')
    }
    inviteByemail(value){
        cy.get('input[placeholder="Invite more workspace collaborators via email"]').type(value)
    }
    sendInviteBtn(){
       //return cy.get('.flex-auto.pointer[role="button"]')
       return cy.contains('Send invite')
    }
    closeButton(){
        return cy.get('div[aria-label="Close dialog"]')
    }
    additionalUsersMail(){
        return cy.get('.ml1.line-height-4.flex-auto >div.strong[title*="com"]')
    }
    chooseEditorOption(){
       // return cy.get('.flex.flex-none.ml1>div.selectMenu').find('li div').contains('Editor')
       cy.get('.flex.flex-none.ml1>div.selectMenu').click()
       return cy.get('.hdropdown').find('li div').contains('Editor')
    }
    editorAdditionaluser(inviteEmail){
      
        cy.get('.py1.mt-half.flex.items-center').each(($list) => {
                
                cy.get('.ml1.line-height-4.flex-auto>div.quiet').should('contain.text',inviteEmail)
              
             
                cy.get('.flex-auto.flex.justify-center').should('contain.text','Editor')


            })
            
         
    } 
    
}
export default inviteCollaboratorPage