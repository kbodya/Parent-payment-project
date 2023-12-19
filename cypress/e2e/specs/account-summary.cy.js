const openPortalApplication = require ('../../support/commands')
const accountSummary = require ('../page-objects/account-summary-page')
const headerFragment = require ('../page-objects/header')
const {onNavigationPage, navigationPage} = require ('../../fixtures/accountSummary-navigationPage')


describe ('OpenApplication', () => {  

it ('Open Portal Home Page', () => {
    cy.clearLocalStorage()
    cy.clearCookies()
     //cy.reload(true);
     cy.exec('npm cache clear --force') 
    cy.LoginToiSAMS ()
    cy.openPortalApplication ()
})

it ('Check elements on the Account Summary Page', () => {
    onNavigationPage.elementsCheckTwo ()
})

it ('Check elements on the Account Summary Page', () => {
    onNavigationPage.elementsCheckTwo ()
})

it ('Check elements on the Second block', () => {
    onNavigationPage.elementsCheck ()
})

it ('Open Burger Menu', () => {
    onNavigationPage.openBurgerMenu ()
})

it ('User is ale to close SideBar', () => {
    onNavigationPage.closeBurgerMenu ()
})

it ('Tooltip', () => {
    onNavigationPage.toolTipsforCharges ()
})

it ('Second ToolTip', () => {
    onNavigationPage.toolTipsforPayments ()
})

it ('TooltipAccountBalance', () => {
    onNavigationPage.toolTipsBalance ()
})

// it ('User is able to Proceed to Make Payment page from Account Summary', () => {
//     onNavigationPage.proceedToMakePayment ()
// })

// it ('User is able to Proceed to Direct Debit Page from Acoount Summary', () => {
//     onNavigationPage.ProceedToDDPage ()
// })
})