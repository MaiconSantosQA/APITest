const systemLink = require("../Constants/link").LINK;
const biomaConstants = require("../Constants/biome").BIOME;
const regiaoConstants = require("../Constants/region").REGION;
const temaConstants = require("../Constants/theme").THEME;
const cbxNews = require("../../Portal/Cadastro/const").COMUNICATION;

class ConstantsMapper {
  constructor() {
    this.biomaMapper = this.createMapper(biomaConstants);
    this.regiaoMapper = this.createMapper(regiaoConstants);
    this.temaMapper = this.createMapper(temaConstants);
    this.checkBoxInfoMapper = this.createMapper(cbxNews);
    this.linkMapper = this.createMapper(systemLink);
  }

  createMapper(constants) {
    return value => constants[value.toUpperCase()] || null;
  }
}

export default new ConstantsMapper();