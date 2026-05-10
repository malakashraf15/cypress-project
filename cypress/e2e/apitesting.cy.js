///<reference types="cypress"/>

//import HomePage from '../pages/HomePage'

it('first mock [delete categories ]', () => {

    cy.intercept('GET', '**/products', { fixture: 'products.json' })
    cy.intercept('GET', '**/categories*', { fixture: 'categories.json' })
    cy.visit('/')
    cy.contains('Products').click()
    
})
it('second mock [item soldout]', () => {
    cy.intercept('GET', '**/user/api/products', { fixture: 'soldout-product.json' }).as('getProducts')
    cy.intercept('GET', '**/admin/api/categories*', { fixture: 'categories.json' }).as('getCategories')


    cy.visit('/')
    cy.contains('Products').click()

    cy.wait('@getProducts')
    cy.contains('sold out').should('be.visible')
})

it('third mock - empty products list', () => {
    cy.intercept('GET', '**/user/api/products', { fixture: 'empty-products.json' }).as('getProducts')
    cy.intercept('GET', '**/admin/api/categories*', { fixture: 'categories.json' }).as('getCategories')

    cy.visit('/')
    cy.wait('@getProducts')

    cy.contains('Products').click()

    cy.get('.product-card-hover').should('not.exist')
})





