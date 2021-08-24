describe("Should test a functional login level", () => {
  before(() => {
    cy.login({ email: "lnfernandobr@gmail.com", password: "123456" });
    cy.resetDB();
  });

  it.only("Should create an charge", () => {
    cy.insertCharge("Conta inserida para fim de teste pelo cypress!");
    cy.updateCharge("Conta inserida anteriormente mas agora atualizada!");
  });

});
