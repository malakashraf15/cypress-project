///<reference types="cypress"/>

import HomePage from '../pages/HomePage'

beforeEach('login', () => {
    HomePage.visit()
    cy.LoginToApp()
})


describe('Browse and open product from categories', () => {

 it('verify bags category', () => {   
cy.contains('a','Products').click()
cy.contains('span','Kéwi bags').click()
cy.contains('h3','COACH TOTEBAG').should('be.visible')
 })


 it('verify wallets category', () => {   
cy.contains('a','Products').click()
cy.contains('span','Kéwi wallets').click()
cy.contains('h3','LV Passport wallet').should('be.visible')
 })
  


it('verify wallets category', () => {   
cy.contains('a','Products').click()
cy.contains('span','Kéwi belts').click()
cy.contains('h3','FENDI BELT').should('be.visible')
 }) 

})