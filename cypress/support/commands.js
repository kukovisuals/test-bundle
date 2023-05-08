// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('sideCartText', (fabric) => {
    // Your function implementation here
    const variant = ['xs','sm','md','lg','xl','xsdd','xdd','sdd','mdd','ldd','xldd'];

    cy.get(`.js-swatch .swatch-element.${variant[0]}`).click();
    // Click the "Add to cart" button
    cy.get('#AddToCart').click();
    cy.wait(1000);
    cy.get('.eby-mobile-nav .jsDrawerOpenRight').click();
    cy.wait(5000);
    cy.get('.onetimeTitle.prod_line').eq(0).contains(fabric);
    cy.get('.variant-cart-sel').eq(0).contains(variant[0]);
});
  