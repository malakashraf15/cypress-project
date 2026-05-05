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
cy.contains('h3','COACH TOTEBAG').click()
cy.contains('h1','COACH TOTEBAG').should('be.visible')


 })


 it('verify wallets category', () => {   
cy.contains('a','Products').click()
cy.contains('span','Kéwi wallets').click()
cy.contains('h3','LV Passport wallet').should('be.visible')
cy.contains('h3','LV Passport wallet').click()
cy.contains('h1','LV Passport wallet').should('be.visible')

 })
  


it('verify Belts category', () => {   
cy.contains('a','Products').click()
cy.contains('span','Kéwi belts').click()
cy.contains('h3','FENDI BELT').should('be.visible')
cy.contains('h3','FENDI BELT').click()
cy.contains('h1','FENDI BELT').should('be.visible')

 }) 

 it('verify Perfume category', () => {   
cy.contains('a','Products').click()
cy.contains('span','Kéwi perfume').click()
cy.contains('h3','MEMWA MINI 113').should('be.visible')
cy.contains('h3','MEMWA MINI 113').click()
cy.contains('h1','MEMWA MINI 113').should('be.visible')


 }) 

 it('verify combs category', () => {   
cy.contains('a','Products').click()
cy.contains('span','Kéwi combs').click()
cy.contains('h3','مشط بلاستك بيبي').should('be.visible')
cy.contains('h3','مشط بلاستك بيبي').click()
cy.contains('h1','مشط بلاستك بيبي').should('be.visible')

 }) 

})