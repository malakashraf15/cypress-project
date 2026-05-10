// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

  Cypress.Commands.add('LoginToApp', () => {
    cy.session('user',()=>{
    cy.visit('/')
    cy.get('button').find('svg.lucide-user').parent('button').click()
    cy.get('[placeholder="Enter your phone number"]').type('+970599656532')
    cy.get('[placeholder="Enter your password"]').type('123456Ss')
    cy.contains('button','Login').click()
  })
cy.visit('/')
 })

  Cypress.Commands.add('addToCart', (productName) => {
    cy.visit('/products') // ← أضيفي هاد
    cy.get('h3')
        .filter((index, el) => {
            return el.innerText.toLowerCase().includes(productName.toLowerCase())
        })
        .first()
        .closest('.group')
        .within(() => {
            cy.get('button.btn-scale').click()
        })
})

Cypress.Commands.add('checkout',()=>{
cy.get('button').find('svg.lucide-shopping-cart').first().parent('button').click()
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





