///<reference types="cypress"/>

import HomePage from '../pages/HomePage'

beforeEach('login', () => {
    HomePage.visit()
    cy.LoginToApp()
})

it('Cheakout Process cash on delivery', () => {
 cy.addToCart('Fendi clutch')
 cy.get('button').find('svg.lucide-shopping-cart ').first().parent('button').click()
 cy.contains('button','Checkout').click()
 cy.get('#name').type('rita')
 cy.get('#phone').type('+970599656532')
 cy.get('#city').type('Jenin')
 cy.contains('Region').parent().find('select')
   .select('West Bank')
 cy.contains('Delivery Type').parent().find('select')
    .select('Express')
 cy.get('input[type="radio"]').then(radiobutton =>{
 cy.wrap(radiobutton).eq(0).check()

    })
cy.contains('button','Place Order').click()
})


it('Cheakout Process pay with visa', () => {
 cy.addToCart('Fendi clutch') 
 cy.get('button').find('svg.lucide-shopping-cart ').first().parent('button').click()
 cy.contains('button','Checkout').click()
 cy.get('#name').type('rita')
 cy.get('#phone').type('+970599656532')
 cy.get('#city').type('Jenin')
 cy.contains('Region').parent().find('select')
   .select('West Bank')
 cy.contains('Delivery Type').parent().find('select')
    .select('Express')
 cy.get('input[type="radio"]').then(radiobutton =>{
 cy.wrap(radiobutton).eq(1).check()

    })
cy.contains('button','Place Order').click()
})

