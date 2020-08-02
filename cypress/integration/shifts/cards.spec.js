import SELECTORS from "../../support/selectors";

describe("Shift cards", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render the cards correctly", () => {
    cy.get(SELECTORS.ITEM_CARD).eq(0).should("be.visible");

    cy.get(SELECTORS.ITEM_CARD)
      .eq(0)
      .find(SELECTORS.TEXT_PRACTICE)
      .should("have.length", 1);
    cy.get(SELECTORS.ITEM_CARD)
      .eq(0)
      .find(SELECTORS.TEXT_RATE)
      .should("have.length", 1);
    cy.get(SELECTORS.ITEM_CARD)
      .eq(0)
      .find(SELECTORS.TEXT_START)
      .should("have.length", 1);
    cy.get(SELECTORS.ITEM_CARD)
      .eq(0)
      .find(SELECTORS.TEXT_END)
      .should("have.length", 1);
    cy.get(SELECTORS.ITEM_CARD)
      .eq(0)
      .find(SELECTORS.TEXT_APPLICANTS)
      .should("have.length", 1);
  });
});
