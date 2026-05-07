///<reference types="cypress"/>

//import HomePage from '../pages/HomePage'

it('add item', () => {

    cy.visit('/')
    cy.contains('Products').click()

    cy.intercept('GET', '**/products', { fixture: 'products.json' })
    cy.intercept('GET', '**/categories*', { fixture: 'categories.json' })
    
})



