const directDebitFragments = {
    get addButton () {return ('.MuiGrid-grid-xs-4 > .MuiButtonBase-root > :nth-child(2)')},
    get firstLabel () {return ('Direct Debits')},
    get secondLabel () {return ('Use Direct Debit to automatically pay your invoices from your bank account each month. It helps to avoid missed payments.')},
    get accountSummaryDDButton () {return (':nth-child(4) > .MuiPaper-root > .css-fb02d8 > .MuiBox-root > .MuiButtonBase-root')},
    get directDebitNavMenu () {return ('[href="/direct-debit"] > .MuiButtonBase-root')}

}

module.exports = directDebitFragments;