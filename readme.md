# 🚀 Projeto de Estudo: Automação com Cypress + Cucumber (Gherkin)

Este repositório é um projeto pessoal focado em estudos de automação de testes utilizando **Cypress** com suporte ao **Cucumber** via Gherkin.

## ✅ Objetivo

Explorar e praticar automação de testes com uma abordagem **BDD (Behavior Driven Development)**, utilizando uma estrutura organizada com **Step Definitions**, **Feature Files** e, futuramente, **Page Objects**.

## 🔍 O que já foi implementado

- Acesso à página de login do site **[Swag Labs](https://www.saucedemo.com/)** (ecommerce voltado para testes de automação)
- Primeiro cenário básico de login automatizado utilizando Gherkin

### Features:

```gherkin

Feature:Login

Scenario: Valid Login
Given I'm on the login page
When I type a registered my user and password
Then I have a successful login

Scenario: Invalid Login with user wrong
Given I'm on the login page
When I type a registered wrong user and done password
Then show it a message as this 'Epic sadface: Username and password do not match any user in this service'

Scenario: Invalid Login with password wrong
Given I'm on the login page
When I type a registered done user and wrong password
Then show it a message as this  'Epic sadface: Username and password do not match any user in this service'

Scenario: Invalid Login with user and password Empty
Given I'm on the login page
When I type a registered done user and wrong password
Then show it a message as this 'Epic sadface: Username is required'

Scenario: Invalid Login with  user done and password Empty
Given I'm on the login page
When I type a registered user done and password Empty
Then show it a message as this 'Epic sadface: Password is required'

Scenario: Invalid Login with user Empty and password done
Given I'm on the login page
When I type a registered user Empty and password done
Then show it a message as this 'Epic sadface: Username is required'

```

## 🧱 Tecnologias utilizadas

- [Cypress](https://www.cypress.com/)
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- JavaScript
- Gherkin

## 🗂️ Estrutura do projeto (em andamento)

```
cypress/
├── e2e/
│   ├──── pages/
│   └── step_definitions/login/
├── support/
├── fixtures/
           
```

## 📈 Próximos passos

- [ ] Implementar mais cenários com dados inválidos e múltiplas rotas
- [x] Criar estrutura de **Page Object Model**
- [ ] Melhorar a organização dos testes
- [ ] Incluir testes de fluxo de compra
- [ ] Integração com CI (GitHub Actions)



---

💬 *Qualquer sugestão ou dica é bem-vinda! Esse é um espaço de aprendizado contínuo.*