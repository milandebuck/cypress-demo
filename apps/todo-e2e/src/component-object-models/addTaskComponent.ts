import { ButtonComponent } from './ButtonComponent';
import { ComponentObjectModel } from './ComponentObjectModel';
import { InputComponent } from './InputComponent';
import { SelectorBuilder } from './selectorBuilder';

export class AddTaskComponent extends ComponentObjectModel {
  titleInput: InputComponent;
  contentInput: InputComponent;
  submitButton: ButtonComponent;

  submitForm(title: string, content: string) {
    this.titleInput.type(title);
    this.contentInput.type(content);
    this.submitButton.click();
  }
  /**
   *
   */
  constructor(blr: SelectorBuilder) {
    const builder = blr.addDataCySelector('add-task');
    super(builder);
    this.titleInput = new InputComponent(
      builder.addDataCySelector('title-input')
    );
    this.contentInput = new InputComponent(
      builder.addDataCySelector('content-input')
    );
    this.submitButton = new ButtonComponent(
      builder.addDataCySelector('submit-button')
    );
  }
}
