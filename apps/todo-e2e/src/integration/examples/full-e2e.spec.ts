import { Status } from '@cypress-demo/api-interfaces';
import taskBoardPage from '../../component-object-models/taskBoardComponent';
const loopTasks = (fn: (index?: number) => void) => {
  for (let index = 0; index < 5; index++) {
    fn(index);
  }
};
describe('dragging test ', () => {
  before(() => {
    cy.server();
  });

  it('should be able to drag multipe items to diffrent colums and order them correct', () => {
    cy.task('resetDb');
    cy.route('PUT', '*todo*').as('todoUpdate');
    cy.route('POST', '*todo*').as('todoCreate');
    cy.visit('/');
    loopTasks(index => {
      taskBoardPage.addTask.submitForm(
        `task-${index}`,
        `this is the content of task-${index}`
      );
      cy.wait('@todoCreate');
    });

    loopTasks(() => {
      taskBoardPage.moveTask(
        taskBoardPage.NewColumn.getTaskbyIndex(0),
        taskBoardPage.ActiveColumn
      );
      cy.wait('@todoUpdate').then(xhr => {
        const { body } = xhr.request;
        expect(body.status).to.equal(Status.Active);
        cy.wait(500);
      });
    });

    loopTasks(() => {
      taskBoardPage.moveTask(
        taskBoardPage.ActiveColumn.getTaskbyIndex(0),
        taskBoardPage.DoneColumn
      );
      cy.wait('@todoUpdate').then(xhr => {
        const { body } = xhr.request;
        expect(body.status).to.equal(Status.Done);
        cy.wait(500);
      });
    });
  });
});
