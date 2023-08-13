const headerFragment = require ('../e2e/page-objects/header')
const accountSummary = require ('../e2e/page-objects/account-summary-page')
const makePayment = require ('../e2e/page-objects/make-payment')


Cypress.Commands.add ('accountSummaryCSS', () => {
    cy.get (accountSummary.firstBlock).should ('have.css', 'color', 'rgba(0, 0, 0, 0.87)')
    cy.get (accountSummary.secondBlock).should ('have.css', 'color', 'rgba(0, 0, 0, 0.87)')
    cy.get (accountSummary.thirdBlock).should ('have.css', 'color', 'rgba(0, 0, 0, 0.87)')

    //cy.get (headerFragment.accountIcon).should ('have.css', 'Height', '20px')
    //cy.get (headerFragment.accountIcon).should ('have.css', 'Width', '20px')

    //cy.get (headerFragment.contactSupport).should ('have.css', 'Height', '22.59px')
    //cy.get (headerFragment.contactSupport).should ('have.css', 'Width', '19px')
    //cy.get ('[data-testid="header"] > .MuiToolbar-root').should ('have.css', 'Width', '1000px')
    cy.get (accountSummary.creditsTooltip).should ('have.css', 'color', 'rgba(0, 0, 0, 0.54)')
    cy.get (accountSummary.accountBalanceTooltip).should ('have.css', 'color', 'rgba(0, 0, 0, 0.54)')
})

Cypress.Commands.add ('sideBarCSS', () => {
    cy.get(headerFragment.accountSummaryIcon).should('have.css', 'color', 'rgba(0, 0, 0, 0.54)')
    cy.get(headerFragment.invoicesIcon).should('have.css', 'color', 'rgba(0, 0, 0, 0.54)')
    cy.get(headerFragment.paymentsIcon).should('have.css', 'color', 'rgba(0, 0, 0, 0.54)')
    cy.get(headerFragment.makePaymentIcon).should('have.css', 'color', 'rgba(0, 0, 0, 0.54)')

})

