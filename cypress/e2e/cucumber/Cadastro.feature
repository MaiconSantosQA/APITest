Feature: Cadastro

Como usuario, desejo que cadastre com sucesso quando preencher as informações corretamentes.


Scenario: cadastro sem sucesso, sem preencher as informações de região, bioma e tematica.

    Given que o usuario está no site da Funbio "CADASTRO" 
    When o usuario preencher os campos nome, cpf, email
    And nome instituição, cnpj, site
    And clicar no botão Salvar
    Then não deverá deixar cadastrar

@skip
Scenario Outline: cadastrar para receber informações com sucesso

    Given o usuário decide pular o teste
    Given que o usuario está no site da Funbio "CADASTRO" 
    When o usuario preencher os campos nome, cpf, email
    And nome instituição, cnpj, site
    And checar a "<regiao>","<bioma>" e "<tematica>"
    And clicar no botão Salvar
    Then deverá exibir mensagem de salvo com sucesso.

        Examples:
    |           regiao   | bioma     | tematica |
    | norte              | amazonia  |     1    |                                                               
    | nordeste           | cerrado   |     5    |                                     
    | sudeste            | Pantanal  |     9    |