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
 
const subtitle = "EBY seamless bralette bundle black sheer and black bra";

describe(`Bralette Bundle Black Sheer + Black `, () => {
  beforeEach(() => {
    cy.visit('/products/bralette-bundle-black-sheer-and-black-bra');
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
  const variant = ['xs','sm','md','lg','xl','sdd','mdd','ldd'];

  it(`Adds the bundle to the cart, checks title, variant ${variant[0]}, qty, savings`, () => {
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
        expect(textContent).to.include('Black');
      });
    // qnty 
    cy.get('.velaQty .qtyNum').eq(index)
      .should('have.value', '1');
    // savings
    cy.get('.prodItem-promoSummaryCopy').eq(index)
      .should(($el) => {
          const textContent = $el.text();
          expect(textContent).to.include('  Part of Sheer Bralette Bundle ');
        });
    cy.get('.prodItem-promoSummaryCopy span').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('(-$6)');
      });
    //price discount
    cy.get('.strikethrough-price .bfx-old-price.bfx-price').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('$50');
      });
    cy.get('.has-discount.bfx-product-subtotal.bfx-price').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('$44');
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
  
  for (let sizeVariant = 1; sizeVariant < variant.length; sizeVariant++) {

    it(`Adds the bundle to the cart, variant ${variant[sizeVariant]}`, () => {
      
      let index = 0;

      cy.get(`.js-swatch .swatch-element.${variant[sizeVariant]}`).click();
      // Click the "Add to cart" button
      cy.get('#AddToCart').click();
      cy.wait(5000);
      cy.get('.eby-mobile-nav .jsDrawerOpenRight').click();
      //variant
      cy.get('.variant-cart-sel').eq(index)
        .should(($el) => {
          const textContent = $el.text();
          expect(textContent).to.include(variant[sizeVariant]);
        });
      // qnty 
      cy.get('.velaQty .qtyNum').eq(index)
        .should('have.value', '1');
      // ------------- 2nd item ------------------------------------
      index = 1
      //variant
      cy.get('.variant-cart-sel').eq(index)
        .should(($el) => {
          const textContent = $el.text();
          expect(textContent).to.include(variant[sizeVariant]);
        });
      // qnty 
      cy.get('.velaQty .qtyNum').eq(index)
        .should('have.value', '1');
    })
  }
  /*
   *****************************************************************
   * Desktop
   ***************************************************************** 
  */

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
        expect(textContent).to.include('Seamless Sheer');
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
          expect(textContent).to.include(' Part of Sheer Bralette Bundle ');
        });
    cy.get('.prodItem-promoSummaryCopy span').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('(-$6)');
      });
    //price discount
    cy.get('.strikethrough-price .bfx-old-price.bfx-price').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('$50');
      });
    cy.get('.has-discount.bfx-product-subtotal.bfx-price').eq(index)
      .should(($el) => {
        const textContent = $el.text();
        expect(textContent).to.include('$44');
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
  
  for (let sizeVariant = 1; sizeVariant < variant.length; sizeVariant++) {

    it(`Adds the bundle to the cart, variant ${variant[sizeVariant]}`, () => {
      
      cy.viewport(1366, 768);
      
      let index = 0;

      cy.get(`.js-swatch .swatch-element.${variant[sizeVariant]}`).click();
      // Click the "Add to cart" button
      cy.get('#AddToCart').click();
      cy.wait(5000);
      cy.get('.eby-nav-laptop .jsDrawerOpenRight').click();
      //variant
      cy.get('.variant-cart-sel').eq(index)
        .should(($el) => {
          const textContent = $el.text();
          expect(textContent).to.include(variant[sizeVariant]);
        });
      // qnty 
      cy.get('.velaQty .qtyNum').eq(index)
        .should('have.value', '1');
      // ------------- 2nd item ------------------------------------
      index = 1
      //variant
      cy.get('.variant-cart-sel').eq(index)
        .should(($el) => {
          const textContent = $el.text();
          expect(textContent).to.include(variant[sizeVariant]);
        });
      // qnty 
      cy.get('.velaQty .qtyNum').eq(index)
        .should('have.value', '1');
    })
  }
});
