class AcessarBuscarAgencia {
    // Pode ser feito por "fluxo": elementos + ações

    acessarBuscarAgencia() {
        cy.visit('https://mais.correios.com.br/app/index.php')
    }
    
    selecionar(seletor, valor) {
    cy.get(seletor).select(valor);
    }


    validarComTexto(text) {
        cy.get('#primeiro >.nome-agencia').should('contain', text)
    }


}

export const acessarBuscarAgencia = new AcessarBuscarAgencia()