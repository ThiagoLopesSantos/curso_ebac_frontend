/// <reference types="cypress" />

describe('Testes para home', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve adicionar um contato e verificar se está incluso', () => {
        cy.get('input[type="text"]').type('Thiago Lopes')
        cy.get('input[type="email"]').type('thiago@teste.com')
        cy.get('input[type="tel"]').type('21 988555588')       
        cy.get('.adicionar').click()
        cy.contains('Thiago Lopes').should('be.visible')
        cy.screenshot('contato-adicionado')
    })

    it('Deve selecionar o usuário "Thiago Lopes" e editar o nome e email para "Rogerio Gomes" e "rg@teste.com"', () => {
        cy.wait(3000)
        cy.contains('Thiago Lopes').closest('.contato').find('.edit').click()
        cy.get('input[type=text]').clear().type('Rogerio Gomes')
        cy.get('input[type=email]').clear().type('rg@teste.com')
        cy.get('.alterar').click()
        cy.screenshot('editando-contato')
        cy.contains('Rogerio Gomes').should('be.visible')
        cy.screenshot('contato-editado')
        cy.contains('Thiago Lopes').should('not.exist')
    })

    it('Deve selecionar o usuário "Rogerio Gomes e excluí-lo"', () => {
        cy.wait(3000)
        cy.contains('Rogerio Gomes').closest('.contato').find('.delete').click()
        cy.contains('Rogerio Gomes').should('not.exist')
        cy.screenshot('contato-excluido')
    })
})