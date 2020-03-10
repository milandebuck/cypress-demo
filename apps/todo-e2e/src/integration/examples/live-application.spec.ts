describe('first testflow', () => {
  it('add a todo', () => {
    cy.task('resetDb');

    cy.visit('/');

    cy.get('[data-cy=title-input]')
      .type('test 1')
      .should('have.value', 'test 1');

    cy.get('[data-cy=content-input]')
      .type('my first flow test')
      .should('have.value', 'my first flow test');

    cy.get('[data-cy=submit-button]').click();

    cy.get('[data-cy=task-0]')
      .should('be.visible')
      .find('h3')
      .should('contain.text', 'test 1');
  });
});
