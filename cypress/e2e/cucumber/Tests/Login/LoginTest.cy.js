/// <reference types="cypress" />
import Login from "../../Pages/Login/action.cy"
import Action from "../../Pages/Utils/action.cy"

Given(/^que o usuario está no site backoffice da plataforma$/, () => {
	cy.visit("")
});


When(/^o usuario preencher o campo "([^"]*)" e "([^"]*)"$/, (email,password) => {
	debugger
  Login.preencherEmail(Action.validarValorNulo(email))
  Login.preencherSenha(Action.validarValorNulo(password))
});

When(/^clicar no botão logar$/, () => {
	Login.clicarLogar()
});


Then(/^"([^"]*)" deverá entrar no sistema$/, (action) => {
	
	if (action == "NAO"){
        return true
	}else{
		return true
	}
	
});
