import LoginPage from '../Pages/LoginPage'

describe('Login — 5 escenarios', () => {
  beforeEach(() => {
    LoginPage.visit()
  })

  it('01 · happy path: login exitoso', () => {
    cy.fixture('users').then((users) => {
      LoginPage.fillUsername(users.validUser.username)
      LoginPage.fillPassword(users.validUser.password)
      LoginPage.clickLogin()
      cy.url().should('include', '/inventory')
    })
  })

  it('02 · usuario bloqueado muestra error', () => {
    cy.fixture('users').then((users) => {
      LoginPage.login(users.lockedUser.username, users.lockedUser.password)
      LoginPage.getErrorMessage()
        .should('be.visible')
        .and('contain', 'locked out')
    })
  })

  it('03 · contraseña incorrecta muestra error', () => {
    cy.fixture('users').then((users) => {
      LoginPage.login(users.wrongPassword.username, users.wrongPassword.password)
      LoginPage.getErrorMessage()
        .should('be.visible')
        .and('contain', 'Username and password do not match')
    })
  })

  it('04 · campos vacíos muestra error de username', () => {
    cy.fixture('users').then((users) => {
      LoginPage.login(users.emptyUser.username, users.emptyUser.password)
      LoginPage.getErrorMessage()
        .should('be.visible')
        .and('contain', 'Username is required')
    })
  })

  it('05 · solo password vacío muestra error', () => {
    cy.fixture('users').then((users) => {
      LoginPage.fillUsername(users.validUser.username)
      LoginPage.clickLogin()
      LoginPage.getErrorMessage()
        .should('be.visible')
        .and('contain', 'Password is required')
    })
  })
})