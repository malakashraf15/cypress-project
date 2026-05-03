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

  

  clickCategory(categoryName) {
  cy.get(`img[alt="${categoryName}"]`, { timeout: 10000 })
    .scrollIntoView()
    .click({ force: true })
}

  checkProductsLoaded() {
    cy.get('img').should('have.length.greaterThan', 2)
  }

  clickFirstProduct() {
  cy.get('img')
    .first()
    .click({ force: true })
}

}

export default new HomePage()