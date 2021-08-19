describe("Work with basic elements", () => {
  // Called one  before all tests
  before(() => {
    const link = "https://wcaquino.me/cypress/componentes.html";
    cy.visit(link);
  });

  beforeEach(() => {
    const link = "https://wcaquino.me/cypress/componentes.html";
    cy.visit(link);
  });

  it("Text", () => {
    // Vague approach, the get method will looking for in all tag body
    // cy.get("body").should("contain", "Cuidado");
    cy.get(".facilAchar").should("contain", "Cuidado");

    // The text should be the same
    cy.get(".facilAchar").should(
      "have.text",
      "Cuidado onde clica, muitas armadilhas..."
    );
  });

  it("Links", () => {
    cy.get('[href="#"]').click();
    cy.get("#resultado").should("have.text", "Voltou!");

    cy.reload();

    cy.get("#resultado").should("have.not.text", "Voltou!");
    cy.contains("Voltar").click();
    cy.get("#resultado").should("have.text", "Voltou!");
  });

  it("TextFields", () => {
    const text = "Cypress Test";
    const inputText = "inputText test";
    const textarea = "Text Area";

    cy.get("#formNome").type(text).should("have.value", text);

    cy.get("#elementosForm\\:sugestoes")
      .type(textarea)
      .should("have.value", textarea);

    cy.get(
      "#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input"
    )
      .type(inputText)
      .should("have.value", inputText);

    // {backspace} flag, delete the character
    cy.get("[data-cy=dataSobrenome]")
      .type("Teste12345{backspace}{backspace}")
      .should("have.value", "Teste123");

    cy.get("#elementosForm\\:sugestoes")
      .clear()
      .type("Erro{selectall}acerto", { delay: 150 })
      .should("have.value", "acerto");
  });

  it.only("Radio button", () => {
    cy.get("#formSexoFem").click().should("be.checked");
    cy.get("#formSexo > tbody > tr > :nth-child(1) > label").should(
      "not.be.checked"
    );
    // Check length of radio group
    cy.get("[name='formSexo']").should("have.length", 2);
  });
});
