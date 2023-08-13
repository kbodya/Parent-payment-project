const accountSummary = require ('../e2e/page-objects/account-summary-page')
const headerFragment = require ('../e2e/page-objects/header')
const accountSummaryCSS = require ('../support/css-commands-account-summary')
const sideBarCSS = require ('../support/css-commands-account-summary')
const directDebitFragments = require ('../e2e/page-objects/direct-debit')

export class navigationPage {

    elementsCheckTwo () {
        cy.openPortalApplication ()
        cy.wait (5000)
        cy.SwitchToEnglish ()
        cy.accountSummaryCSS ()
        cy.contains ('Charges').should ('be.visible')
        cy.contains ('Credits').should ('be.visible')
        cy.contains ('Payments received').should ('be.visible')
        cy.get (accountSummary.makePaymentButton).should ('be.visible')
        cy.get (headerFragment.burgerButton).should ('be.visible')
        cy.get (headerFragment.accountIcon).should ('be.visible')
        cy.get (headerFragment.contactSupport).should ('be.visible')
    }

    openBurgerMenu () {
        cy.get (headerFragment.burgerButton).click()
        cy.sideBarCSS ()
        cy.get (headerFragment.sideBarData)
        .should ('be.visible')
        cy.wrap ('[data-testid="sidebar"] > .MuiPaper-root')
        cy.contains ('Invoices').should ('be.visible')
        cy.contains ('Make Payment').should ('be.visible')

    }

    toolTipsforCharges () {
        cy.contains ('Charges')
        cy.get (accountSummary.tuitionFeesTooltip)
        .trigger ('mouseover', ({force: true})).invoke ('show')
        cy.contains ('Tuition fees and any other charges covered in the contract that you have with the school')
    }

    toolTipsBalance () {
        cy.get (accountSummary.accountBalanceTooltip)
        .trigger ('mouseover', ({force: true})).invoke ('show')
        cy.contains ('The difference between total charges on your account and the total of credits and payments')
    }

    toolTipsforPayments () {
        cy.contains ('Charges')
        cy.get (accountSummary.creditsTooltip)
        .trigger ('mouseover', ({force: true})).invoke ('show')
        cy.contains ('Credit notes and adjustments to your account, which may be generated if we need to cancel and re-issue an invoice')
    }
    
    closeBurgerMenu () {
        cy.get (headerFragment.closeBurgerMenu).click ()
    }

    elementsCheck () {
        cy.contains ('Charges').then (firstForm => {
            const accountForm = firstForm.text ()
            expect (accountForm).to.equal ('Charges')
    })
        cy.contains ('Tuition fees').then (firstForm => {
            const accountForm = firstForm.text ()
            expect (accountForm).to.equal ('Tuition fees')
    })
        cy.contains ('Other charges').then (firstForm => {
            const accountForm = firstForm.text ()
            expect (accountForm).to.equal ('Other charges')

    })
    }

    proceedToMakePayment () {
        cy.get (accountSummary.makePaymentButton).click ({ multiple: true })
        cy.wait (4000)
        cy.url().should('eq', 'https://eebot-paymentportal-uat.inspirededu.com/make-payment') // => forUAT
        //cy.url().should('eq', 'https://dummyschool-paymentportal-test.inspirededu.com/make-payment') // => true TEST

    }

    ProceedToDDPage () {
        cy.openPortalApplication ()
        cy.wait (3000)
        cy.get (directDebitFragments.accountSummaryDDButton).click ()
        cy.contains ('Add').should ('be.visible')
        cy.contains (directDebitFragments.secondLabel).should ('be.visible')
        cy.contains (directDebitFragments.firstLabel).should ('be.visible')
        cy.url().should('eq', 'https://eebot-paymentportal-uat.inspirededu.com/direct-debit') // => forUAT
       //cy.url().should('eq', 'https://dummyschool-paymentportal-test.inspirededu.com/direct-debit') // => true TEST

    }
}

export const onNavigationPage = new navigationPage()