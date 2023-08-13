const accountSummary = {
    get makePaymentButton () {return (':nth-child(3) > .MuiPaper-root > .css-fb02d8 > .MuiBox-root > .MuiButtonBase-root')},
    get firstBlock () {return (':nth-child(1) > .MuiPaper-root > .MuiBox-root')},
    get secondBlock () {return ('.MuiGrid-container > :nth-child(2) > .MuiPaper-root > .MuiBox-root')},
    get thirdBlock () {return ('div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.css-15j76c0 > div > div > ul')},
    get tuitionFeesTooltip () {return (':nth-child(1) > .MuiPaper-root > .MuiBox-root > .MuiList-root > :nth-child(1) > :nth-child(1) > .MuiListItemText-primary > [data-testid="InfoOutlinedIcon"] > path')},
    get accountBalanceTooltip () {return ('.css-15j76c0 > .MuiPaper-root > .MuiBox-root > .MuiList-root > :nth-child(1) > .MuiListItemText-root > .MuiListItemText-primary > [data-testid="InfoOutlinedIcon"]')},
    get creditsTooltip () {return (':nth-child(2) > .MuiPaper-root > .MuiBox-root > .MuiList-root > :nth-child(1) > :nth-child(1) > .MuiListItemText-primary > [data-testid="InfoOutlinedIcon"]')}

}
module.exports = accountSummary;