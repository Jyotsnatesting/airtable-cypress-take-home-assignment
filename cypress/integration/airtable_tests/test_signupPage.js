/// <reference types="cypress" />

import homePage from "../airtable_pages/homePage";
import signupPage from "../airtable_pages/signupPage";

const signup = new signupPage();
const hp = new homePage();

describe('Signup Suite', () => {
	

	it('Test Case:001  => Verify Invalid domain error message', () => {
		hp.visit()
		hp.signUp()
		signup.fillWorkEmail("aasfasfsdfasfdf1d@ldadsfjsdlasdlasnhdnl.com")
		signup.clickEmailContinue()
		cy.url().should('include', '/signup#name_and_password')
		cy.go('back')
		signup.errorMesageWorkEmail().contains("Unable to send emails to the ldajsdlasdlasnhdnl.com domain")

	})
	it('Test Case:002  => Verify Invalid Email error message', () => {
		hp.visit()
		hp.signUp()
		signup.fillWorkEmail("aasfasfsdfasfd1@ldajssfsdlasdlasnhdnl.com")
		signup.clickEmailContinue()
		cy.url().should('include', '/signup#name_and_password')
		cy.go('back')
		signup.clearWorkEmail()
		signup.fillWorkEmail('username')
		signup.errorMesageWorkEmail().contains('Invalid email')
	})

	it('Test Case:003  => Verify Error Message, "email already in use", while signup process continues', () => {
		hp.visit()
		hp.signUp()
		signup.fillWorkEmail("j123456@gmail.com")
		signup.clickEmailContinue()
		signup.fillFullName('Airtable account')
		signup.fillPassword('12345678')
		signup.clickDetailsContinue()
		cy.get('.small.strong.quiet').contains('Email already in use')

	})

	it('Test Case:004 => To verify the 12 personalize options, during the Signup', () => {
		hp.visit()
		hp.signUp()
		signup.fillWorkEmail("j11sdf1245678@gmail.com")
		signup.clickEmailContinue()
		signup.fillFullName('Airtable account')
		signup.fillPassword('12345678')
		signup.clickDetailsContinue()
		cy.wait(500)
		signup.optionsAvailableToPersonalize()
			.should('have.length', 12)
		cy.get('.pointer.mr3.strong.text-grey').should('be.visible')
		cy.get('.continueButton').click() //Personalize experience

	})

	it('Test Case:005 => To verify Signup flow with skipping all the selections', () => {
		hp.visit()
		hp.signUp()
		signup.fillWorkEmail("jyo1124dsf5678123@1gmail23.com")
		signup.clickEmailContinue()
		signup.fillFullName('Airtable account123')
		signup.fillPassword('12345678')
		signup.clickDetailsContinue()
		cy.wait(500)
		signup.optionsAvailableToPersonalize()
			.should('have.length', 12)
		signup.skipButton()
			.should('be.visible')
		cy.get('.continueButton').click()  //Nothing should happen
		signup.skipButton().click()
		signup.collaberateform().should('contain.text', 'Who do you collaborate with?')
		signup.coworkerfields()
			.should('have.length', 3)
		signup.copyLinkButton()
			.should('be.visible')
		signup.inviteLink()
			.should('be.visible')

		signup.skipButton().click()
		signup.skipButton().click()
		signup.gotoWorkSpaceButton()
			.should('contain.text', 'workspace')
			.click();
		cy.title().should('contain.text', 'airtable')
	})

	it('Test Case:006 => To verify signup, After selecting all options.', () => {
		hp.visit()
		hp.signUp()
		signup.fillWorkEmail("jj137245dfds61781f23@1g1mail2345.com")
		signup.clickEmailContinue()
		signup.fillFullName('Airtable account123')
		signup.fillPassword('12345678')
		signup.clickDetailsContinue()
		cy.wait(1000)
		signup.optionsAvailableToPersonalize()
			.should('have.length', 12)
		signup.selectMarketingOption().click()
		signup.continueButton().click()
		signup.coworker1Field("jy012345@123456.com")
		signup.inviteButton().click()
		cy.wait(1000)
		signup.dataUploadOptions()
			.should('have.length', 4)
		cy.wait(1000)
		signup.excalFileOption().click()
		const fixturepath = 'TestData_csv.xlsx';
		signup.fileDropArea().attachFile(fixturepath)
		cy.wait(1000)
		signup.uploadBtn().click()
		cy.wait(1000)
		signup.importButton()
		.scrollIntoView()
		.click()
		cy.wait(1000)
		cy.url().should('include','blocks=hide')

	})


	/*	 For iterating over multiple test data.
	let testdata = [];
	before(() => {
		cy.fixture('signupeMail_data').then(function (data) {
			testdata = data
			return testdata
		})

	})	 
	let i = 0
	for(i = 0; i <= testdata.length; i++) {
		console.log("The array size is:" + testdata.length)
		it('Validate the work email and Continue for +ve test case', () => {
			hp.visit()
			hp.signUp()
			signup.fillWorkEmail(testdata[i].email)
				// signup.clickContinue();
		})
	}
		*/





})