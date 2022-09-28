describe("empty spec", () => {
  it("should navigate to the main page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="/projects"]').click();
  });
});
