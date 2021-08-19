describe("Syncs", () => {
  before(() => {
    const link = "https://wcaquino.me/cypress/componentes.html";
    cy.visit(link);
  });

  beforeEach(() => {
    const link = "https://wcaquino.me/cypress/componentes.html";
    cy.visit(link);
  });

  it("Should wait element is available", () => {
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").type("funciona");
  });
});
