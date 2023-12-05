#language: pt
Funcionalidade: Buscar CEP

Contexto:
Dado que eu acesse a página Buscar CEP

Cenario: CEP Invalido
Quando eu digitar o CEP "00000000"
E clicar em Buscar
Então deve ser encontrado o texto "Dados não encontrado"