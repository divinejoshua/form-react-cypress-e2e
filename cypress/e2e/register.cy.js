/* eslint-disable */

describe('Register page spec', () => {
  it('Display error on empy form', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="submit"]')
  })
})