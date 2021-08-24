import { LOCATORS } from "./locators";

Cypress.Commands.add("clickAlert", function (locator, message) {
  cy.get(locator).click();
  expect(message).to.be.equal(message);
});

Cypress.Commands.add("login", function ({ email, password }) {
  const url = "https://barrigareact.wcaquino.me/";
  cy.visit(url);
  cy.get(LOCATORS.LOGIN.EMAIL).type(email);
  cy.get(LOCATORS.LOGIN.PASSWORD).type(password);
  cy.get(LOCATORS.LOGIN.LOGIN_BUTTON).click();
  cy.get(LOCATORS.SUCCESS_MESSAGE).should("contain", "Bem vindo");

  cy.get("[data-test=menu-settings] > .fas").click();
  cy.get('[href="/reset"]').click();
});

Cypress.Commands.add("toChargeMenu", function ({ email, password }) {
  cy.get("[data-test=menu-settings] > .fas").click();
  cy.get('[href="/contas"]').click();
});

Cypress.Commands.add("resetDB", function () {
  cy.get("[data-test=menu-settings] > .fas").click();
  cy.get('[href="/reset"]').click();
});

Cypress.Commands.add("insertCharge", function (chargeTitle) {
  cy.get("[data-test=menu-settings] > .fas").click();
  cy.get('[href="/contas"]').click();
  cy.get("[data-test=nome]").type(chargeTitle);
  cy.get(".btn").click();
  cy.get(".toast").should("contain", "inserida com sucesso");
});

Cypress.Commands.add("updateCharge", function (chargeUpdated) {
  cy.xpath(
    `//table/tbody/tr/td[contains(., "Conta inserida para fim de teste pelo cypress!")]/..//i[@class="far fa-edit"]`
  ).click();
  cy.get("[data-test=nome]").clear().type(chargeUpdated);
  cy.get(".btn").click();
  cy.get(".toast").should("contain", "atualizada com sucesso");
});
