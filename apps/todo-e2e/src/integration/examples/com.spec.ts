import taskBoardPage from '../../component-object-models/taskBoardComponent';

describe('first testflow with request fixture', () => {
  before(() => {
    cy.server();
  });
  it('add a todo', () => {
    cy.fixture('tasks.json').as('tasks');
    cy.route('GET', '*todo*', '@tasks');
    cy.route('PUT', '*todo', {}).as('moveTask');
    cy.route('POST', '*todo*', {
      _id: 'task-1',
      title: 'stub test',
      content: 'this is a mocked response',
      status: 'New',
      lastUpdated: new Date()
    }).as('addTask');
    cy.visit('/');
    taskBoardPage.addTask.submitForm(
      'move to active',
      'we will move this item'
    );

    cy.wait('@addTask').then(xhr => {
      const { request } = xhr;
      const { content, title } = request.body;

      expect(content).to.equal('we will move this item');
      expect(title).to.equal('move to active');
    });
    const task = taskBoardPage.NewColumn.getTaskbyIndex(3);

    taskBoardPage.moveTask(task, taskBoardPage.ActiveColumn);

    cy.wait('@moveTask');
  });
});
