describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')


       
    //1. Agregacion de Dos productos al carrito
        //Agregar el primer producto
    cy.contains("Samsung galaxy s6").click({ force: true })
    cy.get('.col-sm-12 > .btn').click({ force: true })
    
    cy.on('window:alert', (str) => {
      // Validar el mensaje del alerta
      expect(str).to.equal('Product added');
    });
    
    cy.wait(2000)
    cy.get('.active > .nav-link').click({ force: true })
    
      //Agregar el segundo producto
    cy.contains("Nokia lumia 1520").click({ force: true })
    cy.get('.col-sm-12 > .btn').click({ force: true })

    cy.on('window:alert', (str) => {
      // Validar el mensaje del alerta
      expect(str).to.equal('Product added');
    });
      
    

    //2. Visualización del carrito
    cy.get('#cartur').click({ force: true })
    
    //Validación de existencia de los dos productos en el carrito 
    cy.get('.col-lg-8').should('include.text','Samsung galaxy s6') 
    cy.get('.col-lg-8').should('include.text','Nokia lumia 1520') 
    cy.wait(2000)

    //3. Completar el formulario de compra
    cy.get('.col-lg-1 > .btn').click({ force: true })
    
    cy.get('#name').type("Carlos Rivas") 
    cy.get('#country').type("Venezuela") 
    cy.get('#city').type("Los Teques") 
    cy.get('#card').type("5018782000655840872") 
    cy.get('#month').type("Mayo") 
    cy.get('#year').type("2024")
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({ force: true })
    
    //4. Finalizar la Compra 
    cy.get('.lead').should('include.text','5018782000655840872') 

    cy.get('.confirm').click({ force: true })

  })
})