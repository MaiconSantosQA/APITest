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

Scenario: cadastro sem sucesso, preenchendo até ultrapassar o limite de caractere permitido em todos os campos.

    Given que o usuario está no site da Funbio "CADASTRO" 
    When o usuario preencher os campos nome,cpf, email,nome instituição,cnpj e site com "257" caractere
    And clicar no botão Salvar
    Then deverá exibir mensagem de limite de caracteres para todos os campos

Scenario Outline: cadastrar para receber informações com sucesso

    Given que o usuario está no site da Funbio "CADASTRO" 
    When o usuario preencher os campos nome, cpf, email
    And nome instituição, cnpj, site
    And deschecar noticias "<checkboxNot>" e informações "<checkboxInfo>"
    And checar a "<regiao>" , "<bioma>" , "<tematica>"
    And clicar no botão Salvar
    Then deverá exibir mensagem de salvo com sucesso

    Examples:
    |           regiao   | bioma     | tematica      | checkboxNot     |  checkboxInfo   | 
    | norte              | amazonia  |   atividades  |    true         |     false       |                                                            
    | nordeste           | cerrado   |   criacao     |    false        |     true        |                               
    | sudeste            | Pantanal  |   povo        |    false        |     false       |

Scenario Outline: Cadastrar não preenchendo os campos obrigatorios

    Given que o usuario está no site da Funbio "CADASTRO" 
    When o usuario preencher os campos "<nome>", "<cpf>", "<email>"
    And nome instituição, cnpj, site
    And deschecar noticias "<checkboxNot>" e informações "<checkboxInfo>"
    And checar a "<regiao>" , "<bioma>" , "<tematica>"
    And clicar no botão Salvar
    Then deverá exibir mensagem de "<erro>"

    Examples:
    |  nome        |      cpf       |     email                |    checkboxNot     |  checkboxInfo   |       regiao       | bioma     |     tematica      |   erro                                       |
    |  maicon      | 004.341.940-26 |   {backspace}            |       true         |     false       | norte              | amazonia  |     atividades    | O campo Email é de preenchimento obrigatório |                                                         
    |  andreia     |    {backspace} |   funbio9999@teste.com   |       false        |    true         | nordeste           | cerrado   |     criacao       | O campo CPF é de preenchimento obrigatório   |                         
    |  {backspace} | 431.964.990-73 |   funbio9999@teste.com   |       false        |    true         | sudeste            | pantanal  |     povo          | O campo Nome é de preenchimento obrigatório  |                              
    |  alex        | 431.964.990-73 |   funbio9999@teste.com   |       true         |     true        | sudeste            | pantanal  |     povo          | Marque pelo menos uma das opções             |