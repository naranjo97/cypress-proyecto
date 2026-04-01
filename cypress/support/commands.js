Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.get('[data-test="username"]').type(username)
  cy.get('[data-test="password"]').type(password)
  cy.get('[data-test="login-button"]').click()
  cy.url().should('include', '/inventory.html')
})

Cypress.Commands.add('addToCart', (productName) => {
  cy.get('.inventory_item')
    .contains(productName)
    .parents('.inventory_item')
    .find('[data-test^="add-to-cart"]')
    .click()
})

Cypress.Commands.add('verifyUrl', (path) => {
  cy.url().should('include', path)
})