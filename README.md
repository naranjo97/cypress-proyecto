<div align="center">

# 🧪 Cypress E2E Testing Project

### Automatización profesional de pruebas end-to-end con arquitectura Page Object Model

<br/>

![Cypress](https://img.shields.io/badge/Cypress-15.13.0-04C38E?style=for-the-badge&logo=cypress&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-25.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)
![Tests](https://img.shields.io/badge/Tests-20%2F20%20✓-brightgreen?style=for-the-badge)

<br/>

</div>

---

## ⚡ Vista rápida
```bash
git clone https://github.com/naranjo97/cypress-proyecto.git
cd cypress-proyecto
npm install
npm run cy:open
npm run report:full
```

---

## 📐 Arquitectura del proyecto
```
cypress-proyecto/
│
├── 📁 .github/workflows/
│   └── 🔄 cypress.yml          → CI/CD con GitHub Actions
│
├── 📁 cypress/
│   ├── 📁 e2e/
│   │   ├── 🧪 login.cy.js      → 5 escenarios
│   │   ├── 🧪 inventory.cy.js  → 5 escenarios
│   │   ├── 🧪 cart.cy.js       → 5 escenarios
│   │   └── 🧪 checkout.cy.js   → 5 escenarios
│   ├── 📁 fixtures/
│   │   ├── 📄 users.json
│   │   └── 📄 products.json
│   ├── 📁 Pages/
│   │   ├── 📄 LoginPage.js
│   │   ├── 📄 InventoryPage.js
│   │   ├── 📄 CartPage.js
│   │   └── 📄 CheckoutPage.js
│   └── 📁 support/
│       ├── ⚙️ commands.js
│       └── ⚙️ e2e.js
│
├── ⚙️ cypress.config.js
└── 📦 package.json
```

---

## 🎯 Cobertura de tests

| Suite | Escenarios | Estado |
|-------|-----------|--------|
| 🔐 **Login** | Happy path + bloqueado + contraseña incorrecta + campos vacíos + password vacío | ✅ 5/5 |
| 📦 **Inventory** | Intercept API + listar + filtrar Z-A + filtrar precio + agregar carrito | ✅ 5/5 |
| 🛒 **Cart** | Ver carrito + eliminar + badge + checkout + continuar comprando | ✅ 5/5 |
| 💳 **Checkout** | Ir a checkout + formulario vacío + completar + resumen + finalizar | ✅ 5/5 |

**Total: 20/20 tests pasando** 🟢

---

## 🚀 Comandos disponibles
```bash
npm run cy:open          # Modo visual
npm run cy:run           # Headless
npm run cy:run:chrome    # En Chrome
npm run report:full      # Tests + reporte HTML
```

---

## 🛠️ Stack tecnológico

| Tecnología | Uso |
|-----------|-----|
| **Cypress 15** | Framework de automatización E2E |
| **Page Object Model** | Patrón de diseño para mantenibilidad |
| **Mochawesome** | Reportes HTML visuales |
| **GitHub Actions** | Pipeline CI/CD automatizado |

---

## 🌐 Aplicación bajo prueba

**SauceDemo** — `https://www.saucedemo.com`

| Usuario | Tipo |
|---------|------|
| `standard_user` | Usuario válido |
| `locked_out_user` | Usuario bloqueado |
| `problem_user` | Usuario con problemas |

Contraseña para todos: `secret_sauce`

---

## 👤 Autor

**Julio Naranjo**

[![GitHub](https://img.shields.io/badge/GitHub-naranjo97-181717?style=for-the-badge&logo=github)](https://github.com/naranjo97)

---

<div align="center">

**Construido con 🧪 y mucho ☕**

*Si este proyecto te fue útil, dale una ⭐ en GitHub*

</div>