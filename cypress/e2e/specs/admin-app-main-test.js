const {adminNavigation, adminNavigationAndTest} = require ('../../fixtures/admin-panel-test')

describe ('Admin Panel test suite', () => {
  
  it ('Open Admin Application and Sidebar', () => {
    adminNavigation.openAdminAppAndTestSideBar ()
  })

  it ('Sidebar. User is able to Switch between tabs and open', () => {
    adminNavigation.openAdminAppAndTestSideBarMenu ()
  })

  it ('User is able to click on BreadCrumbs and proceed to HomePage', () => {
    adminNavigation.breadcrumbsTesting ()
  })

  it ('Sidebar. User is able to Switch between tabs when SideBar is closed', () => {
    adminNavigation.closedSideBarTest ()
  })

  // it ('User is able to open popup and close', () => {
  //   adminNavigation.popupTest ()
  // })

  // it ('User is able to close popup', () => {
  //   adminNavigation.closingPopupTest ()
  // })
    
    
})