/// <reference types="cypress" />

describe('Página de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })
  it.only('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    
    cy.cadastrar('Tiagoa', 'tiagooask001@email.com', 'Senha123', 'Senha123');

  })

  it('Visite a página principal do AdoPet e clique no botão "Ver pets disponíveis para adoção"', () => {
    
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  })

  it('Visite a página de principal do AdoPet e teste os botões header', () => {
    cy.get('.header__home').click();
    cy.get('.header__message').click();
  })

  it('Visite a página de /home do Adopet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    cy.get('.card__contact').eq(0).click();
  })
})