class InventoryPage {
  elements = {
    productList:  () => cy.get('.inventory_item'),
    productNames: () => cy.get('.inventory_item_name'),
    sortDropdown: () => cy.get('[data-test="product-sort-container"]'),
    cartBadge:    () => cy.get('.shopping_cart_badge'),
    cartIcon:     () => cy.get('.shopping_cart_link'),
    pageTitle:    () => cy.get('.title'),
  }

  getProducts() {
    return this.elements.productList()
  }

  sortBy(value) {
    this.elements.sortDropdown().select(value)
  }

  addProductToCart(productName) {
    cy.contains('.inventory_item', productName)
      .find('[data-test^="add-to-cart"]')
      .click()
  }

  removeProductFromInventory(productName) {
    cy.contains('.inventory_item', productName)
      .find('[data-test^="remove"]')
      .click()
  }

  goToCart() {
    this.elements.cartIcon().click()
  }

  getCartCount() {
    return this.elements.cartBadge()
  }
}

export default new InventoryPage()