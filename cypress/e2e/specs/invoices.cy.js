const openPortalApplication = require ('../../support/commands')
const accountSummary = require ('../page-objects/account-summary-page')
const headerFragment = require ('../page-objects/header')
const invoicesFragments = require ('../page-objects/invoice-page')
const payInvoiceButton = require ('../page-objects/invoice-page')


describe ('User is able to open Invoices', () => {

    it ('Open application and click Invoices', () => {
        // cy.clearLocalStorage()
        // cy.clearCookies()
        //  //cy.reload(true);
        // cy.exec('npm cache clear --force') 
        // cy.LoginToiSAMS ()
        cy.intercept ('GET', 'https://rhsydney-paymentportal-uat.inspirededu.com/api/invoices',  
        {fixture: 'invoices-data.json',
        statusCode: 200,
        headers: {
            'method': 'GET',
            'authority': 'rhsydney-paymentportal-uat.inspirededu.com/'
        }
        })
    })

    it ('Test Invoices', () => {
        cy.openPortalApplication ()
        cy.wait (3000)
        cy.get (headerFragment.burgerButton).click()
        cy.contains ('Invoices').click()
        cy.get (invoicesFragments.invoinceTable).should ('be.visible')
        cy.wait (1000)
        cy.get (invoicesFragments.makePayment).should ('be.visible')

    })

    it ('User is able to Proceed to MakePayment page from Invoices', () => {
        cy.get (invoicesFragments.makePayment).click ()
        cy.wait (3000)
        cy.url().should('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/make-payment') // => true

    })

    it ('User is able Pay from Invoices page, pay for specific Invoice using CC', () => {
        cy.openPortalApplication ()
        cy.wait (3000)
        cy.get (headerFragment.burgerButton).click()
        cy.contains ('Invoices').click()
        cy.url().should ('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/invoices')
        cy.get (invoicesFragments.payInvoiceButton).click ()
        cy.wait (1000)
        cy.get (invoicesFragments.makePaymentButton).click ()

    })

    it ('User is able Pay from Invoices page, pay for specific Invoice using Boleto', () => {
        cy.openPortalApplication ()
        cy.wait (2000)
        cy.get (headerFragment.burgerButton).click()
        cy.contains ('Invoices').click()
        cy.url().should ('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/invoices')
        cy.wait (2000)
        cy.get (invoicesFragments.payInvoiceButton).click ()
        cy.contains ('Please choose an amount').should ('be.visible')
        cy.get ('.css-mbkma0 > .css-bdavag')
        .should ('contain', 'Boleto')
        .click ()
        cy.get (invoicesFragments.makePaymentButton).click ()
        cy.wait (2000)

    })
})
