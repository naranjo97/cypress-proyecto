class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton:   () => cy.get('[data-test="login-button"]'),
    errorMessage:  () => cy.get('[data-test="error"]'),
  }

  visit() {
    cy.visit('/')
  }

  fillUsername(username) {
    if (username) {
      this.elements.usernameInput().clear().type(username)
    }
  }

  fillPassword(password) {
    if (password) {
      this.elements.passwordInput().clear().type(password)
    }
  }

  clickLogin() {
    this.elements.loginButton().click()
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.clickLogin()
  }

  getErrorMessage() {
    return this.elements.errorMessage()
  }
}

export default new LoginPage()