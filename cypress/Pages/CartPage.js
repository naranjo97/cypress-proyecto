class CartPage {
  elements = {
    cartItems:      () => cy.get('.cart_item'),
    itemNames:      () => cy.get('.inventory_item_name'),
    removeButtons:  () => cy.get('[data-test^="remove"]'),
    checkoutButton: () => cy.get('[data-test="checkout"]'),
    continueBtn:    () => cy.get('[data-test="continue-shopping"]'),
    cartBadge:      () => cy.get('.shopping_cart_badge'),
    pageTitle:      () => cy.get('.title'),
  }

  getItems() {
    return this.elements.cartItems()
  }

  removeItem(productName) {
    const btnId = 'remove-' + productName
      .toLowerCase()
      .replace(/ /g, '-')
    cy.get(`[data-test="${btnId}"]`).click()
  }

  goToCheckout() {
    this.elements.checkoutButton().click()
  }

  continueShopping() {
    this.elements.continueBtn().click()
  }

  verifyProductInCart(productName) {
    this.elements.itemNames().should('contain', productName)
  }

  verifyCartIsEmpty() {
    this.elements.cartItems().should('not.exist')
  }
}

export default new CartPage()