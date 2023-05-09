/*
    ***********************************
    *  :: Paste Array in pdps ::
    *  Change values here
     _._     _,-'""`-._
    (,-.`._,'(       |\`-/|
        `-.-' \ )-`( , o o)
              `-    \`_`"'-
    open cypress -> npx cypress open
    report ---> npx cypress run --reporter mochawesome
    npx cypress run --spec "cypress/e2e/blackSheerBlack.cy.js
    ************************************
*/

describe(`Bralette Bundle Black + Black `, () => {
  beforeEach(() => {
    cy.visit('/products/black-bralette-bundle');
  });

  it(`Should have Subtitle: EBY Seamless Black Bralette Bundle`, () => {
    cy.get(".mobile-intro .subtitle h1")
      .contains('EBY Seamless Black Bralette Bundle')
  });

  it(`Should have Title: Bralette Bundle`, () => {
    cy.get(".mobile-intro h2.product-name")
      .contains('Bralette Bundle')
  });

  it(`Should have Price of $94 in red and $112 in gray \n Should have $94 in ADD TO CART`, () => {
    cy.get(".mobile-intro .nrml-price23")
      .should(($el) => {
        const element = $el[0];
        const computedStyle = getComputedStyle(element);
        expect($el).contain('$94')
        // Check if the color is red
        expect(computedStyle.color).to.equal('rgb(208, 2, 27)');
      });
    cy.get(".mobile-intro .isBundleBraExtra23")
      .should(($el) => {
        const element = $el[0];
        const computedStyle = getComputedStyle(element);
        expect($el).contain('$112')
        // Check if the color is red
        expect(computedStyle.color).to.equal('rgb(127, 131, 151)');

        // Check if the text-decoration includes a line-through style
        expect(computedStyle.textDecoration).to.include('line-through');
      });
    cy.get("#total-pdp-rby")
      .contains('$94')
  });
  /*
   *****************************************************************
   * Test Add to cart
   ***************************************************************** 
  */

  it(`Adds the bundle to the cart, checks title, variant, qty, savings`, () => {
    const variant = ['xs','sm','md','lg','xl','xsdd','xdd','sdd','mdd','ldd','xldd'];

    cy.get(`.js-swatch .swatch-element.${variant[0]}`).click();
    // Click the "Add to cart" button
    cy.get('#AddToCart').click();
    cy.wait(1000);
    cy.get('.eby-mobile-nav .jsDrawerOpenRight').click();
    cy.wait(5000);
    cy.get('.onetimeTitle.prod_line').eq(0).contains('Seamless');
    cy.get('.variant-cart-sel').eq(0).contains(variant[0]);
  });

  /*
   *****************************************************************
   * Desktop
   ***************************************************************** 
  */

  it(`Should have Subtitle: EBY Seamless Black Bralette Bundle`, () => {
    cy.viewport(1366, 768);
    cy.get(".eby-title-block-pdp-2022 .subtitle h3")
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('EBY Seamless Black Bralette Bundle');
      });
  });

  it(`Should have Title: Bralette Bundle`, () => {
    cy.viewport(1366, 768);
    cy.get("h4.product-name-desktop")
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('Bralette bundle');
      });
  });

  it(`Should have Price of $94 in red and $112 in gray \n Should have $94 in ADD TO CART`, () => {
    cy.viewport(1366, 768);
    cy.get("#eby-price-observer-desk .nrml-price23")
      .should(($el) => {
        const element = $el[0];
        const computedStyle = getComputedStyle(element);
        expect($el).contain('$94')
        // Check if the color is red
        expect(computedStyle.color).to.equal('rgb(208, 2, 27)');
      });
    cy.get(".isBundleBraExtra23")
      .should(($el) => {
        const element = $el[0];
        const computedStyle = getComputedStyle(element);
        expect($el).contain('$112')
        // Check if the color is red
        expect(computedStyle.color).to.equal('rgb(127, 131, 151)');

        // Check if the text-decoration includes a line-through style
        expect(computedStyle.textDecoration).to.include('line-through');
      });
    cy.get("#total-pdp-rby")
      .contains('$94')
  });

  it(`Adds the bundle to the cart, checks title, variant, qty, savings`, () => {
    cy.viewport(1366, 768);
    const variant = ['xs','sm','md','lg','xl','xsdd','xdd','sdd','mdd','ldd','xldd'];

    cy.get(`.js-swatch .swatch-element.${variant[0]}`).click();
    // Click the "Add to cart" button
    cy.get('#AddToCart').click();
    cy.wait(5000);
    cy.get('.eby-nav-laptop .jsDrawerOpenRight').click();
    cy.get('.onetimeTitle.prod_line').eq(0).contains('Seamless Sheer');
    cy.get('.variant-cart-sel').eq(0).contains(variant[0]);
  });
  
});
