const headerFragment = {
    get burgerButton () {return ('button[data-testid=\"burger-button"\]')},
    get closeBurgerMenu () {return ('button[data-testid=\"close-sidebar"\]')},
    get contactSupport () {return ('[data-testid="ContactSupportOutlinedIcon"]')},
    get accountIcon () {return ('[data-testid="AccountCircleOutlinedIcon"]')},
    get sideBarData () {return ('[data-testid="sidebar"] > .MuiPaper-root')},
    get profileDropDown () {return ('ul > a > div.MuiListItemText-root.css-1tsvksn > span')},
    get accountSummaryIcon () {return ('.active > .MuiButtonBase-root > .MuiListItemIcon-root')},
    get invoicesIcon () {return ('[href="/invoices"] > .MuiButtonBase-root > .MuiListItemIcon-root')},
    get paymentsIcon () {return ('[href="/payments"] > .MuiButtonBase-root > .MuiListItemIcon-root')},
    get makePaymentIcon () {return ('.active > .MuiButtonBase-root > .MuiListItemIcon-root')},
}


module.exports = headerFragment;