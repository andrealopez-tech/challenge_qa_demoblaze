describe('Suite de Automatización - Validación del Formulario de Compra (Demoblaze)', () => {
  
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();
    
    cy.on('window:alert', (textoAlerta) => {
      if (textoAlerta.includes('Product added')) {
        expect(textoAlerta).to.contains('Product added');
      }
    });
    
    cy.get('#cartur').click();
  });

  it('CP-008 & CP-010: Debería abrir el modal "Place Order" y completar la compra con datos válidos', () => {
    cy.contains('Place Order').click();
    cy.get('#orderModal').should('be.visible');

    // Rellenamos el formulario con datos válidos
    cy.get('#name').type('Andrea Tester', { force: true });
    cy.get('#country').type('Venezuela', { force: true });
    cy.get('#city').type('Barquisimeto', { force: true });
    cy.get('#card').type('1234567890123456', { force: true });
    cy.get('#month').type('07', { force: true });
    cy.get('#year').type('2026', { force: true });

    cy.contains('Purchase').click();

    // Validamos el recibo de éxito
    cy.contains('Thank you for your purchase!').should('be.visible');
    cy.contains('OK').click();
  });

  it('CP-009: Debería rechazar el envío si se introducen caracteres no permitidos en campos numéricos (BUG A DETECTAR)', () => {
    cy.contains('Place Order').click();
    cy.get('#orderModal').should('be.visible');

    cy.get('#name').type('andres lopex', { force: true });
    cy.get('#country').type('venezuela', { force: true });
    cy.get('#city').type('NY', { force: true });
    cy.get('#card').type('-41112222', { force: true }); 
    cy.get('#month').type('m', { force: true });         
    cy.get('#year').type('0', { force: true });        

    cy.contains('Purchase').click();


    cy.contains('Thank you for your purchase!').should('not.exist'); 
  });

});