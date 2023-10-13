const el = require("./elements").ELEMENTS;

class LOGIN {

  preencherNome(name) {
      cy.get(el.txtNome).should("be.visible").type(name);
    }

  preencherCPF(cpf) {
      cy.get(el.txtCPF).should("be.visible").type(cpf);
    }

  preencherEmail(email) {
      cy.get(el.txtEmail).should("be.visible").type(email);
    }

  preencherInstituicao(instName) {
      cy.get(el.txtInstituicao).should("be.visible").type(instName);
    }

  preencherCNPJ(cnpj) {
      cy.get(el.txtCNPJ).should("be.visible").type(cnpj);
    }

   preencherSite(site) {
      cy.get(el.txtSite).should("be.visible").type(site);
    }

  clickCbxReceberInfo(){
    cy.get(el.cbxReceberInfo).should("be.visible").click();
  }

  clickCbxReceberNoticias(){
    cy.get(el.cbxReceberNoticias).should("be.visible").click();
  }

  clicarSalvar() {
      cy.get(el.btnSalvar).should("be.visible").click();
    }

}

export default new LOGIN();