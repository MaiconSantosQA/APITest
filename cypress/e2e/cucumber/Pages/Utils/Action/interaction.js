const el = require("../elements").ELEMENTS;

class UTILSACTION {
  clicarCbxPorValor(value){
    cy.get(el.cbxValue.replace('${value}', value)).should("be.enabled").click();
  }

  clicarCbxPorTexto(value){
   cy.xpath(el.xpathCbxForValue.replace('${value}',value)).should("be.enabled").click();
  }

  verificarStatusCBX(value, status) {
    const checkbox = cy.xpath(el.xpathCbxForValue.replace('${value}', value));
  
    if (status === "checked") {
      checkbox.should("be.checked");
    } else {
      checkbox.should("not.be.checked");
    }
  }
}

export default new UTILSACTION();