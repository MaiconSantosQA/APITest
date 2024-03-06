Feature: GET,POST,PUT

  Scenario: Atualizar um usuario valido
    Given um endpoint "https://jsonplaceholder.typicode.com/users"
    When eu envio uma requisição PUT com o id "5" alterando os dados email "maicon.teste@hotmail.com", lat "99.9999" e long "77.777"
    Then a resposta do post deve conter um código de status "200"
    And deverá retornar os novos dados atualizados

  Scenario: Inserir um novo usuario
    Given um endpoint "https://jsonplaceholder.typicode.com/users"
    When eu envio uma requisição "POST" com o json "userJson.json"
    Then a resposta do post deve conter um código de status "201"
    And deve retornar um id

 Scenario: Obter a lista completa de comentarios
    When eu envio uma requisição GET para o endpoint "https://jsonplaceholder.typicode.com/comments" buscando pelo nome "alias odio sit"
    Then a resposta deve conter um código de status "200"
    And a resposta deve retornar o email igual a "Lew@alysha.tv"