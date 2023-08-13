const {onNavigationPage, DDTestPage} = require ('../../fixtures/direct-debit-test')


describe ('Test of Direct Debit Page', () => {

    it ('User is able to proceed to Direct Debit Page', () => {
        
        onNavigationPage.testDerirectDebitPage ()
    })

    it ('User is able to check elements on the page and proceed to DD Stripe page', () => {

        onNavigationPage.testProceedToStripeDirectDebit ()
    })
})