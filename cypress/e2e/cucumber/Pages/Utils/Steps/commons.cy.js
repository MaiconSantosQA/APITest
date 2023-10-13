/// <reference types="cypress" />
import interaction from "../Action/interaction"

Given(/^que o usuario está no site da Funbio "([^"]*)"$/, (link) => {
	cy.visit(interaction.defineLink(link))
});