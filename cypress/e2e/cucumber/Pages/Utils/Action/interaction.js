const el = require("../elements").ELEMENTS;
const link = require("../Constants/link").LINK;

class UTILSACTION {

  clicarCbxPorValor(value){
    cy.get(el.cbxValue(value)).should("be.visible").click();
  }

  defineLink(systemLink) {
    switch (systemLink) {
      case 'ADMIN':
        return link.ADMIN;
      case 'PORTAL':
        return link.PORTAL;
      case 'CADASTRO':
        return link.CADASTRO;
      default:
        break;
    }
  }

}

export default new UTILSACTION();