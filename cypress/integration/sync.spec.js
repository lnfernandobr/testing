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
  it("TimeOut", () => {
    cy.get("#buttonDelay").click();
    // default cypress Timeout is 4 seconds.
    // cy.get("#novoCampo", { timeout: 10000 }).type("funciona");

    // This command gonna wait for 5 seconds
    cy.wait(5000);
  });

  it.only("Click retry", () => {
    // Comandos que alteram o html nao possuem retries.
    // cy.get("#buttonCount").click().should("have.value", "11");

    // Da erro, porque ele espera encontrar 111, mas o retry acontece no should, nao no click.
    // cy.get("#buttonCount").click().should("have.value", "11");

    cy.get("#buttonCount").click().click().should("have.value", "11");
  });

  it.only("should vs then ", () => {
    cy.get("#buttonListDOM").click();

    cy.get("#lista li span").then((element) => {
      expect(element).to.have.length(1);
    });

    cy.get("#lista li span").should((element) => {
      expect(element).to.have.length(1);
    });

    cy.get("#buttonListDOM")
      .then((element) => {
        expect(element).to.have.length(1);
        return 2;
      })
      .and("equal", 2)
      .and("not.have.id", "buttonListDOM");

    // No then vc pode chamar outra promise, dentro do should nao, ele vai ficar maluco.
    // Then aguarda o get finalizar para executar o callback. O then retorna o que vc quiser para as assertivas seguintes
    // Should executa o callback todas as vezes em que o get tenta obter o resultado. O should sempre retorna o elemento para as assetivas seguindtes, independente do que vc retorne
  });
});
