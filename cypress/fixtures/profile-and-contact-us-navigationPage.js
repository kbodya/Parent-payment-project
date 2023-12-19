const accountSummary = require ('../e2e/page-objects/account-summary-page')
const headerFragment = require ('../e2e/page-objects/header')
const profileContactUs = require ('../e2e/page-objects/profile-and-contact-us')

export class navigateToProfileContactPage {

    profileToCheckDataElements() {
        cy.intercept ('GET', 'https://rhsydney-paymentportal-uat.inspirededu.com/api/profile', {fixture: 'profile-data.json'})
        //cy.request ('GET', 'https://dummyschool-paymentportal-test.inspirededu.com/api/profile', {fixture: 'profile-data.json'})
        cy.openPortalApplication()
        cy.get(headerFragment.accountIcon).click()
        cy.get (headerFragment.profileDropDown).click ()
        // .then((qaresponse) => {
        //     expect (qaresponse.statusCode).to.equal (200)
        //     expect(qaresponse).to.include.keys('headers', 'duration')
        cy.contains ('Please Contact us to update your profile details.').should ('be.visible')
        cy.url().should ('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/profile')
    
    }

promProfileToContact () {
    cy.get (profileContactUs.contactUsButton).click({force: true})

}

 contactUspage () {
    cy.wait (2000)
    cy.contains ('Please, fill the form below to send us your query').then (dropdownFirst => {
        const qaOption = dropdownFirst.find (profileContactUs.optionOne).text()
        const qaOptionTwo = dropdownFirst.find (profileContactUs.optionTwo).text()
        expect (qaOption).to.equal ('')
        expect (qaOptionTwo).to.equal ('')

    })
}

contactUspageSecondTest () {
    cy.get (profileContactUs.submitButton).click()
    //cy.get (profileContactUs.validationBorder).should ('be.visible')
    cy.contains ('This field is required').should ('be.visible')
    cy.get (profileContactUs.validationTextField).should ('be.visible')
    cy.contains ('This field is required').should ('be.visible')

}

contactUspageThirdTest () {
    // cy.get (profileContactUs.listArrowFirst).should ('be.visible')
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="0"]').click()
    cy.get (profileContactUs.submitButton).click()
    cy.get (profileContactUs.validationTextField).should ('be.visible')
    cy.contains ('This field is required').should ('be.visible')

}

contactUspageFourTest () {
    // cy.get (profileContactUs.listArrowFirst).should ('be.visible')
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="1"]').click()
    cy.get (profileContactUs.submitButton).click()
    cy.get (profileContactUs.validationTextField).should ('be.visible')
    cy.contains ('This field is required').should ('be.visible')

    // cy.get (profileContactUs.listArrowFirst).should ('be.visible')
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="2"]').click()
    cy.get (profileContactUs.submitButton).click()
    cy.get (profileContactUs.validationTextField).should ('be.visible')
    cy.contains ('This field is required').should ('be.visible')

    // cy.get (profileContactUs.listArrowFirst).should ('be.visible')
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="3"]').click()
    cy.get (profileContactUs.submitButton).click()
    cy.get (profileContactUs.validationTextField).should ('be.visible')
    cy.contains ('This field is required').should ('be.visible')
} 

contactUspageFiveTest () {
    cy.intercept ('POST', 'https://rhsydney-paymentportal-uat.inspirededu.com/api/contact-us').as ('postContact')
    //cy.intercept ('POST', 'https://dummyschool-paymentportal-test.inspirededu.com/api/contact-us').as ('postContact')
    cy.openPortalApplication()
    cy.get(headerFragment.accountIcon).click()
    cy.get (headerFragment.profileDropDown).click ()
    cy.get (profileContactUs.contactUsButton).click({force: true})
    cy.wait (2000)
    // cy.get (profileContactUs.listArrowFirst).should ('be.visible')
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="3"]').click()
    cy.get (profileContactUs.fieldType).type ('This is test message')
    cy.get (profileContactUs.submitButton).click()
    //cy.url().should('eq', 'https://dummyschool-paymentportal-test.inspirededu.com/') // => trueTEST
    cy.wait ('@postContact').then ( xhr => {
        //console.log (xhr)
        expect (xhr.response.statusCode).to.equal (200)
        //expect (xhr.response.body).to.equal ('')
        // cy.url().should ('eq', 'https://eebot-paymentportal-uat.inspirededu.com/')

    })    
    cy.url().should ('contain', 'https://rhsydney-paymentportal-uat.inspirededu.com/?academicYear=2022')
}

contactUspageSixTest () {
    cy.get(headerFragment.accountIcon).click()
    cy.get (headerFragment.profileDropDown).click ()
    cy.get (profileContactUs.contactUsButton).click({force: true})
    cy.get (profileContactUs.fieldType).type ('This is test message')
    cy.get (profileContactUs.submitButton).click()
    cy.get (profileContactUs.validationTextField).should ('be.visible')
    cy.contains ('This field is required').should ('be.visible')
}

contactUspageSevenTest () {
    // cy.get (profileContactUs.listArrowFirst).should ('be.visible')
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="3"]').click()
    cy.get (profileContactUs.fieldType).type (profileContactUs.text)
    cy.get (profileContactUs.submitButton).click()
    cy.contains ('Must be at most 500 characters').should ('be.visible')
}

contactUspageEigthTest () {
    cy.intercept ('POST', 'https://rhsydney-paymentportal-uat.inspirededu.com/api/contact-us').as ('postContact')
    //cy.intercept ('POST', 'https://dummyschool-paymentportal-test.inspirededu.com/api/contact-us').as ('postContact')
    cy.openPortalApplication()
    cy.get(headerFragment.accountIcon).click()
    cy.get (headerFragment.profileDropDown).click ()
    cy.wait (1000)
    cy.get (profileContactUs.contactUsButton).click({force: true})
    cy.wait (3000)
    cy.url().should ('eq', 'hhttps://rhsydney-paymentportal-uat.inspirededu.com/contact-us')
    //cy.get (profileContactUs.listArrowFirst).should ('be.visible')
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="3"]').click()
    cy.get (profileContactUs.fieldType).type (profileContactUs.validQtyText)
    cy.get (profileContactUs.submitButton).click()
    cy.wait (2000)
    //cy.url().should('eq', 'https://dummyschool-paymentportal-test.inspirededu.com/') // => trueTEST
    cy.wait ('@postContact').then ( xhr => {
        //console.log (xhr)
        expect (xhr.response.statusCode).to.equal (200)
    })
    cy.contains ('Your query was sent successfully. Thanks.').should ('be.visible')
    cy.get (profileContactUs.successBlock).should ('be.visible')
    cy.url().should ('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/?academicYear=2022')

}

contactUspageNinTest () {
    cy.intercept ('POST', 'https://rhsydney-paymentportal-uat.inspirededu.com/api/contact-us').as ('postContact')
    //cy.intercept ('POST', 'https://dummyschool-paymentportal-test.inspirededu.com/api/contact-us').as ('postContact')
    cy.openPortalApplication()
    cy.get(headerFragment.accountIcon).click()
    cy.get (headerFragment.profileDropDown).click ()
    cy.wait (2000)
    cy.get (profileContactUs.contactUsButton).click({force: true})
    cy.wait (1000)
    // cy.get (profileContactUs.listArrowFirst).should ('be.visible')
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="0"]').click()
    cy.get (profileContactUs.fieldType).type (profileContactUs.validQtyText)
    cy.reload ()
    cy.get(headerFragment.accountIcon).click()
    cy.get (headerFragment.profileDropDown).click ()
    cy.wait (2000)
    cy.get (profileContactUs.contactUsButton).click({force: true})
    cy.wait (1000)
    // cy.get (profileContactUs.listArrowFirst).should ('be.visible')
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="0"]').click()
    cy.get (profileContactUs.fieldType).type (profileContactUs.validQtyText)
    cy.get (profileContactUs.submitButton).click()
    //cy.url().should('eq', 'https://dummyschool-paymentportal-test.inspirededu.com/') // => trueTEST
    cy.wait ('@postContact').then ( xhr => {
        //console.log (xhr)
        expect (xhr.response.statusCode).to.equal (200)
        //expect (xhr.response.body).to.equal ('')})
    })
    cy.contains ('Your query was sent successfully. Thanks.').should ('be.visible')
    cy.url().should ('contain', 'https://rhsydney-paymentportal-uat.inspirededu.com/?academicYear=2022')
    cy.get (profileContactUs.successBlock).should ('be.visible')
}

contactUspageTenTest () {
    cy.intercept ('POST', 'https://rhsydney-paymentportal-uat.inspirededu.com/api/contact-us').as ('postContact')
    //cy.intercept ('POST', 'https://dummyschool-paymentportal-test.inspirededu.com/api/contact-us').as ('postContact')
    cy.openPortalApplication()
    cy.get(headerFragment.accountIcon).click()
    cy.get (headerFragment.profileDropDown).click ()
    cy.get (profileContactUs.contactUsButton).click ()
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="1"]').click()
    cy.get (profileContactUs.fieldType).type (profileContactUs.validQtyText)
    cy.get (profileContactUs.submitButton).click()
    //cy.url().should('eq', 'https://dummyschool-paymentportal-test.inspirededu.com/') // => trueTEST
    cy.wait ('@postContact').then ( xhr => {
        //console.log (xhr)
        expect (xhr.response.statusCode).to.equal (200)
        //expect (xhr.response.body).to.equal ('')})
    cy.contains ('Your query was sent successfully. Thanks.').should ('be.visible')
    cy.get (profileContactUs.successBlock).should ('be.visible')
})
cy.url().should ('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/?academicYear=2022')
}

contactUspageELTest () {
    cy.intercept ('POST', 'https://rhsydney-paymentportal-uat.inspirededu.com/api/contact-us').as ('postContact')
    //cy.intercept ('POST', 'https://dummyschool-paymentportal-test.inspirededu.com/api/contact-us').as ('postContact')
    cy.openPortalApplication()
    const filepath = ('../../../../../../../Users/bohdan.kalinichenko/Desktop/Inspired-Edu-project/Parent-payment-project/cypress/fixtures/Sample-image-five-mb.jpg')
    cy.get(headerFragment.accountIcon).click()
    cy.get (headerFragment.profileDropDown).click ()
    cy.get (profileContactUs.contactUsButton).click({force: true})
    cy.wait (3000)
    cy.url().should ('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/contact-us')
    // cy.get (profileContactUs.listArrowFirst).should ('be.visible')
    cy.get (profileContactUs.dropDownButton).click({force: true})
    cy.get ('[data-value="2"]').click()
    cy.contains ('Upload File').click().selectFile (filepath) 
    cy.contains ('Complete').should ('be.visible')   
    cy.get (profileContactUs.fieldType).type (profileContactUs.smallQtyText)
    cy.get (profileContactUs.submitButton).click()
    cy.get (profileContactUs.disabledFirstField).should ('be.visible')
    cy.get (profileContactUs.disabledSecondField).should ('be.visible')
    cy.wait ('@postContact').then ( xhr => {
        //console.log (xhr)
        expect (xhr.response.statusCode).to.equal (200)})
        cy.url().should ('contain', 'https://rhsydney-paymentportal-uat.inspirededu.com/')
    cy.contains ('Your query was sent successfully. Thanks.').should ('be.visible')
    cy.get (profileContactUs.successBlock).should ('be.visible')
}

contactUspageTLTest () {
    cy.intercept ('POST', 'https://rhsydney-paymentportal-uat.inspirededu.com/api/contact-us').as ('postContact')
    //cy.intercept ('POST', 'https://dummyschool-paymentportal-test.inspirededu.com/api/contact-us').as ('postContact')
    cy.openPortalApplication()
    const filepath = ('../../../../../../../Users/bohdan.kalinichenko/Desktop/Inspired-Edu-project/Parent-payment-project/cypress/fixtures/Sample-image-five-mb.jpg')
    cy.get(headerFragment.accountIcon).click()
    cy.get (headerFragment.profileDropDown).click ()
    cy.get (profileContactUs.contactUsButton).click({force: true})
    //cy.get (profileContactUs.listArrowFirst).should ('be.visible')
    cy.wait (2000)
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="2"]').click()
    cy.contains ('Upload File').click().selectFile (filepath) 
    cy.contains ('Complete').should ('be.visible')   
    cy.url().should ('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/contact-us')
    cy.wait (3000)
    cy.get (profileContactUs.fieldType).type (profileContactUs.validQtyText)
    cy.get (profileContactUs.submitButton).click()
    cy.get (profileContactUs.disabledFirstField).should ('be.visible')
    cy.get (profileContactUs.disabledSecondField).should ('be.visible')
    cy.wait ('@postContact').then ( xhr => {
        //console.log (xhr)
        expect (xhr.response.statusCode).to.equal (200)})
        cy.url().should ('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/?academicYear=2022')
        cy.contains ('Your query was sent successfully. Thanks.').should ('be.visible')
    cy.get (profileContactUs.successBlock).should ('be.visible')
}

contactUspageTTTest () {
    cy.ContactUsPrefillData ()
}

contactUspageNGTest () {
    cy.ContactUsSecondPrefillData ()
}

contactUspageNNTest () {
    cy.openPortalApplication ()
    cy.get (headerFragment.burgerButton).click()
    cy.contains ('Invoices').click()
    cy.wait (5000)
    cy.ContactUsMain ()
}

contactUspageLKTest () {
    cy.openPortalApplication ()
    cy.get (headerFragment.burgerButton).click()
    cy.wait (1000)
    cy.get ('[href="/make-payment"] > .MuiButtonBase-root').click()
    cy.ContactUsMain ()
}

contactUsPagePosTest () {
    cy.openPortalApplication ()
    cy.get(headerFragment.accountIcon).click()
    cy.get (headerFragment.profileDropDown).click ()
    cy.wait (2000)
    cy.get (profileContactUs.contactUsButton).click({force: true})
    cy.wait (2000)
    cy.url().should ('eq', 'https://rhsydney-paymentportal-uat.inspirededu.com/contact-us')
    cy.get (profileContactUs.dropDownButton).click()
    cy.get ('[data-value="3"]').click()
    cy.get (profileContactUs.fieldType).type (" ")
    cy.get (profileContactUs.submitButton).click()
    cy.contains ('This field is required').should ('be.visible')   
}
}

 export const navigateToContactProfile = new navigateToProfileContactPage()
