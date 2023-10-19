const el = require("../elements").ELEMENTS;

class UTILSACTION {
  clicarCbxPorValor(value){
    cy.get(el.cbxValue.replace('${value}', value)).should("be.enabled").click();
  }

  clicarCbxPorTexto(value){
   cy.xpath(el.xpathCbxTema.replace('${value}',value)).should("be.enabled").click();
  }
}

export default new UTILSACTION();