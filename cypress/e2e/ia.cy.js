describe('suit name', () => {
    it('Test1', () => {
      cy.visit("http://192.168.97.56:1405/#/login")
      cy.get('.login-form > :nth-child(2) > .ng-untouched').type('ktuly')
      cy.get('.mt-2.input-group > .ng-untouched').type('Test@123')
      cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
      cy.get('.btn').click()

    
      
    })
  })
