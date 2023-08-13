const openPortalApplication = require ('../../support/commands')
const headerFragment = require ('../page-objects/header')
const accountSummary = require ('../page-objects/account-summary-page')
const profileContactUs = require ('../page-objects/profile-and-contact-us')
const {navigateToContactProfile, navigateToProfileContactPage} = require ('../../fixtures/profile-and-contact-us-navigationPage')


describe ('To proceed to Profile and to Contact page', () => {

    it ('User is able to proceed to Profile page and check data', () => {
        navigateToContactProfile.profileToCheckDataElements()
    })

    it ('User successfully redirected to the ContactUs page and can see all page data', () => {
        navigateToContactProfile.promProfileToContact()
    })
    
    it ('ContactUs page contains labels', () => {
        navigateToContactProfile.contactUspage()
    })

    it ('User not able to Submit form without data', () => {
        navigateToContactProfile.contactUspageSecondTest()
    })

    it ('User not able to Submit form if one data is selected',() => {
        navigateToContactProfile.contactUspageThirdTest()
    })

    it ('User not able to Submit form if one data is selected', () => {
        navigateToContactProfile.contactUspageFourTest()
    })

    it ('User is able to Submit Form', () => {
        navigateToContactProfile.contactUspageFiveTest()
    })

    it ('User not able to Submit form if one option is not pre-filled', () => {
        navigateToContactProfile.contactUspageSixTest()
    })

    it ('User not able to Submit form if more than 500 characters', () => {
        navigateToContactProfile.contactUspageSevenTest()
    })

    it ('User is able to Submit form with Other and 499 characters', () => {
        navigateToContactProfile.contactUspageEigthTest()
    })

    it ('User is able to Submit form with Financial and 499 characters', () => {
        navigateToContactProfile.contactUspageNinTest()
    })
    
    it ('User is able to Submit form with Academic and 499 characters', () => {
        navigateToContactProfile.contactUspageTenTest()
    })

    it ('User is able attach file, add a character and Submit form', () => {
        navigateToContactProfile.contactUspageELTest()
    })

    it ('User is able attach file, add a 499 character and Submit form', () => {
        navigateToContactProfile.contactUspageTLTest()
    })

    it ('User is not able to Submit Form when only file is aploaded', () => {
        navigateToContactProfile.contactUspageTTTest()
    })

    it ('User is not able to see Upload file after changing option', () => {
        navigateToContactProfile.contactUspageNGTest()
    })

    it ('User is able to Proceed to ContactUs from Invoice and submit form', () => {
        navigateToContactProfile.contactUspageNNTest() 
    })

    it ('User is able to Proceed to ContactUs from Make a Payment Page and submit form', () => {
        navigateToContactProfile.contactUspageLKTest()
    })

    it ('User is not able to Submit form if only space is added', () => {
        navigateToContactProfile.contactUsPagePosTest()
    })
 
})