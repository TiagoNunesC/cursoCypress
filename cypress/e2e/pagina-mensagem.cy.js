/// <reference types="cypress" />

describe('Página de mensagem', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__message').click();
    })
    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        
        cy.login('tiagoo2001@email.com','Senha123');
        
    })
})