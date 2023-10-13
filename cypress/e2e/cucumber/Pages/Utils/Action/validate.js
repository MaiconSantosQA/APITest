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

}

export default new UTILSVALIDATE();