
class UTILSACTION {
   realizarRequisicaoGET(endpoint){
    return  cy.request({
        method: 'GET',
        url: endpoint,
    });
 }

 realizarRequisicaoGETQueryParam(endpoint, queryParam) {
  return cy.request({
      method: 'GET',
      url: endpoint,
      qs: {
          name: queryParam
      }
  });
}

 realizarRequisicaoPostUpdateDelete(endpoint,json,metodo){
    return  cy.request({
      method: metodo,
      url: endpoint,
      body: json,
  });
}

realizarRequisicaoPutUser(endpoint, email, latitude, longitude) {
  const requestBody = {
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: email,
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: latitude,
        lng: longitude
      }
      
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems'
    }
  };

  return cy.request({
    method: 'PUT',
    url: endpoint,
    body: requestBody
  });
}


}

export default new UTILSACTION;