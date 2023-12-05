/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"


Given("que eu acesse a página Buscar CEP", () => {
    cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php?t')
})

When("eu digitar o CEP {string}", () => {
    cy.get('#endereco').type('00000000');
})

And("clicar em Buscar", () => {
    cy.get('#btn_pesquisar').click()
})

Then("deve ser encontrado o texto {string}", () => {
    cy.get('#mensagem-resultado-alerta').should('contain', 'Dados não encontrado')
})