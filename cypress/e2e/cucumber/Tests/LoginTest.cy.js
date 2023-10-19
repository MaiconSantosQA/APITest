/// <reference types="cypress" />
import Login from "../Pages/Backoffice/Login/action.cy"
import "../Pages/Utils/Steps/commons.cy"

When(/^o usuario preencher o campo "([^"]*)" e "([^"]*)"$/, (email,password) => {
 	 Login.preencherEmail(email)
 	 Login.preencherSenha(password)
});

When(/^clicar no botão logar$/, () => {
	Login.clicarLogar()
});

Then(/^não deverá logar no sistema e exibir a mensagem de "([^"]*)"$/, (msg) => {
	cy.contains(msg).should('be.visible');
});