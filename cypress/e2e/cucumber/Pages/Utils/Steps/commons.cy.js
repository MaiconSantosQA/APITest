/// <reference types="cypress" />
import mapper from "../Action/constantsMapper"
import interaction from "../Action/interaction"

Given(/^que o usuario está no site da Funbio "([^"]*)"$/, (link) => {
	cy.visit(mapper.linkMapper(link))
});

When(/^selecionar a "([^"]*)" , "([^"]*)" , "([^"]*)"$/, (regiao,bioma,tema) => {
	interaction.clicarCbxPorValor(mapper.regiaoMapper(regiao))
	interaction.clicarCbxPorValor(mapper.biomaMapper(bioma))
	interaction.clicarCbxPorTexto(mapper.temaMapper(tema))
});