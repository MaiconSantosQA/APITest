const el = require("./elements").ELEMENTS;
import interaction from "../../Utils/Action/interaction";
import validate from "../../Utils/Action/validate";
import mapper from "../../Utils/Action/constantsMapper";

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

  validarMsgSucesso(){
    const msgSalvoSucesso = "Informações salvas com sucesso"
    const msgInfo = "Acesse seu email para saber mais detalhes. Caso não tenha recebido lembre-se de olhar no lixo eletrônico (spam)."
    validate.validarDuasMensagens(msgSalvoSucesso,msgInfo)
  }

  validarMsgCpfDuplicado(){
    const msgCpfDuplicado = "Erro"
    const msgInfo = "CPF já cadastrado"
    validate.validarDuasMensagens(msgCpfDuplicado,msgInfo)
  }

  clicarBtnOk() {
    cy.xpath(el.xpathBtnOk).should("be.visible").click();
  }

  clicarCBXInfo(){
    interaction.clicarCbxPorTexto(mapper.checkBoxInfoMapper("INFO"))
  }

  clicarCBXNews(){
    interaction.clicarCbxPorTexto(mapper.checkBoxInfoMapper("NEWS"))
  }

  validarMsgSErro(msg){
    validate.validarMensagem(msg)
  }
}

export default new LOGIN();