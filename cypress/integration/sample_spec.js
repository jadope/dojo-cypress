describe('Mercadolibre Cypress Testing Search', () => {
    it('gets cellphone', () => {
        cy.visit('/') //arrange
        cy.get('.mr-sm-2').clear()
        cy.get('.mr-sm-2').type('iPhone {enter}')
        cy.wait(3000)
        cy.contains('iPhone').click()

    })

    
})