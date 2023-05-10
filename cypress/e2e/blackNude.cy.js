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
    npx cypress run --spec "cypress/e2e/blackBlack.cy.js
    ************************************
*/
const subtitle = "EBY seamless bralette bundle black and nude bra";

describe(`Bralette Bundle Black + Nude `, () => {
  beforeEach(() => {
    cy.visit('/products/bralette-bundle-black-and-nude');
  });

  it(`Should have Subtitle: ${subtitle}`, () => {
    cy.get(".mobile-intro .subtitle h1")
      .contains(subtitle)
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
    let index = 0;

    cy.get(`.js-swatch .swatch-element.${variant[0]}`).click();
    // Click the "Add to cart" button
    cy.get('#AddToCart').click();
    cy.wait(5000);
    cy.get('.eby-mobile-nav .jsDrawerOpenRight').click();
    // after click on side cart
    cy.get('.onetimeTitle.prod_line').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('Seamless');
      });
    // tittle
    cy.get('.onetimeTitle.prod_style a').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('Bralette');
      });
    //variant
    cy.get('.variant-cart-sel').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include(variant[0]);
      });
    //variant
    cy.get('.onetimeTitle.prod_color').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('Nude');
      });
    // qnty 
    cy.get('.velaQty .qtyNum').eq(index)
      .should('have.value', '1');
    // savings
    cy.get('.prodItem-promoSummaryCopy').eq(index)
      .should(($el) => {
          const textContent = $el.text();
          expect(textContent).to.include(' Part of Bralette Bundle ');
        });
    cy.get('.prodItem-promoSummaryCopy span').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('(-$9)');
      });
    //price discount
    cy.get('.strikethrough-price .bfx-old-price.bfx-price').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('$56');
      });
    cy.get('.has-discount.bfx-product-subtotal.bfx-price').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('$47');
      });
    // ----------------------2nd item-------------------------------
    index = 1;

    cy.get('.onetimeTitle.prod_line').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('Seamless');
      });
    // tittle
    cy.get('.onetimeTitle.prod_style a').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('Bralette');
      });
    //variant
    cy.get('.variant-cart-sel').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include(variant[0]);
      });
    //variant
    cy.get('.onetimeTitle.prod_color').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('Black');
      });
    // qnty 
    cy.get('.velaQty .qtyNum').eq(index)
      .should('have.value', '1');
    // savings
    cy.get('.prodItem-promoSummaryCopy').eq(index)
      .should(($el) => {
          const textContent = $el.text();
          expect(textContent).to.include(' Part of Bralette Bundle ');
        });
    cy.get('.prodItem-promoSummaryCopy span').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('(-$9)');
      });
    //price discount
    cy.get('.strikethrough-price .bfx-old-price.bfx-price').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('$56');
      });
    cy.get('.has-discount.bfx-product-subtotal.bfx-price').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('$47');
      });
  });

  /*
   *****************************************************************
   * Desktop
   ***************************************************************** 
  */

  it(`Should have Subtitle: ${subtitle}`, () => {
    cy.viewport(1366, 768);
    cy.get(".eby-title-block-pdp-2022 .subtitle h3")
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include(subtitle);
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
    let index = 0;

    cy.get(`.js-swatch .swatch-element.${variant[0]}`).click();
    // Click the "Add to cart" button
    cy.get('#AddToCart').click();
    cy.wait(5000);
    cy.get('.eby-nav-laptop .jsDrawerOpenRight').click();
    // after click on side cart
    cy.get('.onetimeTitle.prod_line').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('Seamless');
      });
    // tittle
    cy.get('.onetimeTitle.prod_style a').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('Bralette');
      });
    //variant
    cy.get('.variant-cart-sel').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include(variant[0]);
      });
    //variant
    cy.get('.onetimeTitle.prod_color').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('Nude');
      });
    // qnty 
    cy.get('.velaQty .qtyNum').eq(index)
      .should('have.value', '1');
    // savings
    cy.get('.prodItem-promoSummaryCopy').eq(index)
      .should(($el) => {
          const textContent = $el.text();
          expect(textContent).to.include(' Part of Bralette Bundle ');
        });
    cy.get('.prodItem-promoSummaryCopy span').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('(-$9)');
      });
    //price discount
    cy.get('.strikethrough-price .bfx-old-price.bfx-price').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('$56');
      });
    cy.get('.has-discount.bfx-product-subtotal.bfx-price').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('$47');
      });
    // ----------------------2nd item-------------------------------
    index = 1;

    cy.get('.onetimeTitle.prod_line').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('Seamless');
      });
    // tittle
    cy.get('.onetimeTitle.prod_style a').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('Bralette');
      });
    //variant
    cy.get('.variant-cart-sel').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include(variant[0]);
      });
    //variant
    cy.get('.onetimeTitle.prod_color').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('Black');
      });
    // qnty 
    cy.get('.velaQty .qtyNum').eq(index)
      .should('have.value', '1');
    // savings
    cy.get('.prodItem-promoSummaryCopy').eq(index)
      .should(($el) => {
          const textContent = $el.text();
          expect(textContent).to.include(' Part of Bralette Bundle ');
        });
    cy.get('.prodItem-promoSummaryCopy span').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('(-$9)');
      });
    //price discount
    cy.get('.strikethrough-price .bfx-old-price.bfx-price').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('$56');
      });
    cy.get('.has-discount.bfx-product-subtotal.bfx-price').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('$47');
      });
  });
  
});


