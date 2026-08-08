'use strict';

/**
 * Flat list of project cards shown in the "PROJECTS" section. This is the
 * only place project content should be edited — see README.md for a
 * walkthrough of adding a new project or case study.
 *
 * A project gets its own case-study page automatically when it defines a
 * `caseStudy` object (see build script: build/build.js). Leave it out for
 * projects that don't have a write-up yet.
 *
 * `caseStudy.gallery` is optional: give it 2+ image paths and the case
 * study page lays them out as a grid; omit it (or give it exactly one)
 * and the project's `image` renders full-width instead.
 */

const PROJECTS = [
  {
    slug: "cofaneti",
    title: "Cofaneti website redesign",
    image: "images/cofaneti.png",
    description: [
      "A complete Shopify storefront redesign for a Spanish upholstered-furniture brand, rebuilt" +
        "with a modern, multilingual, editorial visual identity.",
    ],
    link: "https://cofaneti.com",
    caseStudy: {
      client: "Cofaneti website redesign",
      role: "Shopify Theme Development",
      timeline: "2 weeks",
      stack: ["Shopify Liquid", "JavaScript", "CSS"],
      summary:
        "Cofaneti, a Spanish upholstered-furniture brand, needed a complete redesign of their " +
        "Shopify store — moving away from a dated, generic layout toward a modern, sleek aesthetic " +
        "that matched the quality of their product. Working from the client's reference material and " +
        "design direction, the goal was to rebuild the storefront experience from the ground up: " +
        "homepage, collection pages, product pages, and the overall visual language, so the site felt " +
        "as considered and premium as the furniture itself. The store also needed to support multiple " +
        "languages to serve the brand's international customer base, adding a layer of complexity " +
        "across every template. This redesign also laid the foundation for a separate, more technical " +
        "build — a custom made-to-order headboard configurator — meaning the new theme needed to be " +
        "flexible enough to support that heavier functionality down the line.",
      challenge:
        "The existing store didn't reflect the brand's positioning. Visually, it read as an " +
        "off-the-shelf theme rather than a considered brand experience, which undercut trust for a " +
        "premium, made-to-order furniture brand. The client had a strong point of view — reference " +
        "imagery, a clear aesthetic direction, specific layout preferences — but no single component " +
        "existed yet to unify it into a working Shopify theme. On top of the visual rebuild, the site " +
        "needed to work cleanly across multiple languages, meaning every custom section, layout, and " +
        "piece of dynamic content had to be built with translation and locale-switching in mind from " +
        "the start, not bolted on afterward. The redesign also needed to balance that custom, sleek " +
        "visual identity with practical Shopify constraints: performance, maintainability, and " +
        "compatibility with the more complex configurator functionality being built alongside it.",
      solution:
        "Rebuilt the storefront from the ground up with a modern, minimal visual language matched " +
        "closely to the client's references — custom section layouts, typography, and spacing designed " +
        "to feel premium and editorial rather than templated. Key pages (home, collections, product) " +
        "were redesigned individually to support the brand's product photography and messaging, while " +
        "keeping the underlying theme structure clean and flexible enough to integrate the custom " +
        "headboard configurator as a distinct, more technical layer on top. The theme was built with " +
        "Shopify's native multilanguage support throughout, so every custom section and piece of " +
        "content translates correctly and customers can browse and shop in their preferred language. " +
        "The result is a cohesive, multilingual site that reads as a custom-built brand experience end " +
        "to end, not a stock theme with a new coat of paint.",
      gallery: ["images/cofaneti.png", "images/cofaneti2.png"],
    },
  },
  {
    slug: "finalpress",
    title: "FinalPress Website Redesign & Conversion Optimization",
    image: "images/finalpress.png",
    description: [
      "A multi-phase Shopify engagement covering full theme redesign, site-wide speed optimization," +
        "and custom order tracking for a coffee and tea maker brand.",
    ],
    link: "https://example.com",
    caseStudy: {
      client: "FinalPress Website Redesign & Conversion Optimization",
      role: "Shopify Theme Development",
      timeline: "6 weeks",
      stack: ["Shopify Liquid", "JavaScript", "CSS"],
      summary:
        "FinalPress, a coffee and tea maker brand, needed an ongoing partner to take their " +
        "Shopify store from a slow, generic setup to a fast, conversion-focused storefront. The " +
        "engagement spanned a full theme redesign and re-platforming, site-wide speed " +
        "optimization, a custom order-tracking system, and checkout and cart flow improvements " +
        "built without relying on paid third-party apps.",
      challenge:
        "The store's original theme was slow — page speed scores as low as 30 on mobile — which " +
        "was hurting both user experience and conversions. The client also needed several " +
        "pieces of core functionality that don't exist natively in Shopify: a way for customers " +
        "to look up their own order tracking without an expensive monthly app, a streamlined " +
        "Buy Now flow that skipped the cart page entirely, and checkout-page upsells and order " +
        "bumps, all while staying within the constraints of what Shopify (and later Shopify " +
        "Plus) actually allows to be customized.",
      solution:
        "Built a custom order-tracking page that matches a customer's email or order number " +
        "against a Google Sheet via the Sheets API, giving the client a free, self-managed " +
        "alternative to paid tracking apps — later hardened for privacy by switching the lookup " +
        "from email to order number after a customer flagged exposed data. Streamlined the " +
        "purchase flow so Buy Now routes straight to the product page and Add to Cart bypasses " +
        "the cart page and goes directly to checkout, with the cart still reachable via icon. " +
        "Carried out a full theme redesign and re-platform in stages, matching new reference " +
        "designs (from brands like Aeropress) across desktop and mobile, then repeatedly " +
        "profiled and optimized the site, taking mobile speed from the 30s into the 70s and " +
        "desktop from the 50s into the 90s. Once the client moved to Shopify Plus, used " +
        'checkout extensibility to add an in-checkout order bump ("add one more for $X") and ' +
        "an improved review section, and handled a domain migration with redirects to preserve " +
        "existing Meta ad engagement.",
      gallery: ["images/finalpress.png", "images/finalpress2.png"],
    },
  },
  {
    slug: "cofaneti-headboard-configurator",
    title: "Cofaneti Headboard Configurator",
    image: "images/cofaneti-config.png",
    description: [
      "A custom Node.js pricing engine for made-to-order headboards, calculating dynamic prices across" +
        "six option groups with no third-party app.",
    ],
    link: "https://cofaneti.com/products/custom",
    caseStudy: {
      client: "Cofaneti website redesign",
      role: "Shopify Theme Development",
      timeline: "2 weeks",
      stack: ["Shopify Liquid", "JavaScript", "CSS", "Node.js"],
      summary:
        "A fully custom configurator for Cofaneti's made-to-order headboards, supporting six major " +
        "customization option groups — each with many possible values — where price shifts " +
        "dynamically based on the exact combination a customer selects. Customers can build a bespoke " +
        "headboard and purchase it directly, with no paid third-party app.",
      challenge:
        "With six option groups and dozens of values each, the number of possible combinations was " +
        "far beyond what Shopify's native variant system could handle, and each unique combination " +
        "needed an accurately calculated price before checkout. The client also wanted long-term " +
        "control — the ability to add new options, values, or custom sizing themselves after launch, " +
        "without needing a developer involved for every change.",
      solution:
        "Built a custom Node.js backend to power the configurator's pricing engine: as a customer " +
        "selects options, the server calculates the correct price on the fly and generates a new " +
        "product variant with that exact combination and price, ready for purchase. Option groups and " +
        "values are managed through Shopify metaobjects, so the client can add new options, values, or " +
        "custom size overrides directly — turning a one-off configurator into a maintainable, " +
        "self-service system.",
      gallery: [
        "images/cofaneti-config.png",
        "images/cofaneti-config2.png",
        "images/cofaneti-config3.png",
        "images/cofaneti-config4.png",
      ],
    },
  },
  {
    slug: "fyrehocky",
    title: "Fyrehocky custom team kit",
    image: "images/fyrehocky.png",
    description: [
      "A complete customizeble hocky team kit page where user can use color names " +
        "logo for every player.",
    ],
    link: "https://fyrehockey.com/products/fh_pj01",
    caseStudy: {
      client: "Fyrehocky",
      role: "Shopify Theme Development",
      timeline: "2 weeks",
      stack: ["Shopify Liquid", "JavaScript", "CSS"],
      summary:
        "Fyrehockey needed a fully custom product configurator for their" +
        "team hockey jerseys — one that let customers choose colors, pick logo" +
        "placement, personalize names and numbers, and preview fonts before ordering," +
        "replacing the need for two separate paid Shopify apps.",
      challenge:
        "The client's existing setup couldn't handle the complexity of" +
        "team-sports customization: independent per-player name/number fields" +
        "(not a comma-separated mess), toggleable logo placement (front, shoulder," +
        "back sponsor), color swatches that actually reflected the product images," +
        "and live font previews from their own custom TTF files. Off-the-shelf" +
        "variant/app solutions weren't built for this level of interdependent logic.",
      solution:
        "Built a fully custom Liquid + JS product template with interlinked option" +
        "logic — color swatches synced to real product images, toggleable" +
        "logo-placement fields, roster upload support, and individual name/number" +
        "input cells instead of a single comma-separated field. Added a custom" +
        "font-preview system using the client's own TTF files, rendering live uppercase" +
        "samples with numerals for each font. Later extended the same core template into" +
        "three additional variants (jersey, simplified product, pant) by reusing the" +
        "underlying logic while adjusting the option sets per product type, and fixed a" +
        "mobile Safari bug where uploaded logos were silently dropped before checkout.",
      gallery: ["images/fyrehocky.png", "images/fyrehocky2.png"],
    },
  },
  {
    slug: "co36-bundle-builder",
    title: "Co.36 — Custom Bundle Builder",
    image: "images/co36.png",
    description: [
      "Custom-designed, multi-step bundle configurator for the product page: global size," +
        "per-item colors, and pack size selection across two distinct bundle types.",
    ],
    link: "https://cothirtysix.com/collections/bundles/products/mock-neck-bundle",
    caseStudy: {
      client: "Co.Thirty Six",
      role: "Shopify Theme Development 1",
      timeline: "2 weeks",
      stack: ["Shopify Liquid", "JavaScript", "CSS"],
      summary:
        "Co.Thirty Six needed a fully custom-designed bundle-building experience on the " +
        "product page, letting customers assemble multi-item packs entirely on their own " +
        "terms. The flow was custom designed end-to-end: customers choose a global size " +
        "first, then pick colors for each item in the pack through a custom color-swatch UI, " +
        "then select the pack size itself via a custom pack-size selector — with two distinct, " +
        "custom-designed bundle types supported: one that mixes different products together, " +
        "and one built from multiple units of the same product.",
      challenge:
        "Native Shopify variants and options aren't built for multi-step, interdependent " +
        "bundle logic. The client needed a single global size selection to apply across an " +
        "entire bundle, followed by per-item color choices that update dynamically based on " +
        "the selected pack size, and the whole flow needed to support two structurally " +
        "different bundle types — mixed-product bundles and same-product multi-packs — within " +
        "one coherent PDP experience, without relying on a paid bundle app.",
      solution:
        "Built a fully custom product-page configurator in Liquid and JavaScript that walks " +
        "the customer through global size selection, then per-item color pickers scoped to " +
        "the chosen pack size, then final pack-size confirmation. Implemented two bundle " +
        "variants on the same underlying system: a 'different products' bundle type and a " +
        "'same product, multiple units' bundle type, each reusing the core selection logic " +
        "while branching on how items are presented and validated. Each finished selection is " +
        "packaged for handoff to checkout, where a separate Cart Transform Function and " +
        "Checkout Validation Function (a related but distinct project) expand and validate " +
        "the bundle before purchase.",
      gallery: ["images/co36.png"],
    },
  },
  {
    slug: "co36-cart-transform-checkout-validation",
    title: "Co.36 — Cart Transform & Checkout Validation",
    image: "images/co36-carttransform.png",
    description: [
      "Native Shopify Functions that expand PDP-built bundles into individual SKUs at" +
        "checkout and block incomplete bundles from accelerated checkout paths.",
    ],
    link: "https://cothirtysix.com/collections/bundles/products/mock-neck-bundle",
    caseStudy: {
      client: "Co.36 — Cart Transform & Checkout Validation",
      role: "Shopify backend expert",
      timeline: "2 weeks",
      stack: ["Node.js", "cart transform function", "checkout validation"],
      summary:
        "To get PDP-built bundles safely through Shopify's checkout, Co.Thirty Six needed the " +
        "bundle expanded into its individual SKUs at checkout time, plus a safety net to catch " +
        "bundles that reach checkout incomplete or corrupted — all handled with native Shopify " +
        "Functions rather than a third-party app.",
      challenge:
        "A bundle selected on the product page needed to arrive at checkout as its individual, " +
        "correctly priced SKUs rather than as a single opaque line item. The trickier problem " +
        "was that accelerated checkout paths — specifically Shop Pay links used in Instagram " +
        "ads — bypass the normal product-page JavaScript entirely, so bundle line items could " +
        "reach checkout missing the data needed to expand them correctly, risking incorrect " +
        "orders going through undetected.",
      solution:
        "Built a Cart Transform Function that expands each bundle line item into its " +
        "individual SKUs at checkout, using the pricing and item data captured by the PDP " +
        "configurator so every unit in the bundle checks out at the correct price. The " +
        "function is designed to safely no-op on normal, non-bundle cart items, so it never " +
        "interferes with regular orders. To close a gap on accelerated checkout paths — " +
        "specifically Shop Pay links used in Instagram ads, which bypass the standard product-" +
        "page flow — added a Checkout Validation Function that detects when a bundle product " +
        "reaches checkout without its required configuration data and blocks the order, " +
        "showing the customer a clear error message directing them to re-add the item from the " +
        "product page instead of letting a malformed order go through.",
      gallery: [
        "images/co36-carttransform.png",
        "images/co36-carttransform2.png",
      ],
    },
  },
];

module.exports = { PROJECTS };
