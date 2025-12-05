/* eslint-disable no-undef */
describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("navigates to Card Sets page", () => {
    cy.get("#cardSetPage").click({ force: true });
    cy.contains("Study Set Library");
  });

  it("navigates to About page", () => {
    cy.get("#aboutPage").click({ force: true });
    cy.contains("About Study Night");
  });

  it("navigates to Home page", () => {
    cy.get("#homePage").click({ force: true });
    cy.contains("Study Night");
  });
});
