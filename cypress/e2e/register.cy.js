/* eslint-disable */

describe('Register page spec', () => {

  it('should display error on empy form', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="cy-error-email"]').should("exist")
    cy.get('[data-cy="cy-error-password"]').should("exist")
    cy.get('[data-cy="cy-error-fullname"]').should("exist")
    cy.get('[data-cy="cy-success-message"]').should("not.exist")
  })


  it('should have an error when email is invalid', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="cy-email-input"]').type("testemail")
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="cy-error-email"]').should("exist")
  })

  it('should have an error when password pattern is wrong', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="cy-email-input"]').type("testemail")
    cy.get('[data-cy="submit"]').click()
    cy.get('[data-cy="cy-error-email"]').should("exist")
  })



})