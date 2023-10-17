/// <reference types="cypress" />
import Cadastro from "../Pages/Cadastro/action.cy"
import "../Pages/Utils/Steps/commons.cy"

const faker = require('faker-br');
const nomeAleatorio = faker.name.findName();
const cpfAleatorio = faker.br.cpf();
const emailAleatorio = faker.internet.email()
const nomeInstituicao = faker.company.companyName()
const cnpjAleatorio = faker.br.cnpj();
const siteAleatorio = faker.internet.url()

When(/^o usuario preencher os campos nome, cpf, email$/, () => {
	Cadastro.preencherNome(nomeAleatorio)
	Cadastro.preencherCPF(cpfAleatorio)
	Cadastro.preencherEmail(emailAleatorio)
});

When(/^nome instituição, cnpj, site$/, () => {
	Cadastro.preencherInstituicao(nomeInstituicao)
	Cadastro.preencherCNPJ(cnpjAleatorio)
	Cadastro.preencherSite(siteAleatorio)
});


When(/^checar a "([^"]*)","([^"]*)" e "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});


When(/^clicar no botão Salvar$/, () => {
	Cadastro.clicarSalvar()
});


Then(/^deverá exibir mensagem de salvo com sucesso.$/, () => {
	return true;
});


Then(/^não deverá deixar cadastrar$/, () => {
	return true;
});





