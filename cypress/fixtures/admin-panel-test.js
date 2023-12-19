const adminPanelFragments = require ('../e2e/page-objects/admin_app_pageObj')

beforeEach (() => {
    cy.viewport(1380, 720)
  })

const userCredentials = {
    'Login': 'bogdan.kalinichenko@inspirededu.com',
    'Password': 'Test1234'
}

export class adminNavigationAndTest {

    openAdminAppAndTestSideBar () {

        cy.visit ('https://paymentadmin-test.inspirededu.com/')
        // cy.origin ('https://login.microsoftonline.com/', () => {
        //     // Cypress.require ('adminPanelFragments')
        //     cy.get ('#tilesHolder > div > div > div > div > div.table-cell.text-left.content').click ()
        //     cy.get ('input[type="email"]').type (userCredentials.Login)
        //     cy.get ('input[type="submit"]').click ()
            // cy.get ('input[name="passwd"]').type (userCredentials.Password)
        //     cy.get ('input[type="submit"]').click ()
        //     cy.wait (5000)
        //     cy.get ('input[id="idSIButton9"]').click ()
        // cy.get (adminPanelFragments.closesidebarButton).click ()
        // cy.get (adminPanelFragments.burgerButton).click ()
    }

    openAdminAppAndTestSideBarMenu () {
        cy.get (adminPanelFragments.tokensButton).click ({force: true})
        cy.url().should('eq', 'https://paymentadmin-test.inspirededu.com/tokens')
        cy.wait (1000)
        cy.get (adminPanelFragments.translationsButton).click ()
        cy.url().should('eq', 'https://paymentadmin-test.inspirededu.com/')
        cy.wait (1000)
        cy.get (adminPanelFragments.englishButton).click ()
        cy.url().should ('eq', 'https://paymentadmin-test.inspirededu.com/translations/en-GB')
        cy.get (adminPanelFragments.portuguesButton).click ()
        cy.url().should ('eq', 'https://paymentadmin-test.inspirededu.com/translations/pt-BR')

    }

    breadcrumbsTesting () {
        cy.get (adminPanelFragments.englishButton).click ()
        cy.wait (1000)
        cy.get (adminPanelFragments.breadcrumbsButton).click ()
        cy.url().should ('eq', 'https://paymentadmin-test.inspirededu.com/')
        cy.get (adminPanelFragments.portuguesButton).click ()
        cy.wait (1000)
        cy.get (adminPanelFragments.breadcrumbsButton).click ()
        cy.url().should ('eq', 'https://paymentadmin-test.inspirededu.com/')
    }

    closedSideBarTest () {
        cy.get (adminPanelFragments.closesidebarButton).click ()
        cy.wait (2000)
        cy.get (adminPanelFragments.closedSideBar).click ()
        cy.wait (2000)
        cy.get (adminPanelFragments.englishButton).click()
        cy.wait (2000)
        cy.get (adminPanelFragments.closedSideBar).click ()
        cy.wait (2000)
        cy.get (adminPanelFragments.portuguesButton).click ()
    }

    popupTest () {
        cy.openAdminApp ()
        cy.get (adminPanelFragments.translationsButton).click ()
        cy.wait (2000)
        cy.get (adminPanelFragments.popupButton).click ()
        cy.contains ('Title')
        .should ('be.visible')
        cy.get (adminPanelFragments.closePopupButton).click ()
    }

    closingPopupTest () {
        cy.get (adminPanelFragments.popupButton).click ()
        cy.contains ('Title')
        .should ('be.visible')
        cy.get (adminPanelFragments.closePopupIcon).click ()
    }


    }

export const adminNavigation = new adminNavigationAndTest