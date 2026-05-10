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
  // أضيفي المنتج الأول
  cy.visit('/category/69d240317e685b164dfb4a48?search=Chanel+classic+flab+25')
  cy.contains('h3', 'Chanel classic flab 25').should('be.visible')
  cy.contains('h3', 'Chanel classic flab 25')
    .closest('.group')
    .find('button')
    .last()
    .click()

  // أضيفي المنتج الثاني
  cy.visit('https://kewi.ps/category/69d240317e685b164dfb4a48?search=Lady+Dior')
  cy.contains('h3', 'Lady Dior').should('be.visible')
  cy.contains('h3', 'Lady Dior')
    .closest('.group')
    .find('button')
    .last()
    .click()

  // روحي للكارت وامسحي
  cy.get('nav').find('a[href="/cart"]').click()

  cy.contains('.bg-card', 'Chanel classic flab 25')
    .find('button.text-destructive')
    .click()
  cy.contains('.bg-card', 'Chanel classic flab 25')
    .should('not.exist')

  cy.contains('.bg-card', 'Lady Dior')
    .find('button.text-destructive')
    .click()
  cy.contains('.bg-card', 'Lady Dior')
    .should('not.exist')
})