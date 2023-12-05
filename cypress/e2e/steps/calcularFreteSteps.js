/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

beforeEach(() => {
    // Ignorar o erro específico 'Cannot read properties of undefined'
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes("Cannot read properties of undefined")) {
        return false; // Não falhar o teste por este erro específico
      }
      return true; // Falhar o teste para outros erros
    });
  });

Given("que eu acesse a página do Correios", () => {
    cy.visit('https://www.correios.com.br/')
})

When("digitar o CEP 58079794", () => {
    cy.get('#origem').type('58079794');
})

And("digitar o CEP 53130270", () => {
    cy.get('#destino').type('53130270');
})

And("digitar Altura 30", () => {
    cy.get('#altura').type('30');
})

And("digitar Largura 40", () => {
    cy.get('#largura').type('40');
})

And("digitar Comprimento 20", () => {
    cy.get('#comprimento').type('20');
})

And("clicar em Calcular Frete", () => {
    cy.get('.simular-frete > p').click()
})


Then("deve ser exibida o texto Prosseguir com a postagem", () => {
    cy.get('.botao-postagem').should('contain', 'Prosseguir com a postagem')
})