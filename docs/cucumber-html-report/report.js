$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/MothersDayGifts_FreeDelivery.feature");
formatter.feature({
  "line": 1,
  "name": "Mother\u0027s Day Gifts - Free Delivery",
  "description": "As a Customer \nI want to be able to find some \"MOTHER\u0027S DAY GIFTS\" which offers free delivery \n  So that I can purchase one of them",
  "id": "mother\u0027s-day-gifts---free-delivery",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5952951550,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Mother\u0027s Day Filter - Default Delivery Filter",
  "description": "",
  "id": "mother\u0027s-day-gifts---free-delivery;mother\u0027s-day-filter---default-delivery-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@devComplete"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I navigate to the Mother\u0027s Day Gifts page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the Mother\u0027s Day Gifts page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the page is not refine by \"free delivery to mainland UK\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductListingSteps.i_navigate_to_the_mothers_day_gifts_page()"
});
formatter.result({
  "duration": 2350841793,
  "status": "passed"
});
formatter.match({
  "location": "ProductListingSteps.the_mothers_day_gifts_page_is_displayed()"
});
formatter.result({
  "duration": 60527029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "free delivery to mainland UK",
      "offset": 27
    }
  ],
  "location": "ProductListingSteps.the_page_is_not_refine_by(String)"
});
formatter.result({
  "duration": 79978652,
  "status": "passed"
});
formatter.after({
  "duration": 592146152,
  "status": "passed"
});
formatter.before({
  "duration": 4476033349,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Mother\u0027s Day Filter - Free Delivery - PLP first row",
  "description": "",
  "id": "mother\u0027s-day-gifts---free-delivery;mother\u0027s-day-filter---free-delivery---plp-first-row",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@devComplete"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on Mother\u0027s Day Gifts page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I refine by \"free delivery to mainland UK\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the 1st product title is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the 1st product price is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the 1st product has a free UK delivery label",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the 2nd product title is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the 2nd product price is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the 2nd product has a free UK delivery label",
  "keyword": "And "
});
formatter.match({
  "location": "ProductListingSteps.i_am_on_mothers_day_gifts_page()"
});
formatter.result({
  "duration": 2493068327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "free delivery to mainland UK",
      "offset": 13
    }
  ],
  "location": "ProductListingSteps.i_refine_by(String)"
});
formatter.result({
  "duration": 2231091258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_title_is_displayed(int)"
});
formatter.result({
  "duration": 99552564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_price_is_displayed(int)"
});
formatter.result({
  "duration": 91626679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_has_a_free_UK_delivery_label(int)"
});
formatter.result({
  "duration": 83245070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_title_is_displayed(int)"
});
formatter.result({
  "duration": 91055159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_price_is_displayed(int)"
});
formatter.result({
  "duration": 78002554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_has_a_free_UK_delivery_label(int)"
});
formatter.result({
  "duration": 136230008,
  "status": "passed"
});
formatter.after({
  "duration": 602046623,
  "status": "passed"
});
formatter.before({
  "duration": 4849524120,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Mother\u0027s Day Filter - Free Delivery - PLP second page",
  "description": "",
  "id": "mother\u0027s-day-gifts---free-delivery;mother\u0027s-day-filter---free-delivery---plp-second-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@devComplete"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I am on Mother\u0027s Day Gifts page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I refine by \"free delivery to mainland UK\"",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I select the 2nd page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the 1st product title is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "the 1st product price is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the 1st product has a free UK delivery label",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the 2nd product title is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the 2nd product price is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the 2nd product has a free UK delivery label",
  "keyword": "And "
});
formatter.match({
  "location": "ProductListingSteps.i_am_on_mothers_day_gifts_page()"
});
formatter.result({
  "duration": 2649190739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "free delivery to mainland UK",
      "offset": 13
    }
  ],
  "location": "ProductListingSteps.i_refine_by(String)"
});
formatter.result({
  "duration": 1746367968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    }
  ],
  "location": "ProductListingSteps.i_select_the_nth_page(String)"
});
formatter.result({
  "duration": 2192668979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_title_is_displayed(int)"
});
formatter.result({
  "duration": 101296830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_price_is_displayed(int)"
});
formatter.result({
  "duration": 77445301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_has_a_free_UK_delivery_label(int)"
});
formatter.result({
  "duration": 54140430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_title_is_displayed(int)"
});
formatter.result({
  "duration": 46544818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_price_is_displayed(int)"
});
formatter.result({
  "duration": 58862321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_has_a_free_UK_delivery_label(int)"
});
formatter.result({
  "duration": 42977135,
  "status": "passed"
});
formatter.after({
  "duration": 602367089,
  "status": "passed"
});
formatter.before({
  "duration": 3789514930,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Mother\u0027s Day Filter - Free Delivery - PLP multiple filters",
  "description": "",
  "id": "mother\u0027s-day-gifts---free-delivery;mother\u0027s-day-filter---free-delivery---plp-multiple-filters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@devComplete"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "I am on Mother\u0027s Day Gifts page",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "I refine by \"free delivery to mainland UK\"",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I refine by \"asia \u0026 australasia\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the 1st product title is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "the 1st product price is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the 1st product has a free UK delivery label",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the 2nd product title is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the 2nd product price is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the 2nd product has a free UK delivery label",
  "keyword": "And "
});
formatter.match({
  "location": "ProductListingSteps.i_am_on_mothers_day_gifts_page()"
});
formatter.result({
  "duration": 1980460986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "free delivery to mainland UK",
      "offset": 13
    }
  ],
  "location": "ProductListingSteps.i_refine_by(String)"
});
formatter.result({
  "duration": 1399625905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asia \u0026 australasia",
      "offset": 13
    }
  ],
  "location": "ProductListingSteps.i_refine_by(String)"
});
formatter.result({
  "duration": 1583315103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_title_is_displayed(int)"
});
formatter.result({
  "duration": 52427263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_price_is_displayed(int)"
});
formatter.result({
  "duration": 44099932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_has_a_free_UK_delivery_label(int)"
});
formatter.result({
  "duration": 68699057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_title_is_displayed(int)"
});
formatter.result({
  "duration": 42593529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_price_is_displayed(int)"
});
formatter.result({
  "duration": 55155261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 4
    }
  ],
  "location": "ProductListingSteps.the_nth_product_has_a_free_UK_delivery_label(int)"
});
formatter.result({
  "duration": 38715619,
  "status": "passed"
});
formatter.after({
  "duration": 591732945,
  "status": "passed"
});
formatter.before({
  "duration": 4061988606,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Mother\u0027s Day Filter - Free Delivery - PDP",
  "description": "",
  "id": "mother\u0027s-day-gifts---free-delivery;mother\u0027s-day-filter---free-delivery---pdp",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 72,
      "name": "@devComplete"
    }
  ]
});
formatter.step({
  "line": 74,
  "name": "I am on Mother\u0027s Day Gifts page",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "I refine by \"free delivery to mainland UK\"",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I tap on the 1st product",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "the product detail page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "the free UK delivery option is displayed",
  "keyword": "And "
});
formatter.match({
  "location": "ProductListingSteps.i_am_on_mothers_day_gifts_page()"
});
formatter.result({
  "duration": 2242488853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "free delivery to mainland UK",
      "offset": 13
    }
  ],
  "location": "ProductListingSteps.i_refine_by(String)"
});
formatter.result({
  "duration": 1749154513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    }
  ],
  "location": "ProductListingSteps.i_tap_on_the_nth_product(int)"
});
formatter.result({
  "duration": 1812507071,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailSteps.the_product_detail_page_is_displayed()"
});
formatter.result({
  "duration": 156063457,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailSteps.the_free_UK_delivery_option_is_displayed()"
});
formatter.result({
  "duration": 51772619,
  "status": "passed"
});
formatter.after({
  "duration": 597020410,
  "status": "passed"
});
formatter.uri("features/PDP_DeliveryOptions.feature");
formatter.feature({
  "line": 2,
  "name": "PDP - Delivery Options",
  "description": "As a Customer\nI want to see the delivery information of the product page \nSo that I know when to order the product to get it as soon as possible",
  "id": "pdp---delivery-options",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@devComplete"
    }
  ]
});
formatter.before({
  "duration": 6442963601,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "PDP - Free UK Delivery Option",
  "description": "",
  "id": "pdp---delivery-options;pdp---free-uk-delivery-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "\"product1\" has free UK delivery option",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the product detail page of \"product1\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the product detail page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "the free UK delivery option is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the free UK delivery date is displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "product1",
      "offset": 1
    },
    {
      "val": "free UK",
      "offset": 15
    }
  ],
  "location": "ProductDataSteps.has_mainland_UK_delivery_option(String,String)"
});
formatter.result({
  "duration": 2165291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product1",
      "offset": 42
    }
  ],
  "location": "ProductDetailSteps.i_navigate_to_the_product_detail_page_of(String)"
});
formatter.result({
  "duration": 3691233092,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailSteps.the_product_detail_page_is_displayed()"
});
formatter.result({
  "duration": 44483180,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailSteps.the_free_UK_delivery_option_is_displayed()"
});
formatter.result({
  "duration": 50556919,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailSteps.the_free_UK_delivery_date_is_displayed()"
});
formatter.result({
  "duration": 42542331,
  "status": "passed"
});
formatter.after({
  "duration": 591861214,
  "status": "passed"
});
formatter.before({
  "duration": 5008352165,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "PDP - Tracked Two Day Delivery Option",
  "description": "",
  "id": "pdp---delivery-options;pdp---tracked-two-day-delivery-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "\"product1\" has tracked two day delivery option",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I navigate to the product detail page of \"product1\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the product detail page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the tracked two day delivery option is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the tracked two day delivery date is displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "product1",
      "offset": 1
    },
    {
      "val": "tracked two day",
      "offset": 15
    }
  ],
  "location": "ProductDataSteps.has_mainland_UK_delivery_option(String,String)"
});
formatter.result({
  "duration": 177810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product1",
      "offset": 42
    }
  ],
  "location": "ProductDetailSteps.i_navigate_to_the_product_detail_page_of(String)"
});
formatter.result({
  "duration": 3203545574,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailSteps.the_product_detail_page_is_displayed()"
});
formatter.result({
  "duration": 60551714,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailSteps.the_tracked_two_day_delivery_option_is_displayed()"
});
formatter.result({
  "duration": 158134043,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailSteps.the_tracked_two_day_delivery_date_is_displayed()"
});
formatter.result({
  "duration": 76629444,
  "status": "passed"
});
formatter.after({
  "duration": 642613488,
  "status": "passed"
});
formatter.before({
  "duration": 4135614410,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "PDP - Saturday Delivery Option",
  "description": "",
  "id": "pdp---delivery-options;pdp---saturday-delivery-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "\"product1\" has saturday delivery option",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I navigate to the product detail page of \"product1\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the product detail page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the saturday delivery option is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the saturday delivery date is displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "product1",
      "offset": 1
    },
    {
      "val": "saturday",
      "offset": 15
    }
  ],
  "location": "ProductDataSteps.has_mainland_UK_delivery_option(String,String)"
});
formatter.result({
  "duration": 105353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product1",
      "offset": 42
    }
  ],
  "location": "ProductDetailSteps.i_navigate_to_the_product_detail_page_of(String)"
});
formatter.result({
  "duration": 3064908757,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailSteps.the_product_detail_page_is_displayed()"
});
formatter.result({
  "duration": 339919139,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailSteps.the_saturday_delivery_option_is_displayed()"
});
formatter.result({
  "duration": 136515931,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailSteps.the_saturday_delivery_date_is_displayed()"
});
formatter.result({
  "duration": 59477532,
  "status": "passed"
});
formatter.after({
  "duration": 647306799,
  "status": "passed"
});
formatter.before({
  "duration": 5199595669,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "PDP - International Delivery Option",
  "description": "",
  "id": "pdp---delivery-options;pdp---international-delivery-option",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "\"product1\" has international delivery option",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I navigate to the product detail page of \"product1\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the product detail page is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "the international delivery option is displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "product1",
      "offset": 1
    },
    {
      "val": "international",
      "offset": 15
    }
  ],
  "location": "ProductDataSteps.has_mainland_UK_delivery_option(String,String)"
});
formatter.result({
  "duration": 1785302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "product1",
      "offset": 42
    }
  ],
  "location": "ProductDetailSteps.i_navigate_to_the_product_detail_page_of(String)"
});
formatter.result({
  "duration": 2715926268,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailSteps.the_product_detail_page_is_displayed()"
});
formatter.result({
  "duration": 50232202,
  "status": "passed"
});
formatter.match({
  "location": "ProductDetailSteps.the_international_delivery_option_is_displayed()"
});
formatter.result({
  "duration": 155032434,
  "status": "passed"
});
formatter.after({
  "duration": 596409505,
  "status": "passed"
});
});