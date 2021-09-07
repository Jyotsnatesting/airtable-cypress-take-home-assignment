/// <reference types="cypress" />

class signupPage{
       
    fillWorkEmail(value){
        cy.get('input#emailSignup').type(value)
    }
    clearWorkEmail(){
        cy.get('input#emailSignup').clear()
    }
    clickEmailContinue(){
        cy.get('.continueButtonEmail').click()
    }
    fillFullName(value){
        cy.get("input[name='fullName']").type(value)
    }
    fillPassword(value){
      let password = "input[name='password']";
        cy.get(password).type(value)
    }
    clickDetailsContinue(){
        cy.get("input[type='submit']").click()
    }
    errorMesageWorkEmail(){
        return cy.get('.emailInputWrapper >div')
    }  
    progressbarStatus(){
        return cy.get('.progressBar >div')
    }
    optionsAvailableToPersonalize(){
        return cy.get('fieldset >div >div')
    }
    selectMarketingOption(){
        return cy.get('.questionnaireAnswerText').contains('Marketing')
    }
    continueButton(){
        return cy.get('.continueButton')
    }
    skipButton(){
        return cy.get('.pointer.mr3.strong.text-grey')
    }
    collaberateform(){
        return cy.get('.col-12 > h1')
    }
    coworker1Field(value){
        return cy.get("input[id='coworker1']").type(value)
    }
    coworkerfields(){
        return cy.get('.inviteEmailInput')
    }
    copyLinkButton(){
        return cy.get('div[aria-label="Copy link"]')
    }
    inviteLink(){
        return cy.get('.copyableReadonlyTextInput')
    }
    inviteButton(){
        return cy.get(".inviteButton")
    }
    dataUploadOptions(){
        return cy.get('.flex-auto.pt2 >ul >li')
    }
    excalFileOption(){
        return cy.get('ul>li>button>span').contains('Microsoft Excel')
    }
    fileDropArea(){
        return cy.get('#fsp-fileUpload')
    }
    uploadBtn(){
        return cy.get('.fsp-button-upload')
    }
    importButton(){
      // return cy.get('div > button > span').contains('Import')
      return cy.get('.blueBright')
    }
    startNewBaseButton(){
        return cy.get('.continueButton')
    }
    gotoWorkSpaceButton(){
        return cy.get('.flex>div[role="button"].text-grey')
    }
    
}
export default signupPage