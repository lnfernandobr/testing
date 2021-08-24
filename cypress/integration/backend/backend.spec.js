describe("Should test a functional login level", () => {
  before(() => {
    cy.request({
      method: "POST",
      url: "https://barrigarest.wcaquino.me/signin",
      body: {
        email: "lnfernandobr@gmail.com",
        redirecionar: false,
        senha: "123456",
      },
    })
      .its("body.token")
      .should("not.be.empty");
  });

  it.only("Should create an charge", () => {
    cy.request({
      method: "POST",
      url: "https://barrigarest.wcaquino.me/signin",
      body: {
        email: "lnfernandobr@gmail.com",
        redirecionar: false,
        senha: "123456",
      },
    })
      .its("body.token")
      .should("not.be.empty");
  });
});
