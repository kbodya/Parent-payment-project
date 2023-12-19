const accountSummary = require ('../e2e/page-objects/account-summary-page')
const headerFragment = require ('../e2e/page-objects/header')
const profileContactUs = require ('../e2e/page-objects/profile-and-contact-us')
const makePayment = require ('../e2e/page-objects/make-payment')
const makePaymentCSS = require ('../support/css-commands-make-a-payment')
const successPageFragments = require ('../e2e/page-objects/success-page')
const boletoFragments = require ('../e2e/page-objects/boleto-fields-objects')
const payPerInvoice = require ('../e2e/page-objects/make-payment')
const invoiceCheck = require ('../e2e/page-objects/make-payment')

export class  navigateToMakePaymentPage {

PositiveTestOne () {
    cy.OpenMakePaymentTest()
    cy.url().should ('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/make-payment') 
    cy.wait (4000)
    cy.makePaymentCSS ()
    cy.get(makePayment.makePaymentButton).click().invoke('removeAttr', 'target')
    cy.wait (2000)
    // cy.origin ('https://checkout.stripe.com/c/pay', () => {
    //     cy.wait (3000)
    //     //cy.visit ('')
    // })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
}

PositiveTestTwo () {
    cy.OpenMakePaymentTest()
    cy.url().should ('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/make-payment') 
    cy.wait (2000)
    cy.get(makePayment.radioPaymentDueNow).click()
    .invoke('removeAttr', 'target')
    cy.get(makePayment.makePaymentButton).click()
    cy.wait (2000)
    cy.origin ('https://checkout.stripe.com/c/pay', () => {
        cy.wait (3000)
        //cy.visit ('')

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })
}

PositiveTestThree () {
    
    // const getStripeIFrameDocument = () => {
    //   return cy.checkElementExists(`iframe[name^="${STRIPE_IFRAME_PREFIX}"]`).iframeCustom()
    // }
    cy.wait (2000)
    cy.intercept ('POST', 'https://r.stripe.com/0'). as ('postPayment')
    cy.OpenMakePaymentTest()
    cy.wait (3000)
    cy.get (makePayment.radtioCustomAmount).click()
    cy.get (makePayment.textInputField).type (100)
    .invoke('removeAttr', 'target')
    cy.get (makePayment.makePaymentButton).click()
    cy.wait (2000)
    //cy.wait ('@postPayment').then ( tqatq => {
    //    console.log (tqatq)})
    // cy.origin ('https://checkout.stripe.com/c/pay', () => {
    //     //cy.visit ('')
    // })

            //1 
    //     it ('qweqweqwe', () => {
    //         cy.origin ('https://checkout.stripe.com/')
    //         getStripeIFrameDocument().find('input[data-elements-stable-field-name="cardNumber"]').type(CARD_DETAILS.cardNumber)
    //         getStripeIFrameDocument().find('input[data-elements-stable-field-name="cardExpiry"]').type(CARD_DETAILS.cardExpiry)
    //         getStripeIFrameDocument().find('input[data-elements-stable-field-name="cardCvc"]').type(CARD_DETAILS.cardCvc)
    //  })

            //2
        //  cy.origin ('https://checkout.stripe.com/', { args: { number} }, ({ number}) =>  {
        //      cy.visit ('/c/pay' + number)})
    
            //3
        // cy.url().then((url) => {
        //     const uniqueEndpoint = url.split("someRegEx")[1];
        //   });
    }

NegativeTestOne () {
    cy.OpenMakePaymentTest()
    cy.wait (3000)
    cy.get (makePayment.radtioCustomAmount).click()
    cy.get(makePayment.makePaymentButton).click()
    cy.contains ('Should be greater than or equal to 1!').should ('be.visible')

}

NegativeTestTwo () {
    cy.OpenMakePaymentTest()
    cy.wait (4000)
    cy.get (makePayment.textInputField).type (100001)
    cy.get(makePayment.makePaymentButton).click()
    cy.wait (1000)
    cy.contains ('Should be less than or equal to 100000!').should ('be.visible')

}

NegativeTestThree () {
    cy.OpenMakePaymentTest()
    cy.wait (4000)
    cy.get (makePayment.textInputField).type (0.01)
    cy.get(makePayment.makePaymentButton).click()
    cy.contains ('Should be greater than or equal to 1!').should ('be.visible')

}

PosTestMakePayment () {
    cy.OpenMakePaymentTest()
    cy.wait (3000)
    cy.get (makePayment.textInputField).type (8000)
    cy.get(makePayment.makePaymentButton).click()
    cy.wait (1000)

}

PostTestMakePaymentCustom () {
    cy.OpenMakePaymentTest()
    cy.wait (4000)
    cy.get (makePayment.textInputField).type (1)
    cy.get(makePayment.makePaymentButton).click()
    cy.wait (2000)
    cy.origin ('https://checkout.stripe.com', () => {
        cy.get ('input[id="cardNumber"]').type (4242424242424242)
        cy.get ('input[id="cardExpiry"]').type (1223)
        cy.get ('input[name="cardCvc"]').type (123)
        cy.get ('input[name="billingName"]').type ('BogdanTest')
        cy.get ('button[type="submit"]').click ()

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })

    })
    cy.wait (9000)
        //cy.get ('Go to Payments').should ('be.visible')
        cy.contains (successPageFragments.mainText).should ('be.visible')
        cy.contains (successPageFragments.secondText).should ('be.visible')
        cy.get (successPageFragments.goToPaymentsButton).click ()
        cy.wait (2000)
        cy.url().should('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/payments') // => forUAT
        //cy.url().should ('eq', 'https://dummyschool-paymentportal-test.inspirededu.com/payments') // => forTEST

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
  }

  PosTestSecondMakePayment () {
    cy.OpenMakePaymentTest()
    cy.wait (4000)
    cy.get (makePayment.textInputField).type (1)
    cy.get(makePayment.makePaymentButton).click()
    cy.wait (2000)
    cy.origin ('https://checkout.stripe.com', () => {
        cy.get ('input[id="cardNumber"]').type (4242424242424242)
        cy.wait (1000)
        cy.go('back')
        // cy.get (makePayment.stripeBackLink)
        // const _ = Cypress.require (makePayment.stripeBackLink)
        // .trigger ('mouseover', ({force: true})).invoke ('show')
        // .click ()

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
    })
    cy.url().should('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/make-payment') // => forUAT
  }

  MakePaymentTestStripe () {
    cy.OpenMakePaymentTest()
    cy.wait (4000)
    cy.get (makePayment.textInputField).type (1)
    cy.get(makePayment.makePaymentButton).click()
    cy.wait (2000)
    cy.origin ('https://checkout.stripe.com', () => {
        // cy.get ('input[inputmode="email"]').type ('bokal@ciklum.com')
        cy.get ('input[id="cardNumber"]').type (1111111111111111)
        cy.get ('input[id="cardExpiry"]').type (1223)
        cy.get ('input[name="cardCvc"]').type (123)
        cy.get ('input[name="billingName"]').type ('BogdanTest')
        cy.contains ('Your card number is invalid.').should ('be.visible')

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
  }

  MakePaymentCCTestStripe () {
    cy.OpenMakePaymentTest()
    cy.wait (4000)
    cy.get (makePayment.textInputField).type (1)
    cy.get(makePayment.makePaymentButton).click()
    cy.wait (2000)
    cy.origin ('https://checkout.stripe.com', () => {
        // cy.get ('input[inputmode="email"]').type ('bokal@ciklum.com')
        cy.get ('input[id="cardNumber"]').type (4242424242424242)
        cy.get ('input[id="cardExpiry"]').type (1212)
        cy.get ('input[name="cardCvc"]').type (123)
        cy.get ('input[name="billingName"]').type ('BogdanTest')
        cy.get ('#cardNumber-fieldset-inner > div:nth-child(4) > span').should ('be.visible')
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
  }

  MakepaymentOverpayment () {
    cy.OpenMakePaymentTest()
    cy.contains ('Please choose an amount').should ('be.visible')
    cy.wait (4000)
    cy.get (makePayment.textInputField).type (99999)
    cy.get(makePayment.makePaymentButton).click()
    cy.wait (2000)
    cy.origin ('https://checkout.stripe.com', () => {
        cy.get ('input[id="cardNumber"]').type (4242424242424242)
        cy.get ('input[id="cardExpiry"]').type (1224)
        cy.get ('input[name="cardCvc"]').type (123)
        cy.get ('input[name="billingName"]').type ('BogdanTest')
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
  })
}

MakePaymentBoletoPayment () {
    cy.OpenMakePaymentTest()
    cy.contains ('Please choose an amount').should ('be.visible')
    cy.wait (4000)
    cy.get (makePayment.textInputField).type (10)
    cy.get ('.css-mbkma0 > .css-bdavag')
    .should ('contain', 'Boleto')
    .click ()
    cy.get(makePayment.makePaymentButton).click()
    cy.wait (2000)
}

MakePaymentInvoicePayment () {
    cy.OpenMakePaymentTest()
    cy.contains ('Please choose an amount').should ('be.visible')
    cy.wait (4000)
    cy.get (makePayment.payPerInvoice).click ()
    cy.get (makePayment.invoiceCheck).click ()
    cy.get (makePayment.makePaymentButton).click ()
    cy.origin ('https://checkout.stripe.com', () => {
        // cy.get ('input[inputmode="email"]').type ('bokal@ciklum.com')
        cy.get ('input[id="cardNumber"]').type (4242424242424242)
        cy.get ('input[id="cardExpiry"]').type (1212)
        cy.get ('input[name="cardCvc"]').type (123)
        cy.get ('input[name="billingName"]').type ('BogdanTest')
        cy.get ('#cardNumber-fieldset-inner > div:nth-child(4) > span').should ('be.visible')
        
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        
          }    )}
    )
}
    
MakePaymentInvoicePaymentWithBoleto () {
    cy.OpenMakePaymentTest()
    cy.wait (2000)
    cy.contains ('Please choose an amount').should ('be.visible')
    cy.get (makePayment.payPerInvoice).click ()
    cy.get (makePayment.invoiceCheck).click ()
    cy.wait (1000)
    cy.get ('.css-mbkma0 > .css-bdavag')
    .should ('contain', 'Boleto')
    .click ()
    cy.get(makePayment.makePaymentButton).click()
    cy.wait (2000)
}

}

export const navigateToMakePayment = new navigateToMakePaymentPage ()