class HomePage {

  visit() {
    cy.visit('/')
  }

  checkImagesLoaded() {
    cy.get('img')
      .should('have.length.greaterThan', 3)
  }

  checkSiteLoaded() {
    cy.contains('Kewi').should('be.visible')
    cy.contains('₪').should('exist')
  }

  checkNavigation() {
  cy.get('a').should('have.length.greaterThan', 5)
}


}

export default new HomePage()