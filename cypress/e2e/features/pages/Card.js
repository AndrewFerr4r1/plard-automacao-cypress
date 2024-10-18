import { Then, And, When } from 'cypress-cucumber-preprocessor/steps'

And("Click Product", () => {
    cy.xpath('//a[@class="productName ng-binding"]').click();
})

And("Click add card", () => {
    cy.xpath('//button[@class="roboto-medium ng-scope"]').click();
})

When("Displays products in cart:", (dataTable) => {
    var counter = 1;

    dataTable.hashes().forEach(row => {
        const productName = row.productName;
        cy.get('svg#menuCart').click();
        cy.xpath(`(//label[@class="roboto-regular productName ng-binding"])[${counter}]`).should('have.text', productName.toUpperCase());
        counter++;
      });
})

Then("Product be cart {string}", (nameProduct) => {
    cy.get('svg#menuCart').click();
    cy.xpath('//label[@class="roboto-regular productName ng-binding"]').should('have.text', nameProduct.toUpperCase());
})

