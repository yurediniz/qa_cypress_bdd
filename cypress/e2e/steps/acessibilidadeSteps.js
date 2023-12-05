/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"


Given("que eu acesse o site do Correios", () => {
    cy.visit('https://www.correios.com.br/')
})

When("clicar no menu de Acessibilidade", () => {
    cy.get('#botao-acessibilidade').click()
})

And("clicar em Alto contraste", () => {
    cy.get('#link-contraste').click()
})

Then("a classe esperada dever ser a com nome contraste", () => {
    cy.get('body').should('have.class', 'contraste')
})