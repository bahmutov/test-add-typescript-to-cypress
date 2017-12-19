describe('Cypress TS support', () => {
  it('works', () => {
    cy.wrap(42).should('be.equal', 42)
  })
})