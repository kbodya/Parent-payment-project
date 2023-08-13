const noFoundPage = require ('../e2e/page-objects/not-found-page')
const openNotExistingHomePage = require ('../support/commands')
const headerFragment = require ('../e2e/page-objects/header')

export class navigateToNoExistingPage {

elementsCheck () {
    cy.openNotExistingHomePage ()
    cy.wait (2000)
    cy.get (noFoundPage.textOne).should ('be.visible')
    cy.get (noFoundPage.textTwo).should ('be.visible')
    cy.get (noFoundPage.accountSummaryButton).should ('be.visible')
    cy.get (headerFragment.accountIcon).should ('be.visible')
    cy.get (headerFragment.contactSupport).should ('be.visible')
    cy.get (headerFragment.burgerButton).should ('be.visible')
} 

elementsCheckAndPushButton () {
    cy.openNotExistingHomePage ()
    cy.get (noFoundPage.textOne).should ('be.visible')
    cy.get (noFoundPage.textTwo).should ('be.visible')
    cy.get (noFoundPage.accountSummaryButton).should ('be.visible')
    cy.get (noFoundPage.accountSummaryButton).click()
}

elementsCheckAndPushButtonAndOpenMenu () {
    cy.openNotExistingHomePage ()
    cy.get (noFoundPage.textOne).should ('be.visible')
    cy.get (noFoundPage.textTwo).should ('be.visible')
    cy.get (noFoundPage.accountSummaryButton).should ('be.visible')
    cy.get (headerFragment.burgerButton).click()
    cy.get (headerFragment.sideBarData).should ('be.visible')
    cy.get (headerFragment.closeBurgerMenu).click()
    cy.get (noFoundPage.accountSummaryButton).click()
}
}


export const navigateToNoPage = new navigateToNoExistingPage()
