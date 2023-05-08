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
    cy.visit('/products/bralette-bundle-black-sheer-and-black-bra');
  });
  it(`Should have Subtitle: EBY Seamless Black Sheer Bundle`, () => {
    cy.get(".mobile-intro .subtitle h1")
      .contains('EBY Seamless Bralette Bundle Black Sheer and Black Bra')
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
  
  it(`Adds the bundle to the cart and check prices`, () => {
    cy.sideCartText('Seamless Sheer');
  })
  
});

