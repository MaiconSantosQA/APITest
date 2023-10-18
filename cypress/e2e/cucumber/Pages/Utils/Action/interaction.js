const el = require("../elements").ELEMENTS;
import mapper from "../Action/constantsMapper"

class UTILSACTION {
  clicarCbxPorValor(value){
    cy.get(el.cbxValue.replace('${value}', value)).should("be.enabled").click();
  }

  clicarCBXBioma(bioma){
    cy.log(mapper.defineBioma(bioma))
    this.clicarCbxPorValor(mapper.defineBioma(bioma))
  }

  clicarCBXTema(tema){
   cy.xpath(el.xpathCbxTema.replace('${value}', mapper.defineTema(tema))).should("be.enabled").click();
  }
}

export default new UTILSACTION();