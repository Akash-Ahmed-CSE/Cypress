describe('suit name', () => {
    it('Test1', () => {
      cy.visit("https://192.168.97.56:1107/Login.aspx?ReturnUrl=%2f")
      cy.get('#login_UserName').type('admin')
      cy.get('#login_Password').type('Test@123')
      cy.get('#login_LoginImageButton').click()

      cy.get('#treeview-1010-record-21 > tbody > .x-grid-tree-node-leaf > .x-grid-cell > .x-grid-cell-inner').click()
      
    })
  })
