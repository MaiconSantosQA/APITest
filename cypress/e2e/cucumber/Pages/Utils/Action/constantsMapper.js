const systemLink = require("../Constants/link").LINK;
const biomaConstants = require("../Constants/biome").BIOME;
const regiaoConstants = require("../Constants/region").REGION;
const temaConstants = require("../Constants/theme").THEME;

class CONSTANTSMAPPER {

  defineBioma(bioma) {
    return biomaConstants[bioma.toUpperCase()] || null;
  
  }

  defineRegiao(regiao) {
    return regiaoConstants[regiao.toUpperCase()] || null;
  }

  defineTema(tema) {
    return temaConstants[tema.toUpperCase()] || null;
  }

  defineLink(link) {
    return systemLink[link.toUpperCase()] || null;
  }
}

export default new CONSTANTSMAPPER();