/// <reference types="Cypress"/>

describe('put user request', () => {

  let accessToken = '712b7dfdfad3c752011968c5893be55978cf14247b964c68ce385b24827523da';
  let randomText = '';
  let randomEmail = '';

  it('should edit user', () => {

    var pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for(var i=0; i < 10; i++){
      randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length))
      randomEmail = randomText + '@gmail.com'
    }

    cy.request({
      method:'PUT',
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
        expect(res.body).has.property('name', 'Test Automation Cypress1')
        expect(res.body).has.property('email','testing@gmail.com')
        expect(res.body).has.property('gender','male')
        expect(res.body).has.property('status','active')     
    })
  })
})