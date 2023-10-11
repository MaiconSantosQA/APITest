Feature: Login

Como usuario, desejo logar na plataforma

Scenario Outline: Logar na plataforma com sucesso
    Given que o usuario está no site backoffice da plataforma
    When o usuario preencher o campo "<email>" e "<password>"
    And clicar no botão logar
    Then  "acao" deverá entrar no sistema

    Examples:
    |           email                          | password    | acao |
    | maicon.santos+teste01@elumini-it.com.br  |  teste      | nao  |
    | maicon.santos+teste01@elumini-it.com.br  |  null       | nao  |                        
    |                  null                    |  teste      | nao  |
    | maicon.santos+teste01@elumini-it.com.br  |  Funbio2020 | sim  |                                                                                