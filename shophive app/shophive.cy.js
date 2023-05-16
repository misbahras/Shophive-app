describe('shophive',()=>{
    it('end to end flow',()=>{
        cy.visit('https://www.shophive.com/')/// launch website
        cy.contains('Welcome to Shophive!').click() ///assertion
        cy.get('#search').type('tv')
        cy.get('button.action.search').click()
        cy.contains('Hotline: 03-111-746-756').click()
        cy.get(':nth-child(2) > .product-item-info > .product-show > .product > .main-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        ///cy.get('.input-text qty').select('2')
        cy.get('#product-addtocart-button').click()
        cy.reload()
       /// cy.wait(5000)
        ///cy.contains('TCL').should('be.visible')
        cy.get('ul.footer-links li').should('have.length','12')
        cy.get('div.footer-main li').should('have.length','16')
        cy.get('#newsletter').type('123@gmail.com')
        cy.get('button.hover-effect07').click()

        

        
    
        
       

        
        
        
        
        


    
    
    })
    

        
    })