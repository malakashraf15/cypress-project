import HomePage from '../pages/HomePage'

beforeEach('login', () => {
    HomePage.visit()
    cy.LoginToApp()
})


it('delete from cart', () => {
  cy.addToCart('Fendi clutch')
  
  cy.get('nav').find('a[href="/cart"]').click()

  cy.contains('.bg-card', 'Fendi clutch')
    .find('button.text-destructive')
    .click()
})
it('delete from cart multiple products', () => {
  cy.addToCart('Chanel classic flab 25')
  cy.addToCart('Fendi clutch')

  cy.get('nav').find('a[href="/cart"]').click()

  cy.contains('.bg-card', 'Chanel classic flab 25')
    .find('button.text-destructive')
    .click()

    cy.contains('.bg-card', 'Fendi clutch')
    .find('button.text-destructive')
    .click()

})