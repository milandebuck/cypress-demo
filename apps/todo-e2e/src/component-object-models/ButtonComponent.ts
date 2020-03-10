import { ComponentObjectModel } from './ComponentObjectModel';
import { SelectorBuilder } from './selectorBuilder';
export class ButtonComponent extends ComponentObjectModel {
  /**
   *
   */
  constructor(blr: SelectorBuilder) {
    super(blr);
  }
  click() {
    this.compontSelectorBuilder.tryGetElement().click();
  }
}
