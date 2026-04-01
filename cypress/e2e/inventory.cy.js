import InventoryPage from '../Pages/InventoryPage'

describe('Inventory — 5 escenarios', () => {
  beforeEach(() => {
    cy.fixture('users').then((users) => {
      cy.login(users.validUser.username, users.validUser.password)
    })
  })

  it('01 · BONUS intercept: página carga correctamente', () => {
    cy.intercept('GET', 'https://www.saucedemo.com/inventory.html').as('inventoryPage')
    cy.fixture('products').then((products) => {
      InventoryPage.getProducts()
        .should('have.length', products.expectedCount)
    })
  })

  it('02 · listar: se muestran 6 productos en pantalla', () => {
    cy.fixture('products').then((products) => {
      InventoryPage.getProducts()
        .should('have.length', products.expectedCount)
      InventoryPage.elements.pageTitle()
        .should('have.text', 'Products')
    })
  })

  it('03 · filtrar: ordenar Z-A cambia el primer producto', () => {
    InventoryPage.sortBy('za')
    InventoryPage.elements.productNames().first()
      .should('have.text', 'Test.allTheThings() T-Shirt (Red)')
  })

  it('04 · filtrar: ordenar precio bajo-alto', () => {
    InventoryPage.sortBy('lohi')
    InventoryPage.elements.productNames().first()
      .should('have.text', 'Sauce Labs Onesie')
  })

  it('05 · agregar al carrito: badge muestra cantidad correcta', () => {
    cy.fixture('products').then((products) => {
      InventoryPage.addProductToCart(products.firstProduct)
      InventoryPage.addProductToCart(products.secondProduct)
      InventoryPage.getCartCount()
        .should('have.text', '2')
    })
  })
})