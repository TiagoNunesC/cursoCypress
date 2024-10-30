/// <reference types="cypress" />

describe('Página de Cadastro', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      })

      it('Visite a página principal do AdoPet e clique no botão "Ver pets disponíveis para adoção"', () => {
    
        cy.contains('a', 'Ver pets disponíveis para adoção').click();
        cy.get('.cards').should('be.visible');
      })
})

