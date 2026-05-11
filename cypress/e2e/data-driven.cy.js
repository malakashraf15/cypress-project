///<reference types="cypress"/>

//import HomePage from '../pages/HomePage'



const testData = [
  {
    phone: '0555',
    isValid: false,
    description: 'sign up with invalid phone '
  },
  {
    phone: '0599353520',
    isValid: true,
    description: 'sign up with valid phone '
  }
]

testData.forEach((data) => {
  it(`Sign Up with ${data.description}`, () => {
    cy.visit('/')
    cy.get('button').find('svg.lucide-user').parent('button').click()
    cy.contains('a', 'Sign Up').click()
    cy.get('[placeholder="Enter your username"]').type('malak')
    cy.get('[placeholder="Enter your phone number"]').type(data.phone)
    cy.get('[placeholder="Enter your password"]').type('kk')
    cy.contains('button', 'Sign Up').click()

    if (data.isValid) {
      cy.contains('shorter than the minimum allowed length').should('not.exist')
    } else {
      cy.contains('shorter than the minimum allowed length').should('be.visible')
    }
  })
})




const testData1 = [
  {
    phone: '+970599656532',
    password: '123456Ss',
    isValid: true,
    description: 'valid credentials'
  },
  {
    phone: '0000000000',
    password: 'wrongpassword',
    isValid: false,
    description: 'invalid credentials'
  }
]

testData1.forEach((data) => {
  it(`Login with ${data.description}`, () => {
    cy.visit('/login')
    cy.get('[placeholder="Enter your phone number"]').type(data.phone)
    cy.get('[placeholder="Enter your password"]').type(data.password)
    cy.contains('button', 'Login').click()

    if (data.isValid) {
      cy.contains('Invalid phone or password').should('not.exist')
    } else {
      cy.contains('Invalid phone or password').should('be.visible')
    }
  })
})







