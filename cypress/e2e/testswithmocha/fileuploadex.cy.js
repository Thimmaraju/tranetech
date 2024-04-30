///<reference types="cypress"/>

describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file- Attachfile', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').attachFile('Trane Technologies.txt');
      
      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
     // cy.contains("The file's contents are:").should("be.visible")
    })


    
    it('Cypress Test Case - Understanding upload file - Select file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').selectFile('C:/Users/Admin/Documents/CorpCypress/cypress/fixtures/Trane Technologies.txt');
    

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
      cy.wait(10000)
    
      cy.contains("The file's contents are:").should("be.visible")
    })
   
    //Import - Uploading file 

    it.only('Cypress Test Case - Understanding download file ', function () {
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.downloadFile("https://istqb-main-web-prod.s3.amazonaws.com/media/documents/ISTQB_CTFL_Syllabus-v4.0.pdf", "cypress/downloads", "istqbsyllabus"+r+".pdf")
      cy.readFile("cypress/downloads/istqbsyllabus"+r+".pdf").should('exist')
    })

    it('Cypress Test Case - Understanding download file ', function () {
      
      cy.downloadFile("https://img.freepik.com/free-vector/valentines-day-concept-card-paper-cut-style_1017-29864.jpg","cypress/downloads", "card.jpg")
      cy.readFile('cypress/downloads/card.jpg').should('exist')
    })

    it.only('Cypress Test Case - Understanding download file ', function () {
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.downloadFile("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpkxSP-6Y0KTJSekWeQsg6XNTIpcYG9L2b-boxtp-bbg&s","cypress/downloads", "trane"+r+".jpg")
      cy.readFile('cypress/downloads/trane'+r+'.jpg').should('exist')
    })

  })