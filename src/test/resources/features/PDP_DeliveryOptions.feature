@devComplete
Feature: PDP - Delivery Options
	As a Customer
	I want to see the delivery information of the product page 
	So that I know when to order the product to get it as soon as possible 

    Scenario: PDP - Free UK Delivery Option
    	Given "product1" has free UK delivery option
    	When I navigate to the product detail page of "product1"
    	Then the product detail page is displayed
		And the free UK delivery option is displayed
		And the free UK delivery date is displayed

   	Scenario: PDP - Tracked Two Day Delivery Option
    	Given "product1" has tracked two day delivery option
    	When I navigate to the product detail page of "product1"
    	Then the product detail page is displayed
    	And the tracked two day delivery option is displayed
    	And the tracked two day delivery date is displayed

    Scenario: PDP - Saturday Delivery Option
    	Given "product1" has saturday delivery option
    	When I navigate to the product detail page of "product1"
    	Then the product detail page is displayed
    	And the saturday delivery option is displayed
    	And the saturday delivery date is displayed

    Scenario: PDP - International Delivery Option
    	Given "product1" has international delivery option
    	When I navigate to the product detail page of "product1"
    	Then the product detail page is displayed
    	And the international delivery option is displayed
