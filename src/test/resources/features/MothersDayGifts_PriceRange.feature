Feature: Mother's Day Gifts - Price Range
	As a Customer
    I want to view "MOTHER'S DAY GIFTS" products between the prices £0 and £50 
    So that I can purchase one of them

    Scenario: Mother's Day Filter - Default Price Range
    	When I navigate to the Mother's Day Gifts page
    	Then the Mother's Day Gifts page is displayed
        And the minimum price filter is £0
        And the maximum price filter is £250+

    Scenario: Mother's Day Filter - Price Range - Reset
        Given I am on Mother's Day Gifts page
        And I set the minimum price filter to £0
        And I set the maximum price filter to £50
        When I reset the price filter
        Then the minimum price filter is £0
        And the maximum price filter is £250+

    Scenario: Mother's Day Filter - Set Minimum Price
    	Given I am on Mother's Day Gifts page
    	When I set the minimum price filter to £50
        Then the 1st product title is displayed
        And the 1st product price is greater or equal to £50

    Scenario: Mother's Day Filter - Set Maximum Price
        Given I am on Mother's Day Gifts page
        When I set the maximum price filter to £50
        Then the 1st product title is displayed
        And the 1st product price is lower or equal to £50


    Scenario: Mother's Day Filter - Price Range - PLP first row
        Given I am on Mother's Day Gifts page
        When I set the minimum price filter to £0
        And I set the maximum price filter to £50
        Then the 1st product title is displayed
        And the 1st product price is between £0 and £50
        And the 2nd product title is displayed
        And the 2nd product price is between £0 and £50

   	Scenario: Mother's Day Filter - Price Range - PLP second page
    	Given I am on Mother's Day Gifts page
    	When I set the minimum price filter to £0
        And I set the maximum price filter to £50
        And I select the 2nd page
        Then the 1st product title is displayed
        And the 1st product price is between £0 and £50
        And the 2nd product title is displayed
        And the 2nd product price is between £0 and £50

   	Scenario: Mother's Day Filter - Price Range - PLP view all
    	Given I am on Mother's Day Gifts page
    	When I set the minimum price filter to £0
        And I set the maximum price filter to £50
    	And I tap on view all page
    	Then the 1st product title is displayed
    	And the 1st product price is between £0 and £50
    	And the 2nd product title is displayed
    	And the 2nd product price is between £0 and £50

    Scenario: Mother's Day Filter - Price Range - PLP multiple filters
    	Given I am on Mother's Day Gifts page
    	When I set the minimum price filter to £0
        And I set the maximum price filter to £50
        And I refine by "free delivery to mainland UK"
    	Then the 1st product title is displayed
    	And the 1st product price is between £0 and £50
    	And the 1st product has a free UK delivery label
    	And the 2nd product title is displayed
    	And the 2nd product price is between £0 and £50
    	And the 2nd product has a free UK delivery label
