/* eslint-disable no-undef */
describe("Forms Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.get("#cardSetPage").click({ force: true });
  });

  it("successfully creates a new set (happy path)", () => {
    cy.get("[data-cy='toggle_form']").click({ force: true });

    cy.get("[data-cy='set_form']").within(() => {
      cy.get("#titleInput").type("New Set");
      cy.get("input[type='submit']").click({ force: true });
    });

    cy.contains("New Set");
  });

  it("shows error on empty submit (unhappy path)", () => {
    cy.get("[data-cy='toggle_form']").click({ force: true });

    cy.get("[data-cy='set_form']").within(() => {
      cy.get("input[type='submit']").click({ force: true });
    });

    cy.contains("TITLE CANNOT BE EMPTY");
  });
});
