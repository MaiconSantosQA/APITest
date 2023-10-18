const el = require("../elements").ELEMENTS;

class UTILSVALIDATE {

  validarExistenciaCbxPorValor(value) {
    cy.get(el.cbxValue(value))
      .should('exist')
      .and('be.visible') 
      .then(($element) => {
        if ($element.length === 0) {
          throw new Error(`O elemento com o valor "${value}" não foi encontrado.`);
        } else if (!$element.is(':visible')) {
          throw new Error(`O elemento com o valor "${value}" está presente, mas não é visível.`);
        }
      });
  }

  validarDuasMensagens(msg1,msg2){
    cy.contains(msg1).should('be.visible')
    cy.contains(msg2).should('be.visible')
  }

  validarMensagem(msg){
    cy.contains(msg).should('be.visible')
  }

}

export default new UTILSVALIDATE();