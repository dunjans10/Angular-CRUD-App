/// <reference types="Cypress"/>

describe('get api user', () => {

  let accessToken = '712b7dfdfad3c752011968c5893be55978cf14247b964c68ce385b24827523da';

  it('get users request', () => {
    cy.request({
      method: 'GET',
      url:'https://gorest.co.in/public/v2/users/',
      headers: {
        'authorization' :'Bearer ' + accessToken
      }
    }).then((res)=> {
      expect(res.status).to.eq(200)
    })
  });


  it('get user by id', () => {
    cy.request({
      method: 'GET',
      url:'https://gorest.co.in/public/v2/users/4344',
      headers: {
        'authorization' :'Bearer ' + accessToken
      }
    }).then((res)=> {
      expect(res.status).to.eq(200)
    })
  });
})