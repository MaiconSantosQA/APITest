Feature: Login

Como gerente, desejo que somente pessoas com credenciais acessem o sistema

Scenario Outline: Não logar na plataforma com credenciais erradas
    Given que o usuario está no site da Funbio "ADMIN"
    When o usuario preencher o campo "<email>" e "<password>"
    And clicar no botão logar
    Then não deverá logar no sistema e exibir a mensagem de "<erro>"

    Examples:
    |           email                          | password     |        erro                        |
    | maicon.santos+teste01@elumini-it.com     |  teste       |  A senha está incorreta.           |
    | maicon.santos+teste01@elumini-it.com     |  {backspace} |  Digite sua senha                  |     
    |                  {backspace}             |  teste       |  Insira Email                      |
    | maicon.santos+xyz@elumini-it.com         |  teste       | Não estamos encontrando sua conta. |