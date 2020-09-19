describe('forum', () => {
    context('sign up', () => {
        it('register a new user', () => {
            cy.visit('/').contains('Sign Up').click();
            cy.reload();
        })
    })

    context('log in', () => {
        it('log in user', () => {
            cy.visit('/').contains('Log In').click();
            cy.wait(500);
            cy.get('.FormControl[name="identification"]').type('Ralkage');
            cy.wait(500);
            cy.get('.FormControl[name="password"]').type('password123');
            cy.get('form').submit();
        })
    })
})