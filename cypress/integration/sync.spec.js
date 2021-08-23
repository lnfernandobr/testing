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

  it("Should make retries", () => {
    cy.get("#buttonDelay").click();
    cy.get("#novoCampo").should("exist");
  });

  it("Find command", () => {
    cy.get("#buttonList").click();

    cy.get("#lista li").find("span").should("contain", "Item 1");

    // Da erro, porque a lista eh assíncrona, ou seja, demos um get numa lista li aonde tinha somente
    // um item no span, e quando o find foi executado, ou item 2 foi criado. Gerando o erro, o retries do
    // cypress nao funcionou porque ele tenta somente os comandos abaixo do que gerou o erro, e o comando
    // pai do que gerou o erro, ou seja, quem gerou o erro foi o should, nao existia o item 1, entao, ele
    // O comando find era executado, e qualquer um abaixo do sloud tambem seria.
    // cy.get("#lista li").find("span").should("contain", "Item 2");
  });

  // To change default timeout settings of cypress, we need add to cypress.json an props called  defaultCommandTimeout as true
  it.only("TimeOut", () => {
    cy.get("#buttonDelay").click();
    // default cypress Timeout is 4 seconds.
    // cy.get("#novoCampo", { timeout: 10000 }).type("funciona");

    // This command gonna wait for 5 seconds
    cy.wait(5000);
  });



});
