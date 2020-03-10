import { ComponentObjectModel } from './ComponentObjectModel';
import { SelectorBuilder } from './selectorBuilder';

export class TaskComponent extends ComponentObjectModel {
  title: SelectorBuilder;
  content: SelectorBuilder;
  /**
   *
   */
  constructor(blr: SelectorBuilder) {
    super(blr);
    this.title = blr.addDataCySelector('task-title');
    this.content = blr.addDataCySelector('task-content');
  }
}
