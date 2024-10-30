/// <reference types="cypress" />

describe('Api Adopet', () => {
        
    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url:'https://adopet-api-i8qu.onrender.com/mensagem/5bbe6e7b-df03-411a-a460-ffa2a6d4f566',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('msg');
            
        });
    });
});

