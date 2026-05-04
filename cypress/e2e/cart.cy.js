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
cy.contains('button' , 'Add to Cart').click()
cy.contains('1x COACH TOTEBAG (mixed) added to your cart.').should('be.visible')
 })
 
