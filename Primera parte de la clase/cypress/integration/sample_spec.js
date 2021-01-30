describe('My First Cypress Test', () => {
    it('first assert', () => {
        expect(true).to.equal(true)
    })

    it('first Cypress test on a webpage', () => {
        cy.visit('https://example.cypress.io') //ARRANGE
        cy.contains('type').click() //ACT
        cy.url().should('include', '/commands/actions') // ASSERT, reemplaza el console.log -   En la url debe contener esta url de la página

        cy.get('.action-email')
            .type('jeronimo.alzate@udea.edu.co')
            .should('have.value', 'jeronimo.alzate@udea.edu.co')
    })


    it('Search a product in Jumbo', () => {
        cy.visit('https://www.tiendasjumbo.co/') //ARRANGE
        cy.get('.search-autocomplete-mobile__input').type('ipad {enter}')
        cy.url().should('include', '/busca/?ft=ipad')

        cy.contains('iPad').click()
        //cy.get('')
    })
})