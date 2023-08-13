const {navigateToNoPage, navigateToNoExistingPage} = require ('../../fixtures/not-found-object')
const noFoundPage = require ('../page-objects/not-found-page')


describe ('User is able to Open Noe existing Page', () => {

    it ('Open Not Existing Page and check elements', () => {
        navigateToNoPage.elementsCheck()
    })

    it ('User is able to open NotExistingPage, check elements and click on button to return to HomePage', () => {
        navigateToNoPage.elementsCheckAndPushButton()
    })

    it ('User is able to open NotExistingPage, check elements, open and close Menu and click on button to return to HomePage', () => {
        navigateToNoPage.elementsCheckAndPushButtonAndOpenMenu()
    })
})