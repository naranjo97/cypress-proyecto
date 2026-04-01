import CartPage from '../Pages/CartPage'
import CheckoutPage from '../Pages/CheckoutPage'

describe('Checkout — 5 escenarios', () => {
  beforeEach(() => {
  cy.fixture('users').then((users) => {
    cy.login(users.validUser.username, users.validUser.password)
  })
  cy.fixture('products').then((products) => {
    cy.addToCart(products.firstProduct)
  })
  cy.get('.shopping_cart_link').click()
  cy.url().should('include', '/cart.html')
  CartPage.goToCheckout()
})

  it('01 · ir a checkout desde el carrito', () => {
    cy.url().should('include', '/checkout-step-one')
  })

  it('02 · formulario vacío muestra error', () => {
    CheckoutPage.clickContinue()
    CheckoutPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'First Name is required')
  })

  it('03 · completar formulario y continuar', () => {
    CheckoutPage.fillForm('Juan', 'Perez', '12345')
    CheckoutPage.clickContinue()
    cy.url().should('include', '/checkout-step-two')
  })

  it('04 · resumen de orden muestra el producto', () => {
    CheckoutPage.fillForm('Juan', 'Perez', '12345')
    CheckoutPage.clickContinue()
    cy.fixture('products').then((products) => {
      cy.contains(products.firstProduct).should('be.visible')
    })
  })

  it('05 · finalizar compra muestra confirmación', () => {
    CheckoutPage.fillForm('Juan', 'Perez', '12345')
    CheckoutPage.clickContinue()
    CheckoutPage.clickFinish()
    cy.url().should('include', '/checkout-complete')
    cy.contains('Thank you for your order').should('be.visible')
  })
})