/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { acessarBuscarAgencia } from '../../pages/buscarAgencia.page';


Given("que eu acesse a página Buscar Agência", () => {
    acessarBuscarAgencia.acessarBuscarAgencia()
})

When("eu selecionar Estado {string}", () => {
    acessarBuscarAgencia.selecionar('#cmbEstado', 'PARAÍBA')
})

And("municipio {string}", () => {
    acessarBuscarAgencia.selecionar('#cmbMunicipio', 'JOAO PESSOA')
})

And("bairro {string}", () => {
   acessarBuscarAgencia.selecionar('#cmbBairro', 'CENTRO')
})

Then("deve ser exibida o texto {string}", (text) => {
    acessarBuscarAgencia.validarComTexto('AC CENTRAL DE JOAO PESSOA')
})