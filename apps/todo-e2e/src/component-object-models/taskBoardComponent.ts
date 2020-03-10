import { Status } from '@cypress-demo/api-interfaces';
import { AddTaskComponent } from './addTaskComponent';
import { ColumnComponent } from './columnComponent';
import { ComponentObjectModel } from './ComponentObjectModel';
import { SelectorBuilder } from './selectorBuilder';
import { TaskComponent } from './TaskComponent';

class TaskBoardComponent extends ComponentObjectModel {
  addTask: AddTaskComponent;
  NewColumn: ColumnComponent;
  ActiveColumn: ColumnComponent;
  DoneColumn: ColumnComponent;
  constructor() {
    const rootBuilder = new SelectorBuilder().addDataCySelector('task-board');
    super(new SelectorBuilder().addDataCySelector('task-board'));
    this.addTask = new AddTaskComponent(rootBuilder);
    this.NewColumn = new ColumnComponent(rootBuilder, Status.New);
    this.ActiveColumn = new ColumnComponent(rootBuilder, Status.Active);
    this.DoneColumn = new ColumnComponent(rootBuilder, Status.Done);
  }

  moveTask(task: TaskComponent, column: ColumnComponent) {
    cy.dragAndDrop(
      task.compontSelectorBuilder.getFullSelector(),
      column.dropBox.getFullSelector()
    );
  }
}

export default new TaskBoardComponent();
