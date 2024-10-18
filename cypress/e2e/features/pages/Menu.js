import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm at home", () => {
    cy.visit("https://advantageonlineshopping.com/");
})

When("Search for a product {string}", (nameProduct) => {
    cy.get('input[placeholder="Search"]').type(nameProduct);
    cy.get('svg.img').click();
})

When("Add many products:", (dataTable) => {
    var counter = 0;

    dataTable.hashes().forEach(row => {
        const productName = row.productName;
        if(counter > 0) {
            cy.get('a[class="ng-scope"]').click();
        }
        cy.get('input[placeholder="Search"]').type(productName);
        cy.get('svg.img').click();
        cy.xpath('//a[@class="productName ng-binding"]').click();
        cy.xpath('//button[@class="roboto-medium ng-scope"]').click();
        counter++;
      });
})

Then("Presents the researched product {string}", (nameProduct) => {
    cy.xpath('//a[@class="productName ng-binding"]').should('have.text', nameProduct);
})