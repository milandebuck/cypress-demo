describe('your first cypress test ', () => {
  //2
  beforeEach(() => {
    cy.visit('/');
  });
  //1
  it('shoud show a taskboard app', () => {
    cy.get('.task-boar') //command
      .should('be.visible'); //assert
  });

  //3
  // it('shoud have 3 columns', () => {
  //   cy.get('.task-board')
  //     .find('div') //command
  //     .should('have.length', 3); //assert
  // });
  //2
  // it('shoud have 3 columns', () => {
  //   cy.get('.task-board')
  //     .find('div') //command
  //     .should('have.length', 3); //assert
  // });
});
