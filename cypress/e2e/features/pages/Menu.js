import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm at home", () => {
    cy.visit("https://advantageonlineshopping.com/");
})

When("Search for a product", () => {
    cy.get('#menuSearch').type('HP USB 3 BUTTON OPTICAL MOUSE');
})

Then("Presents the researched product", () => {
    cy.get("//a[@class='productName ng-binding']").should('have.text', 'productName ng-binding')
})