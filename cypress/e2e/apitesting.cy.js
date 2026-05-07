///<reference types="cypress"/>

//import HomePage from '../pages/HomePage'

it('add item', () => {

    cy.visit('/')
    cy.contains('Products').click()

    cy.intercept('GET', '**/products', { fixture: 'products.json' })
    cy.intercept('GET', '**/categories*', { fixture: 'categories.json' })
    

})


it.skip('modify api response', () => {
    cy.intercept('GET', '**/categories*', req => {
        req.continue( res => {
            res.body.articles[0].favoritesCount = 9999999
            res.send(res.body)
        })
    })
    cy.loginToApplication()
    cy.get('app-favorite-button').first().should('contain.text', '9999999')
})
