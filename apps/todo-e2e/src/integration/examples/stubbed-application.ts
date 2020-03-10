describe('first testflow with request fixture', () => {
  before(() => {
    cy.server();
  });
  it('add a todo', () => {
    cy.route('GET', '*todo*', {});
    cy.route('POST', '*todo*', {
      _id: 'task-1',
      title: 'stub test',
      content: 'this is a mocked response',
      status: 'New',
      lastUpdated: new Date()
    }).as('addTask');

    cy.get('[data-cy=title-input]')
      .type('test 1')
      .should('have.value', 'test 1');

    cy.get('[data-cy=content-input]')
      .type('my first flow test')
      .should('have.value', 'my first flow test');

    cy.get('[data-cy=submit-button]').click();

    cy.wait('@addTask').then(xhr => {
      const { request } = xhr;
      const { content, title } = request.body;

      expect(content).to.equal('my first flow test');
      expect(title).to.equal('test 1');
    });

    cy.get('[data-cy=task-0]')
      .should('be.visible')
      .find('h3')
      .should('contain.text', 'stub test');
  });
});
