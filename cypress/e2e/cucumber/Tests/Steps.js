/// <reference types="cypress" />
import requests from "../API/Utils/Interation"
let endpointRequest = null
let reponseEndpoint = null
let emailUpdate = null
let latUpdate = null
let longUpdate = null

Given(/^um endpoint "([^"]*)"$/, (endpoint) => {
	endpointRequest = endpoint
});

When(/^eu envio uma requisição "([^"]*)" com o json "([^"]*)"$/, (metodo,nomeJson) => {
	reponseEndpoint = requests.realizarRequisicaoPostUpdateDelete(endpointRequest,nomeJson,metodo)
});

Then(/^a resposta do post deve conter um código de status "([^"]*)"$/, (codigo) => {
    reponseEndpoint.then((response) => {
		expect(response.status).to.equal(parseInt(codigo));
	});
});

Then(/^deve retornar um id$/, () => {
	reponseEndpoint.then((response) => {
		expect(response.body.id).not.null
	});
});

When(/^eu envio uma requisição PUT com o id "([^"]*)" alterando os dados email "([^"]*)", lat "([^"]*)" e long "([^"]*)"$/, (id,email,lat,long) => {
	emailUpdate = email
	latUpdate = lat
	longUpdate = long
	endpointRequest = `${endpointRequest}/${id}`;
	reponseEndpoint = requests.realizarRequisicaoPutUser(endpointRequest,email,lat,long)
});

When(/^eu envio uma requisição GET para o endpoint "([^"]*)" buscando pelo nome "([^"]*)"$/, (endpoint,name) => {
	reponseEndpoint = requests.realizarRequisicaoGETQueryParam(endpoint,name)
});

Then(/^a resposta deve conter um código de status "([^"]*)"$/, (codigo) => {
    reponseEndpoint.then((response) => {
		expect(response.status).to.equal(parseInt(codigo));
	});
});


Then(/^a resposta deve retornar o email igual a "([^"]*)"$/, (email) => {
	reponseEndpoint.then((response) => {
		expect(response.body[0].email).to.equal(email);
	});
});

Then(/^deverá retornar os novos dados atualizados$/, () => {
	reponseEndpoint.then((response) => {
		expect(response.body.email).to.equal(emailUpdate);
		expect(response.body.address.geo.lat).to.equal(latUpdate);
		expect(response.body.address.geo.lng).to.equal(longUpdate);
	});
});