/* eslint-disable */

describe('Register page spec', () => {

  // Empty form tests 
  it('should display error on empy form', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="cy-error-email"]').should("exist")
    cy.get('[data-cy="cy-error-password"]').should("exist")
    cy.get('[data-cy="cy-error-fullname"]').should("exist")
    cy.get('[data-cy="cy-success-message"]').should("not.exist")
  })

  // Invalid email tests 
  it('should have an error when email is invalid', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="cy-email-input"]').type("testemail")
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="cy-error-email"]').should("exist")
    cy.get('[data-cy="cy-success-message"]').should("not.exist")

  })

  // Wrong password tests 
  it('should have an error when password patterns is wrong', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="cy-password-input"]').type("testpassword")
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="cy-error-password"]').should("exist")

    cy.get('[data-cy="cy-password-input"]').clear()
    cy.get('[data-cy="cy-password-input"]').type("TestPass")
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="cy-error-password"]').should("exist")

    cy.get('[data-cy="cy-password-input"]').clear()
    cy.get('[data-cy="cy-password-input"]').type("1234_")
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="cy-error-password"]').should("exist")

    cy.get('[data-cy="cy-success-message"]').should("not.exist")

  })

  // Valid form input 
  it('should have an error when email is invalid', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="cy-fullname-input"]').type("testemail")
    cy.get('[data-cy="cy-email-input"]').type("test@email.com")
    cy.get('[data-cy="cy-password-input"]').type("TestPassword1234")
    cy.get('[data-cy="submit"]').click()

    cy.get('[data-cy="cy-error-fullname"]').should("not.exist")
    cy.get('[data-cy="cy-error-email"]').should("not.exist")
    cy.get('[data-cy="cy-error-password"]').should("not.exist")

    cy.get('[data-cy="cy-success-message"]').should("exist")

  })
  


})