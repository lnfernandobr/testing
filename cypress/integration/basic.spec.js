describe("Cypress basic", () => {
  it("Should visit a page and assert title", () => {
    const link = "https://wcaquino.me/cypress/componentes.html";
    cy.visit(link);
    cy.title().should("be.equal", "Campo de Treinamento");
  });

  it("Should find and interact with an element", () => {
    cy.get("#buttonSimple").click().should("have.value", "Obrigado!");
  });
});
