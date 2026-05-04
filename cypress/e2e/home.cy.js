///<reference types="cypress"/>

import HomePage from '../pages/HomePage'

beforeEach('login', () => {
    HomePage.visit()
    cy.LoginToApp()
})

describe('Home Page', () => {

  it('verify homepage sections', () => {

    
    HomePage.checkImagesLoaded()
    HomePage.checkSiteLoaded()
    HomePage.checkNavigation()

  })

} )