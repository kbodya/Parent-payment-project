const adminPanelFragments = {
    get tokensButton () {return ('div:nth-child(1) > a > div > div.MuiListItemText-root.css-1tsvksn > span')},
    get translationsButton () {return (':nth-child(3) > [data-testid="sidebar-nav-item"] > .MuiButtonBase-root')},
    get englishButton () {return ('[href="/translations/en-GB"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')},
    get portuguesButton () {return ('div:nth-child(4) > div > div > nav > a:nth-child(2) > div > div > span')},
    get closesidebarButton () {return ('button [data-testid="ChevronLeftIcon"]')},
    get signInField () {return ('input[type="email"]')},
    get nextButton () {return ('input[type="submit"]')},
    get passField () {return ('input[name="passwd"]')},
    get burgerButton () {return ('[data-testid="burger-button"]')},
    get breadcrumbsButton () {return ('div.MuiBox-root.css-70qvj9 > nav > ol > li:nth-child(1) > a')},
    get translationClosedSB () {return ('.MuiList-root > [href="/"]')},
    get englishClosedSB () {return ('.MuiPaper-root > .MuiList-root > [href="/translation/en-GB"]')},
    get portuguesClosedSB () {return ('.MuiPaper-root > .MuiList-root > [href="/translation/pt-BR"]')},
    get closedSideBar () {return (':nth-child(3) > [data-testid="sidebar-nav-item"] > .MuiButtonBase-root')},
    get popupButton () {return ('#root > div > main > div:nth-child(2) > button')},
    get closePopupButton () {return ('div.MuiDialogActions-root.MuiDialogActions-spacing.css-14b29qc > button')},
    get closePopupIcon () {return ('button[data-testid="inviteMember-close"]')},
    get tokenPageSearch () {return ('input[id=":r3:"]')},
    get tokenPageAddButton () {return ('button.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeSmall.MuiButton-textSizeSmall.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeSmall.MuiButton-textSizeSmall.css-1qcldzk')},
    get tokenPageThreeDots () {return ('tr:nth-child(1) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-alignRight.MuiTableCell-sizeMedium.css-9sup68 > button > svg')},



}

module.exports = adminPanelFragments;