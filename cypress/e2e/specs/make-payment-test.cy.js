const {navigateToMakePayment, navigateToMakePaymentPage} = require ('../../fixtures/make-payment-navigateTest')


describe ('Make Payment Page Tests', () => {

it ('User is able to open make a Payment Page and proceed to Strype (Account Balance)', () => {
    navigateToMakePayment.PositiveTestOne ()
})

it ('User is able to open make a Payment Page and proceed to Strype (Payment Due Now)', () => {
    navigateToMakePayment.PositiveTestTwo ()
})

it ('User is able to open make a Payment Page and proceed to Strype (Payment Due Now)', () => {
    navigateToMakePayment.PositiveTestThree ()
})

it ('User is not able to Submit if Custom Amount is not pre-filled)', () => {
    navigateToMakePayment.NegativeTestOne ()
})

it ('User is not able to Submit if Custom Amount more than 100.000)', () => {
    navigateToMakePayment.NegativeTestTwo ()
})

it ('User is not able to Submit with 0.01 SUM', () => {
    navigateToMakePayment.NegativeTestThree ()
})

it ('User is able to type and submit a AccountBalance value as Custom Amount', () => {
    navigateToMakePayment.PosTestMakePayment ()
})

it ('User is able to chose Custom Amount, type 1 and pay', () => {
    navigateToMakePayment.PostTestMakePaymentCustom ()
})

it ('User is able to click Back being on the Stripe checkout page', () => {
    navigateToMakePayment.PosTestSecondMakePayment ()
})

it ('User is not able to type not valid cards numbers', () => {
    navigateToMakePayment.MakePaymentTestStripe ()
})

it ('User is not able to type not past cards expiration year', () => {
    navigateToMakePayment.MakePaymentCCTestStripe ()
})

it ('User is able to proceed to Stripe checkout with overpayment amount', () => {
    navigateToMakePayment.MakepaymentOverpayment ()
})

// it ('User is able to Pay using Boleto payment', () => {
//     navigateToMakePayment.MakePaymentBoletoPayment ()
// })

it ('User is able to swich to Pay Per Invoice and proceed with Card Payment', () => {
    navigateToMakePayment.MakePaymentInvoicePayment ()
})

it ('User is able to swich to Pay Per Invoice and proceed with Card Payment', () => {
    navigateToMakePayment.MakePaymentInvoicePaymentWithBoleto ()
})
    

})