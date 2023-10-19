const el = require("./elements").ELEMENTS;

class LOGIN {

preencherEmail(email) {
    cy.get(el.txtEmail).should("be.visible").type(email);
  }

  preencherSenha(pass) {
    cy.get(el.txtPassword).should("be.visible").type(pass);
  }

  clicarLogar() {
    cy.get(el.btnLogin).should("be.visible").click();
  }
}

export default new LOGIN();