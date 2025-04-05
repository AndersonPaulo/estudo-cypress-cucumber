# 🚀 Projeto de Estudo: Automação com Cypress + Cucumber (Gherkin)

Este repositório é um projeto pessoal focado em estudos de automação de testes utilizando **Cypress** com suporte ao **Cucumber** via Gherkin.

## ✅ Objetivo

Explorar e praticar automação de testes com uma abordagem **BDD (Behavior Driven Development)**, utilizando uma estrutura organizada com **Step Definitions**, **Feature Files** e, futuramente, **Page Objects**.

## 🔍 O que já foi implementado

- Acesso à página de login do site **[Swag Labs](https://www.saucedemo.com/)** (ecommerce voltado para testes de automação)
- Primeiro cenário básico de login automatizado utilizando Gherkin

### Exemplo de feature:

```gherkin
Feature: Login

  Scenario: Valid Login
    Given I'm on the login page
    When I type a registered my user and password
    Then I have a successful login
```

## 🧱 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/)
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- JavaScript
- Gherkin

## 🗂️ Estrutura do projeto (em andamento)

```
cypress/
├── e2e/
│   ├── features/
│   └── step_definitions/
├── support/
├── fixtures/
└── pages/               # Em breve: estrutura Page Object
```

## 📈 Próximos passos

- [ ] Implementar mais cenários com dados inválidos e múltiplas rotas
- [ ] Criar estrutura de **Page Object Model**
- [ ] Melhorar a organização dos testes
- [ ] Incluir testes de fluxo de compra
- [ ] Integração com CI (GitHub Actions)

## 🤓 Motivação

A ideia é ir evoluindo o projeto conforme avanço nos estudos de automação de testes, criando uma base sólida para projetos futuros com foco em qualidade de software e boas práticas.

---

💬 *Qualquer sugestão ou dica é bem-vinda! Esse é um espaço de aprendizado contínuo.*