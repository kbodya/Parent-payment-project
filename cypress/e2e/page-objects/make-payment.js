const makePayment = {
    get radioAccountBalance () {return ('input[value="accountBalance"]')},
    get radioPaymentDueNow () {return ('input[value="paymentDueNow"]')},
    get radtioCustomAmount () {return ('input[value="customAmount"]')},
    get makePaymentButton () {return ('button[type="submit"]')},
    get textInputField () {return ('input[name="amount"]')},
    get lowPriceError () {return ('Must be less than or equal to 1!')},
    get stripeBackLink () {return ('#root > div > div > div.App-Overview > header > div > div.Header-business.flex-item.width-grow.flex-container.align-items-center > a > div > div > div.Header-merchantLogoContainer > div > div')},
    get payPerInvoice () {return ('button[tabindex="-1"]')},
    get invoiceCheck () {return ('div.MuiPaper-root.MuiPaper-outlined.MuiPaper-rounded.css-5tse7r > div > div:nth-child(3) > div > div')}
}

module.exports = makePayment;