/// <reference types="cypress" />
import mapper from "../Action/constantsMapper"
import interaction from "../Action/interaction"

Given(/^que o usuario está no site da Funbio "([^"]*)"$/, (link) => {
	cy.visit(mapper.defineLink(link))
});

When(/^checar a "([^"]*)" , "([^"]*)" , "([^"]*)"$/, (regiao,bioma,tema) => {
	cy.checarCbxPorValor(regiao)
	interaction.clicarCBXBioma(bioma)
	interaction.clicarCBXTema(tema)
});