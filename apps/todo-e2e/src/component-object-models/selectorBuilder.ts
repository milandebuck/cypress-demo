export class SelectorBuilder {
  private selectors: string[];
  /**
   *
   */
  constructor(prevSelectors: string[] = []) {
    this.selectors = [...prevSelectors];
  }

  addDataCySelector(selector: string): SelectorBuilder {
    return this.addCssSelector(`[data-cy=${selector}]`);
  }

  addCssSelector(selector: string) {
    const newBlr = new SelectorBuilder(this.selectors);
    newBlr.selectors.push(selector);
    return newBlr;
  }

  tryGetElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    const selector = this.getFullSelector();
    return cy.get(selector);
  }

  getFullSelector(): string {
    return this.selectors.join(' ');
  }
}
