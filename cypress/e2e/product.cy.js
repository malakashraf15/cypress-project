import HomePage from '../pages/HomePage'

describe('Browse and open product from categories', () => {

  const categories = [
    'Kéwi bags',
    'Kéwi wallets',
    'Kéwi belts',
    'Kéwi perfume',
    'Kéwi combs',
    'Kéwi accessories',
    'Kéwi travel bags',
    'Kéwi hair clips',
    'Kéwi charms'
  ]

  categories.forEach((cat) => {

    it(`user can open product from ${cat}`, () => {

      HomePage.visit()

      HomePage.clickCategory(cat)

      cy.get('body').then((body) => {

        if (body.find('img').length > 1) {

          HomePage.clickFirstProduct()

          cy.get('h1').should('be.visible')
          cy.get('h1').should('not.be.empty')
          cy.contains('₪').should('be.visible')

        } else {

          cy.log('No products in this category')

        }

      })

    })

  })

})