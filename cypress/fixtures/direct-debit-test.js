const headerFragment = require ('../e2e/page-objects/header')
const directDebitFragments = require ('../e2e/page-objects/direct-debit')

export class DDTestPage {

    testDerirectDebitPage () {

        cy.openPortalApplication ()
        cy.wait (5000)
        cy.get (headerFragment.burgerButton).click ()
        cy.get (directDebitFragments.directDebitNavMenu).click ()

    }

    testProceedToStripeDirectDebit () {
        cy.contains (directDebitFragments.firstLabel).should ('be.visible')
        cy.contains (directDebitFragments.secondLabel).should ('be.visible')
        cy.contains ('Add').should ('be.visible')
        cy.get (directDebitFragments.addButton).click ()
        cy.wait (5000)
    }

}

export const onNavigationPage = new DDTestPage()