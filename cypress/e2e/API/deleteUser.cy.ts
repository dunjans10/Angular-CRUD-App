/// <reference types="Cypress"/>

describe('delete user request', () => {

  let accessToken = '712b7dfdfad3c752011968c5893be55978cf14247b964c68ce385b24827523da';


  it('should delete user', () => {

    cy.request({
      method:'DELETE',
      url:'https://gorest.co.in/public/v2/users/4344',
      headers: {
        'authorization' :'Bearer ' + accessToken
      },
      body: {
        "name": 'Test Automation Cypress1',
        "email": 'testing@gmail.com',
        "gender":'male',
        "status": 'active'
      }
    }).then((res)=> {
        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(204)
       
    })
  })
})