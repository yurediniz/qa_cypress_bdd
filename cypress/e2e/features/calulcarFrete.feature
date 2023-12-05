#language: pt
Funcionalidade: Calcular Frete
Contexto:
Dado que eu acesse a página do Correios

Cenario: Calculo Válida
Quando digitar o CEP 58079794
E digitar o CEP 53130270
E digitar Altura 30
E digitar Largura 40
E digitar Comprimento 20
E clicar em Calcular Frete
Então deve ser exibida o texto Prosseguir com a postagem