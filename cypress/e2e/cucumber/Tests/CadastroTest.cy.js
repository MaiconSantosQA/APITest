/// <reference types="cypress" />
import Cadastro from "../Pages/Portal/Cadastro/action.cy"
import "../Pages/Utils/Steps/commons.cy"

const faker = require('faker-br');
let nomeAleatorio;
let cpfAleatorio;
let emailAleatorio;
let nomeInstituicao;
let cnpjAleatorio;
let siteAleatorio;

function gerarNomeCpfEmailAleatorio() {
	nomeAleatorio = faker.name.findName();
	cpfAleatorio = faker.br.cpf();
	emailAleatorio = faker.internet.email();
  }

  function gerarNomeInstCnpjSiteAleatorio() {
	nomeInstituicao = faker.company.companyName()
	cnpjAleatorio = faker.br.cnpj();
	siteAleatorio = faker.internet.url()
  }

When(/^o usuario preencher os campos nome, cpf, email$/, () => {
	gerarNomeCpfEmailAleatorio()
	Cadastro.preencherNome(nomeAleatorio)
	Cadastro.preencherCPF(cpfAleatorio)
	Cadastro.preencherEmail(emailAleatorio)
});

When(/^o usuario preencher os campos "([^"]*)", "([^"]*)", "([^"]*)"$/, (nome,cpf,email) => {
	Cadastro.preencherNome(nome)
	Cadastro.preencherCPF(cpf)
	Cadastro.preencherEmail(email)
});

When(/^o usuario preencher os campos nome, email e um cpf ja cadastrado$/, () => {
	gerarNomeCpfEmailAleatorio()
	const cpfDuplicado = "407.067.227-36"

	Cadastro.preencherNome(nomeAleatorio)
	Cadastro.preencherCPF(cpfDuplicado)
	Cadastro.preencherEmail(emailAleatorio)
});

When(/^nome instituição, cnpj, site$/, () => {
	gerarNomeInstCnpjSiteAleatorio()

	Cadastro.preencherInstituicao(nomeInstituicao)
	Cadastro.preencherCNPJ(cnpjAleatorio)
	Cadastro.preencherSite(siteAleatorio)
});

When(/^clicar no botão Salvar$/, () => {
	Cadastro.clicarSalvar()
});

Then(/^deverá exibir mensagem de salvo com sucesso$/, () => {
	Cadastro.validarMsgSucesso()
});

Then(/^clicar no botão ok$/, () => {
	Cadastro.clicarBtnOk()
});

Then(/^deverá exibir mensagem de cpf ja cadastrado$/, () => {
	Cadastro.validarMsgCpfDuplicado()
});

Then(/^deverá exibir mensagem de "([^"]*)"$/, (msg) => {
	Cadastro.validarMsgSErro(msg)
});

When(/^o usuario preencher os campos nome,cpf, email,nome instituição,cnpj e site com "([^"]*)" caractere$/, (limite) => {
	const textoLimiteCaracatere = 'a'.repeat(limite);
	const cpfLimite = faker.br.cpf() + textoLimiteCaracatere;
	const cnpjLimite = faker.br.cnpj() + textoLimiteCaracatere;
	const emailAleatorio = 'a'.repeat(limite-12) + "@hotmail.com"

	Cadastro.preencherNome(textoLimiteCaracatere)
	Cadastro.preencherCPF(cpfLimite)
	Cadastro.preencherEmail(emailAleatorio)
	Cadastro.preencherInstituicao(textoLimiteCaracatere)
	Cadastro.preencherCNPJ(cnpjLimite)
	Cadastro.preencherSite(textoLimiteCaracatere)
});


Then(/^deverá exibir mensagem de limite de caracteres para todos os campos$/, () => {
	const campos = [
	  { campo: 'NomeInstituicao', mensagem: 'O campo NomeInstituicao só aceita 256 caracteres' },
	  { campo: 'Nome', mensagem: 'O campo Nome só aceita 255 caracteres' },
	  { campo: 'Email', mensagem: 'O campo Email só aceita 255 caracteres' },
	  { campo: 'Site', mensagem: 'O campo Site só aceita 256 caracteres' },
	];
  
	campos.forEach(({ campo, mensagem }) => {
	  Cadastro.validarMsgSErro(mensagem, campo);
	});
  });





