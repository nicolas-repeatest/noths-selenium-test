package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.Log;
import modules.NavigateToUrlAction;
import modules.SearchProductAction;
import modules.VerifyProductsFilterAction;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import pageobjects.HomePage;
import pageobjects.ProductDetailPage;
import pageobjects.ProductListingPage;

import java.util.HashMap;
import java.util.List;

import static org.testng.Assert.assertEquals;
import static org.testng.AssertJUnit.assertNotSame;


public class ProductListingSteps {
    public WebDriver driver;
    public List<HashMap<String,String>> datamap;


    public ProductListingSteps()
    {
    	driver = Hooks.driver;
     	datamap = Hooks.datamap;
    }

    @When("^I navigate to the Mother's Day Gifts page$")
    public void i_navigate_to_the_Mother_s_Day_Gifts_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        NavigateToUrlAction.Execute(driver, datamap, "mothers_day_gifts_path");
        PageFactory.initElements(driver, ProductListingPage.class);
    }

    @Then("^the Mother's Day Gifts page is displayed$")
    public void the_Mother_s_Day_Gifts_page_is_displayed() throws Throwable {
        assertEquals(ProductListingPage.mothers_day_gifts_category.isDisplayed(), true);
    }

    @Then("^the page is not refine by \"(.*?)\"$")
    public void the_page_is_not_refine_by(String filterName) throws Throwable {
        VerifyProductsFilterAction.Execute(driver, filterName, false);
    }
}