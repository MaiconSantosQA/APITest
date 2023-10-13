Feature: Login

Como gerente, desejo que somente pessoas com credenciais acessem o sistema

Scenario Outline: Logar na plataforma com sucesso
    Given que o usuario está no site backoffice da plataforma
    When o usuario preencher o campo "<email>" e "<password>"
    And clicar no botão logar
    Then  não deverá logar no sistema

    Examples:
    |           email                          | password     |
    | maicon.santos+teste01@elumini-it.com.br  |  teste       |
    | maicon.santos+teste01@elumini-it.com.br  |  {backspace} |                   
    |                  {backspace}             |  teste       |                                                                        