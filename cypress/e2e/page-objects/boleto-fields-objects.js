const boletoFragments = {
    get nameField () {return ('input[id="billingName"]')},
    get CPFCNPJ () {return ('input[id="taxId"]')},
    get addressLine1 () {return ('input[id="billingAddressLine1"]')},
    get addressLine2 () {return ('input[id="billingAddressLine1"]')},
    get neighborhood () {return ('input[id="billingDependentLocality"]')},
    get city () {return ('input[id="billingLocality"]')},
    get state () {return ('select[id="billingAdministrativeArea"]')},
    get postalCode () {return ('input[id="billingPostalCode"]')},
    get boletoOption () {return ('button[id="boleto-tab"]')},
    get payButton () {return ('button[type="submit"]')}

}

module.exports = boletoFragments;