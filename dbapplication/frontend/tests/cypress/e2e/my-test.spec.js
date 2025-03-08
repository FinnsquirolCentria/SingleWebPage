describe('User Management Page', () => {
    it('should load the page and display the main elements', () => {
        cy.visit('http://localhost:3000');

        // Check that the header is visible
        cy.contains('User Management').should('be.visible');

        // Check that the Add User button is visible
        cy.contains('Add User').should('be.visible');

        // Check that the User List table header is visible
        cy.contains('User List').should('be.visible');
    });
});
