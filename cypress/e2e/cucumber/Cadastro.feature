Feature: Cadastro

Como usuario, desejo que cadastre com sucesso quando preencher as informações corretamentes.

Scenario: cadastro com sucesso, sem preencher as informações de região, bioma e tematica.

    Given que o usuario está no site da Funbio "CADASTRO" 
    When o usuario preencher os campos nome, cpf, email
    And nome instituição, cnpj, site
    And clicar no botão Salvar
    Then deverá exibir mensagem de salvo com sucesso

Scenario: cadastro sem sucesso, preenchendo com cpf ja cadastrado.

    Given que o usuario está no site da Funbio "CADASTRO" 
    When o usuario preencher os campos nome, email e um cpf ja cadastrado
    And nome instituição, cnpj, site
    And clicar no botão Salvar
    Then deverá exibir mensagem de cpf ja cadastrado

Scenario Outline: cadastrar para receber informações com sucesso

    Given que o usuario está no site da Funbio "CADASTRO" 
    When o usuario preencher os campos nome, cpf, email
    And nome instituição, cnpj, site
    And checar a "<regiao>" , "<bioma>" , "<tematica>"
    And clicar no botão Salvar
    Then deverá exibir mensagem de salvo com sucesso

        Examples:
    |           regiao   | bioma     | tematica      |
    | norte              | amazonia  |   atividades  |                                                               
    | nordeste           | cerrado   |   criacao     |                                     
    | sudeste            | Pantanal  |   povo        |

Scenario Outline: Cadastrar não preenchendo os campos obrigatorios

    Given que o usuario está no site da Funbio "CADASTRO" 
    When o usuario preencher os campos "<nome>", "<cpf>", "<email>"
    And nome instituição, cnpj, site
    And checar a "<regiao>" , "<bioma>" , "<tematica>"
    And clicar no botão Salvar
    Then deverá exibir mensagem de "<erro>"

    Examples:
    |  nome        |      cpf       |     email                |       regiao       | bioma     |     tematica      |   erro                                       |
    |  maicon      | 004.341.940-26 |   {backspace}            | norte              | amazonia  |     atividades    | O campo Email é de preenchimento obrigatório |                                                         
    |  andreia     |    {backspace} |   funbio9999@teste.com   | nordeste           | cerrado   |     criacao       | O campo CPF é de preenchimento obrigatório   |                         
    |  {backspace} | 431.964.990-73 |   funbio9999@teste.com   | sudeste            | pantanal  |     povo          | O campo Nome é de preenchimento obrigatório  |