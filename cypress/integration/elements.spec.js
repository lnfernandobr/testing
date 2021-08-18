describe("Work with basic elements", () => {
  it("Text", () => {
    const link = "https://wcaquino.me/cypress/componentes.html";
    cy.visit(link);

    // Vague approach, the get method will looking for in all tag body
    // cy.get("body").should("contain", "Cuidado");

    cy.get(".facilAchar").should("contain", "Cuidado");

    // The text should be the same
    cy.get(".facilAchar").should(
      "have.text",
      "Cuidado onde clica, muitas armadilhas..."
    );
  });
});
