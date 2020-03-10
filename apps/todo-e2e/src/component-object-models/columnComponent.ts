import { Status } from '@cypress-demo/api-interfaces';
import { ComponentObjectModel } from './ComponentObjectModel';
import { SelectorBuilder } from './selectorBuilder';
import { TaskComponent } from './TaskComponent';

export class ColumnComponent extends ComponentObjectModel {
  dropBox: SelectorBuilder;
  /**
   *
   */
  constructor(blr: SelectorBuilder, status: Status) {
    const columnBuilder = blr.addDataCySelector(`column-${status}`);
    super(columnBuilder);

    this.dropBox = columnBuilder.addDataCySelector('drop-box');
  }

  getTaskbyIndex(index: number): TaskComponent {
    return new TaskComponent(
      this.compontSelectorBuilder.addDataCySelector(`task-${index}`)
    );
  }
}
