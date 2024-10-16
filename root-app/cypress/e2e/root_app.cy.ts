describe("Root App E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should load the root app successfully", () => {
    cy.get("body").should("exist");
  });

  it("should display the header microfrontend", () => {
    cy.get("header").should("exist");
  });

  it("should display the footer microfrontend", () => {
    cy.get("footer").should("exist");
  });

  it("should show the product list", () => {
    cy.get('[data-cy="product-list"]').should("exist");
    cy.get('[data-testid="card"]').should("have.length.greaterThan", 0);
  });

  it("should handle adding products to cart", () => {
    cy.contains("Comprar").first().click();

    cy.get('[data-testid="cart-button"]').should("contain", "1");
  });
});
