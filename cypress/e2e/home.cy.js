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

  it('Test on language', () => {
      cy.get('button').find('svg.lucide-languages ').first().parent('button').click()
      cy.contains('الرئيسية').should('be.visible')
  })

   it('Test on dark mode', () => {
      cy.get('button').find('svg.lucide-moon ').first().parent('button').click()
      cy.get('html').should('have.class', 'dark') 
  })

} )