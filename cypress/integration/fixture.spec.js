describe("Fixtures testes", () => {
  // Called one  before all tests
  before(() => {
    const link = "https://wcaquino.me/cypress/componentes.html";
    cy.visit(link);
  });

  beforeEach(() => {
    const link = "https://wcaquino.me/cypress/componentes.html";
    cy.visit(link);
  });

  it("Get data from fixture file ", function () {
    cy.fixture("userData")
      .as("user")
      .then(function () {
        cy.get("#formNome").type(this.user.name);
        cy.get("#formSobrenome").type(this.user.lastName);
      });

    cy.clickAlert("#alert", "Hello there!");
  });
});
