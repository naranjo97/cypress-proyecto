import InventoryPage from '../Pages/InventoryPage'
import CartPage from '../Pages/CartPage'

describe('Cart — 5 escenarios', () => {
  beforeEach(() => {
  cy.fixture('users').then((users) => {
    cy.login(users.validUser.username, users.validUser.password)
  })
})

  it('01 · ver carrito: producto agregado aparece en el carrito', () => {
    cy.fixture('products').then((products) => {
      cy.addToCart(products.firstProduct)
      InventoryPage.goToCart()
      CartPage.verifyProductInCart(products.firstProduct)
    })
  })

  it('02 · eliminar: remover producto del carrito lo quita', () => {
    cy.fixture('products').then((products) => {
      cy.addToCart(products.firstProduct)
      InventoryPage.goToCart()
      CartPage.removeItem(products.firstProduct)
      CartPage.verifyCartIsEmpty()
    })
  })

  it('03 · verificar: 2 productos tienen badge = 2', () => {
    cy.fixture('products').then((products) => {
      cy.addToCart(products.firstProduct)
      cy.addToCart(products.secondProduct)
      InventoryPage.goToCart()
      CartPage.getItems().should('have.length', 2)
    })
  })

  it('04 · ir a checkout: redirige al formulario', () => {
    cy.fixture('products').then((products) => {
      cy.addToCart(products.firstProduct)
      InventoryPage.goToCart()
      CartPage.goToCheckout()
      cy.url().should('include', '/checkout-step-one')
    })
  })

  it('05 · continuar comprando: regresa al inventario', () => {
    cy.fixture('products').then((products) => {
      cy.addToCart(products.firstProduct)
      InventoryPage.goToCart()
      CartPage.continueShopping()
      cy.url().should('include', '/inventory')
    })
  })
})