it("A external test...", () => {});

describe("Helpers", () => {
  before(() => {
    const link = "https://wcaquino.me/cypress/componentes.html";
    cy.visit(link);
  });

  it("Wrap", () => {
    const obj = {
      name: "Fernando",
      old: 23,
    };

    // Wrap object
    cy.wrap(obj).should("have.property", "name"); // === expect(obj).to.have.property("name");

    cy.get("#formNome").type("funciona?");
    cy.get("#formNome").then((element) => {
      // The element doesn't have cy methods, so we need wrapped the object again to manipulate it
      cy.wrap(element).clear().type("FUNCIONOU!");
    });

    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(10);
      }, 1000);
    });

    cy.get("#buttonSimple").then(() => console.log("First button"));
    cy.wrap(myPromise).then(() => console.log("my promise"));
    cy.get("#buttonList").then(() => console.log("Second button"));
  });

  it.only("Its", () => {
    const street = "Luffy street";
    const obj = {
      name: "Fernando",
      address: {
        street,
      },
    };

    // Wrap object
    cy.wrap(obj).its("address.street").should("contain", street);
  });

  it.only("Invoke", () => {
    const getValues = () => 1;
    const sumValues = (a, b, c) => a + b + c;

    cy.wrap({ getValues }).invoke("getValues").should("be.equal", 1);
    cy.wrap({ sumValues }).invoke("sumValues", 1, 2, 5).should("be.equal", 8);

    cy.get("#formNome").invoke("val", "Texto via invoke");

    cy.window().invoke("alert", "Fala mano whi");
    cy.get("#resultado").invoke(
      "html",
      "<input type='button' value='Hackeado'>"
    );
  });
});
