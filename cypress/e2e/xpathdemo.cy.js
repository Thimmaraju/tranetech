describe('template spec', () => {
    it('passes', () => {
      cy.visit('/')
      cy.xpath('//input[@name="username"]').type("Admin")
  
    })
  })