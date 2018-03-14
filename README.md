# NOTHS Selenium Test
This project contains the Selenium tests for The Not On The High Street code challenge.
Those tests have been created using an existing framework available on GitHub.
The tests are covering some major scenarios of Mother's day gifts page and Product detail page.

## 1. BDD Feature files
The feature files for the 3 user stories can be found in the folder /src/resources/features. I have reused the steps to make them easily automatible.

I have described scenarios only for desktop website and focussed on main scenarios to prove that the Free Delivery filter, the price range selection are working on the Mother's Day Gift page.

I have created scenarios for the delivery options on the Product Detail page only based on the actual product provided.

### Test Coverage
This exercise was in limited time. Extra scenarios could have been identified during a 3 Amigos meeting between Product Owner, Developers and Testers.
Scenarios for mobile website should have been added too.

Some of the scenarios described could have been covered in a general Product Listing Feature. Unit tests and API tests could have been created to insure the returned list of products take the filter in account and that the filters remains after changing page. Extra scenarios could be tested during exploratory testing during the feature test of the user story.

### Test Implementation
I have had the time to implement only scenarios on the Product Detail page and some scenarios concerning the Free Delivery Option.

Those tests are running only on Chrome on desktop in sequence. This framework could be extended to run several suite in parallel on different browser using Selenium Grid.

You can find the test execution report in /docs/cucumber-html-report.

## 2. Framework
You can find more information about this framework on seleniumframework.com.
https://github.com/machzqcq/CucumberJVMExamples/tree/master/cucumberjvm-selenium-page-object
### Installation
The framework requires:
- Maven
- Java SDK 1.8
- Chrome

This project gets compile using the pom.xml dependency and build configuration for Maven.

#### Test Execution
The tests are executed by running the class step_definitions.RunCukesTest.
It will execute all the scenarios tagged with @devComplete.

### Existing Features
This framework provides the basis for using Cucumber with Selenium:
- Integrate Cucumber JVM with Selenium
- Implement Page Object using Page Factory
- Configure Test Data in external Excel spreadsheet
- Use Chrome webdriver only

### My Improvements
While using this framework, I have made some tweaks:
- Configure the launch URL in the Test Data
- Share the datamap between step definitions and load it only in the hook
- Create Actions only for complex workflow
- Add SeleniumHelper class for reusable Selenium Utility functions
