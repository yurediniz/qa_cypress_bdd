/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"


Given("que eu acesse a homepage do Correios", () => {
    cy.visit('https://www.correios.com.br')
})

When("clicar no menu de Faça Login ou Cadastre-se", () => {
    cy.get('.login-meu-correios').trigger('mouseover');
})

And("clicar em Meus Correios", () => {
    cy.get('.login-meu-correios').click()
})


And("clicar em Entrar", () => {
    cy.get('.primario').click()
})

Then("o texto Entre com seu usuário e senha deve ser exibido", () => {
    cy.get('#fm1 > h4').should('contain', 'Entre com seu usuário e senha')
})