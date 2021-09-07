/// <reference types="cypress" />
import homePage from "../airtable_pages/homePage";
import inviteCollaboratorPage from "../airtable_pages/inviteCollaboratorPage";
import signinPage from "../airtable_pages/signinPage";
import signupPage from "../airtable_pages/signupPage";
const hp = new homePage();
const signup = new signupPage();
const collaberate = new inviteCollaboratorPage();
const signIn = new signinPage();

describe('Collaberate  Suite', ()=>{

  
    
    it('Test Case:001 => Inviting people via link and comparing the ICONs displayed in home page with the users.', () => {
        hp.visit()
        hp.signIn().click()
        signIn.emailField('username@jimail.com')
        signIn.passwordField('12345678')
        signIn.signInBtn().click()
        collaberate.shareButton().click()
        var inviteEmail='usernames2123@jimail.com';
        collaberate.inviteByemail(inviteEmail)
        collaberate.chooseEditorOption().click() //Select the user as the editor
        collaberate.sendInviteBtn().click()
       collaberate.editorAdditionaluser(inviteEmail) //Validate the User email and editor are displayed or not?
        var UserCount;
        collaberate.additionalUsersMail()
                   .then(user => {
                UserCount = Cypress.$(user).length;
                cy.log('The additional user Count' +UserCount)
            })
        //Verifying Added collaberator is displayed or not.
        collaberate.additionalUsersMail().should('be.visible')
        collaberate.closeButton().click()
        // To validate the added users equals to the icons in the homepage
        hp.sharedUsersIcons().its(length).should('have.length',UserCount) 
        
    })
    
})