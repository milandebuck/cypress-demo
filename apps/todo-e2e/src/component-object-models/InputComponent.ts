import { ComponentObjectModel } from './ComponentObjectModel';
import { SelectorBuilder } from './selectorBuilder';
export class InputComponent extends ComponentObjectModel {
  /**
   *
   */
  constructor(blr: SelectorBuilder) {
    super(blr);
  }
  type(text: string) {
    this.compontSelectorBuilder.tryGetElement().type(text);
  }
}
