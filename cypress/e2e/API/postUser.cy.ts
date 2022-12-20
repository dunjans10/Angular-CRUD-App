/// <reference types="Cypress"/>

const data = require('../../fixtures/createUser')

describe('post user request', () => {

  let accessToken = '712b7dfdfad3c752011968c5893be55978cf14247b964c68ce385b24827523da';
  let randomText = '';
  let randomEmail = '';

  it('should create user', () => {

    var pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for(var i=0; i < 10; i++){
      randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length))
      randomEmail = randomText + '@gmail.com'
    }

    cy.request({
      method:'POST',
      url:'https://gorest.co.in/public/v2/users/',
      headers: {
        'authorization' :'Bearer ' + accessToken
      },
      body: {
        "name": data.name,
        "email": randomEmail,
        "gender": data.gender,
        "status": data.status
      }
    }).then((res)=>{
        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(201)
        expect(res.body).has.property('name', data.name)
        expect(res.body).has.property('email',randomEmail)
        expect(res.body).has.property('gender',data.gender)
        expect(res.body).has.property('status',data.status)
        cy.log(JSON.stringify(res.body.id))
    })
  })
})