class CheckoutPage {
  elements = {
    firstNameInput:  () => cy.get('[data-test="firstName"]'),
    lastNameInput:   () => cy.get('[data-test="lastName"]'),
    postalCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton:  () => cy.get('[data-test="continue"]'),
    finishButton:    () => cy.get('[data-test="finish"]'),
    errorMessage:    () => cy.get('[data-test="error"]'),
    pageTitle:       () => cy.get('.title'),
  }

  fillForm(firstName, lastName, postalCode) {
    this.elements.firstNameInput().clear().type(firstName)
    this.elements.lastNameInput().clear().type(lastName)
    this.elements.postalCodeInput().clear().type(postalCode)
  }

  clickContinue() {
    this.elements.continueButton().click()
  }

  clickFinish() {
    this.elements.finishButton().click()
  }

  getErrorMessage() {
    return this.elements.errorMessage()
  }

  verifyOrderComplete() {
    this.elements.pageTitle().should('have.text', 'Checkout: Complete!')
  }
}

export default new CheckoutPage()