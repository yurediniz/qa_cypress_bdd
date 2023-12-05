#language: pt
Funcionalidade: Buscar Agência
Contexto:
Dado que eu acesse a página Buscar Agência

Cenario: Agência Válida
Quando eu selecionar Estado "PARAÍBA"
E municipio "JOAO PESSOA"
E bairro "CENTRO"
Então deve ser exibida o texto "AC CENTRAL DE JOAO PESSOA"