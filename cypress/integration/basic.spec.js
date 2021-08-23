describe("Cypress basic", () => {
  it.only("Should visit a page and assert title", () => {
    const link = "https://wcaquino.me/cypress/componentes.html";
    cy.visit(link);
    cy.title().should("be.equal", "Campo de Treinamento");

    cy.title().then((title) => {
      console.log("title with then:", title);
    });

    cy.title().should((title) => {
      console.log("title with should:", title);
    });
  });

  it("Should find and interact with an element", () => {
    cy.get("#buttonSimple").click().should("have.value", "Obrigado!");
  });
});
