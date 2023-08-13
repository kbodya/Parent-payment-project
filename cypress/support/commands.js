// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const headerFragment = require ('../e2e/page-objects/header')
const profileContactUs = require ('../e2e/page-objects/profile-and-contact-us')
const makePayment = require ('../e2e/page-objects/make-payment')
const accountSummary = require ('../e2e/page-objects/account-summary-page')
const noFoundPage = require ('../e2e/page-objects/not-found-page')


Cypress.Commands.add ('openPortalApplication', () => {
    cy.visit ('https://eebot-paymentportal-uat.inspirededu.com/')
    //cy.visit ('https://rhsydney-paymentportal-uat.inspirededu.com/')
})

Cypress.Commands.add ('openNotExistingHomePage', () => {
    cy.visit ('https://eebot-paymentportal-uat.inspirededu.com/')
    //cy.visit ('https://rhsydney-paymentportal-uat.inspirededu.com/')
    cy.wait (2000)
    cy.visit ('https://eebot-paymentportal-uat.inspirededu.com/test')
    //cy.visit ('https://rhsydney-paymentportal-uat.inspirededu.com/test/')
})

Cypress.Commands.add ('ContactUsPrefillData', () => {
    cy.openPortalApplication()
    const filepath = ('../../../../../../../Users/bohdan.kalinichenko/Desktop/Inspired-Edu-project/Parent-payment-project/cypress/fixtures/Sample-image-five-mb.jpg')
    cy.get(headerFragment.accountIcon).click()
    cy.get (headerFragment.profileDropDown).click ()
    cy.wait (1000)
    cy.get (profileContactUs.contactUsButton).click({force: true})
    cy.wait (2000)
    // cy.get (profileContactUs.listArrowFirst).should ('be.visible')
    //cy.get (profileContactUs.contactUsButton).click ()
    cy.wait (2000)
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="2"]').click()
    cy.contains ('Upload File').click().selectFile (filepath) 
    cy.contains ('Complete').should ('be.visible')
    cy.wait (3000)
    cy.get (profileContactUs.submitButton).click()
})

Cypress.Commands.add ('ContactUsSecondPrefillData', () => {
    cy.openPortalApplication()
    //const filepath = ('../../../../../../../Users/bohdan.kalinichenko/Desktop/Inspired-Edu-project/Parent-payment-project/cypress/fixtures/Sample-image-five-mb.jpg')
    cy.get(headerFragment.accountIcon).click()
    cy.get (headerFragment.profileDropDown).click ()
    cy.get (profileContactUs.contactUsButton).click({force: true})
    // cy.get (profileContactUs.listArrowFirst).should ('be.visible')
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="2"]').click()
    cy.get ('[data-value="1"]').click()
    cy.get ('.css-1sdtmuz > .MuiButtonBase-root').should ('not.exist') 
})

Cypress.Commands.add ('ContactUsMain', () => {
    cy.intercept ('POST', 'https://eebot-paymentportal-uat.inspirededu.com/api/contact-us').as ('postContact')
    //cy.intercept ('POST', 'https://dummyschool-paymentportal-test.inspirededu.com//api/contact-us').as ('postContact')
    const filepath = ('../../../../../../../Users/bohdan.kalinichenko/Desktop/Inspired-Edu-project/Parent-payment-project/cypress/fixtures/Sample-image-five-mb.jpg')
    cy.get(headerFragment.accountIcon).click()
    cy.get (headerFragment.profileDropDown).click ()
    cy.get (profileContactUs.contactUsButton).click({force: true})
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="2"]').click()
    cy.contains ('Upload File').click().selectFile (filepath) 
    cy.contains ('Complete').should ('be.visible')
    cy.get (profileContactUs.fieldType).type (profileContactUs.validQtyText)
    cy.wait (2000)
    cy.get (profileContactUs.submitButton).click()
    cy.get (profileContactUs.disabledFirstField).should ('be.visible')
    cy.get (profileContactUs.disabledSecondField).should ('be.visible')
    cy.wait (2000)
    cy.wait ('@postContact').then ( xhr => {
        console.log (xhr)
        expect (xhr.response.statusCode).to.equal (200)})
    cy.contains ('Your query was sent successfully. Thanks.').should ('be.visible')
    cy.get (profileContactUs.successBlock).should ('be.visible')
    cy.url().should('eq', 'https://eebot-paymentportal-uat.inspirededu.com/') // => forUAT

})

Cypress.Commands.add ('OpenMakePaymentTest', () => {
    cy.wait (1000)
    cy.openPortalApplication ()
    cy.wait (2000)
    cy.contains ('Make Payment').click({force: true})

})

const userData = {
    'Username': 'paymentportal8@testing.com',    
    'Password': 'PaymentPortal123!'
}

const userDataUAT = {
    'Username': 'escolaeleva1@uat.com',
    'Password': 'PaymentPortal123!'
}

Cypress.Commands.add ('LoginToiSAMS', () => {
    cy.wait (2000)
    //cy.visit ('https://test-cambridgecollege.parents.isams.cloud',) // for test env.
    cy.visit ('https://inspired-test.isamshosting.cloud/auth/Account/Login?ReturnUrl=%2Fauth%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dinspirededu.paymentportal.eebot-uat.pportal%26redirect_uri%3Dhttps%253A%252F%252Feebot-paymentportal-uat.inspirededu.com%252Fauth%252Fsignin-oidc%26response_type%3Dcode%2520id_token%2520token%26scope%3Dopenid%2520email%2520profile%2520offline_access%26response_mode%3Dform_post%26nonce%3D638204429639584578.NGFjMTViNmItYTQ2NS00NjgwLTg5YmYtMTkyYTBkZjIxOTJiYmI3ZGEzMDctZDZhZS00MTEwLWIyZmItMzQ1MTMwYmI2Y2Jh%26state%3DCfDJ8FtDYJajLNRLk7TJkqomtiE2Hx8dXmEtHLH-JaLX_VOZD3yoUgNna7-mEO57qMd1z8hwrKn0esX6czR8wJNjqJglvv1xvDYUvGwIqUxtYaD94TFyRv8oNkCEIiS_eu2nZMYITIw6F5GgvHIznSHJ19sFL0wnTqvZGrzNYVV_wofe9vZM5GNGiPbDnYryITOrdr13q3F2BjeWv9MOFA8KRos-9qLB1GN_1uYtCvMcTzD5pE5KmA9vVdcYaO0GFSjeDYdEK1R8vitFpfkW9Z3eSVAFEJLIkzfercg96-dS7aePzwaCAvpCDlS_dXVnfYLeBUjPKxCXiseVepHq80GuUjcFkSZbzxRnUOjOGMOHS9FgSXbUJJ26Aas_kQ5cLvVKRdQJgYulWBp2m4UTc9ZdYMFB1vpru0x5pe87s0tYmibamGp4YEBzjRCiCbeKlJsKKg%26x-client-SKU%3DID_NETSTANDARD2_0%26x-client-ver%3D6.10.0.0') // for TESTBrasil env.
    //cy.clearCookies()
    cy.get ('input[id="login-username"]').type (userDataUAT.Username) // for UAT env.
    cy.wait (2000)
    cy.get ('input[id="login-password"]').type (userDataUAT.Password) // for UAT env.

    //cy.get ('input[placeholder="Username / Email"]').type (userData.Username) // for test env.
    //cy.get ('input[placeholder="Password"]').type (userData.Password) // for test env.
    cy.get ('button[type="submit"]').click ()
    //cy.get ('[id="webfx-menu-object-31"]').click () // disabled during UAT
    cy.wait (7000)
})

Cypress.Commands.add ('SwitchToEnglish', () => {
    cy.get (headerFragment.burgerButton).click()
    cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').click ()
    cy.get('.MuiDialogContent-root > .MuiList-root > :nth-child(1) > .MuiButtonBase-root').click ()
})

Cypress.Commands.add ('openAdminApp', () => {
    cy.visit ('https://paymentadmin-test.inspirededu.com/')
})

const BaseURL = 'https://paymentadmin-test.inspirededu.com/'


// Cypress.Commands.add('iframeCustom', { prevSubject: 'element' }, ($iframe) => {
//     return new Cypress.Promise((resolve) => {
//       $iframe.ready(function () {
//         resolve($iframe.contents().find('body'))
//       })
//     })
//   })
  
//   Cypress.Commands.add('checkElementExists', (selector) => {
//     return cy.get(selector).should('exist').then(cy.wrap)
//   })