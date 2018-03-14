Feature: Mother's Day Gifts - Free Delivery
	As a Customer 
	I want to be able to find some "MOTHER'S DAY GIFTS" which offers free delivery 
    So that I can purchase one of them

    @wip
	Scenario: Mother's Day Filter - Default Delivery Filter
        When I navigate to the Mother's Day Gifts page
        Then the Mother's Day Gifts page is displayed
        And the page is not refine by "free delivery to mainland UK"

    Scenario: Mother's Day Filter - Price Range - Reset
        Given I am on Mother's Day Gifts page
        And I refine by "free delivery to mainland UK"
        When I reset the delivery filter
        Then the page is not refine by "free delivery to mainland UK"

    Scenario: Mother's Day Filter - Free Delivery - PLP first row
    	Given I am on Mother's Day Gifts page
    	When I refine by "free delivery to mainland UK"
    	Then the 1st product title is displayed
    	And the 1st product price is displayed
    	And the 1st product has a free UK delivery label
    	And the 2nd product title is displayed
    	And the 2nd product price is displayed
    	And the 2nd product has a free UK delivery label

    Scenario: Mother's Day Filter - Free Delivery - PLP last product
    	Given I am on Mother's Day Gifts page
    	When I refine by "free delivery to mainland UK"
    	And I scroll to last row
    	Then the last product title is displayed
    	And the last product price is displayed
    	And the last product has a free UK delivery label

   	Scenario: Mother's Day Filter - Free Delivery - PLP second page
    	Given I am on Mother's Day Gifts page
    	When I refine by "free delivery to mainland UK"
    	And I select the 2nd page
    	Then the 1st product title is displayed
    	And the 1st product price is displayed
    	And the 1st product has a free UK delivery label
    	And the 2nd product title is displayed
    	And the 2nd product price is displayed
    	And the 2nd product has a free UK delivery label

   	Scenario: Mother's Day Filter - Free Delivery - PLP view all
    	Given I am on Mother's Day Gifts page
    	When I refine by "free delivery to mainland UK"
    	And I tap on view all page
    	Then the 1st product title is displayed
    	And the 1st product price is displayed
    	And the 1st product has a free UK delivery label
    	And the 2nd product title is displayed
    	And the 2nd product price is displayed
    	And the 2nd product has a free UK delivery label

    Scenario: Mother's Day Filter - Free Delivery - PLP multiple filters
    	Given I am on Mother's Day Gifts page
    	When I refine by "free delivery to mainland UK"
    	And I refine by "asia & australasia"
    	Then the 1st product title is displayed
    	And the 1st product price is displayed
    	And the 1st product has a free UK delivery label
    	And the 2nd product title is displayed
    	And the 2nd product price is displayed
    	And the 2nd product has a free UK delivery label

    Scenario: Mother's Day Filter - Free Delivery - PDP
    	Given I am on Mother's Day Gifts page
    	And I refine by "free delivery to mainland UK"
    	When I tap on the 1st product
    	Then the product detail page is displayed
    	And the free UK delivery option is displayed
