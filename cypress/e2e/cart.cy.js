///<reference types="cypress"/>

import HomePage from '../pages/HomePage'

beforeEach('login', () => {
    HomePage.visit()
    cy.LoginToApp()
})

it('AddToCart', () => {   
    cy.contains('a','Products').click()
    cy.contains('span','Kéwi bags').click()
    cy.contains('h3','COACH TOTEBAG').should('be.visible')
    cy.contains('h3','COACH TOTEBAG').click()
    cy.contains('button', 'Add to Cart').click()
    cy.contains('1x COACH TOTEBAG (mixed) added to your cart.', { timeout: 10000 }).should('be.visible')
})

it('AddToCart1', () => {   
cy.contains('a','Products').click()
cy.contains('span','Kéwi wallets').click()
cy.contains('h3','Fendi wallet').should('be.visible')
cy.contains('h3','Fendi wallet').click()
cy.contains('button' , 'Add to Cart').click()
cy.contains('Added to cart').should('be.visible')
 })



 it('AddToCart2', () => {   
cy.contains('a','Products').click()
cy.contains('h3','Hair clip - مشبك شعر').should('be.visible')
cy.contains('h3','Hair clip - مشبك شعر').click()
cy.contains('button' , 'Add to Cart').click()
cy.contains('Added to cart').should('be.visible')
 })



 



 
