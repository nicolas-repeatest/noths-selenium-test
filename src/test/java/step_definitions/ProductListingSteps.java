package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.SeleniumHelper;
import modules.FilterProductsAction;
import modules.NavigateToUrlAction;
import modules.VerifyProductsFilterAction;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import pageobjects.ProductListingPage;

import java.util.HashMap;
import java.util.List;

import static org.testng.Assert.assertEquals;

public class ProductListingSteps {
    public WebDriver driver;
    public List<HashMap<String,String>> datamap;


    public ProductListingSteps()
    {
    	driver = Hooks.driver;
     	datamap = Hooks.datamap;
    }

    // Mothers Day Gift Page

    @Given("^I am on Mother's Day Gifts page$")
    public void i_am_on_mothers_day_gifts_page() throws Throwable {
        i_navigate_to_the_mothers_day_gifts_page();
        the_mothers_day_gifts_page_is_displayed();
    }

    @When("^I navigate to the Mother's Day Gifts page$")
    public void i_navigate_to_the_mothers_day_gifts_page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        NavigateToUrlAction.Execute(driver, datamap, "mothers_day_gifts_path");
        PageFactory.initElements(driver, ProductListingPage.class);
    }

    @Then("^the Mother's Day Gifts page is displayed$")
    public void the_mothers_day_gifts_page_is_displayed() throws Throwable {
        assertEquals(ProductListingPage.mothers_day_gifts_category.isDisplayed(), true);
    }

    // Pager

    @When("^I select the (\\d+)\\w\\w page$")
    public void i_select_the_nth_page(String pageName) throws Throwable {
        ProductListingPage.page_link(pageName).click();
    }

    // Filters

    @When("^I refine by \"(.*)\"$")
    public void i_refine_by(String filterName) throws Throwable {
        FilterProductsAction.Execute(driver, filterName, true);
    }

    @Then("^the page is not refine by \"(.*)\"$")
    public void the_page_is_not_refine_by(String filterName) throws Throwable {
        VerifyProductsFilterAction.Execute(driver, filterName, false);
    }

    // Product Cells

    @Then("^the (\\d+)\\w\\w product title is displayed$")
    public void the_nth_product_title_is_displayed(int index) throws Throwable {
        WebElement productDetails = ProductListingPage.product_cells().get(index - 1 ).product_details();
        SeleniumHelper.assertIsTextDisplayed(productDetails, true);
    }

    @Then("^the (\\d+)\\w\\w product price is displayed$")
    public void the_nth_product_price_is_displayed(int index) throws Throwable {
        WebElement price = ProductListingPage.product_cells().get(index - 1 ).price();
        SeleniumHelper.assertIsTextDisplayed(price, true);
    }

    @Then("^the (\\d+)\\w\\w product has a free UK delivery label$")
    public void the_nth_product_has_a_free_UK_delivery_label(int index) throws Throwable {
        WebElement freeDelivery = ProductListingPage.product_cells().get(index - 1 ).free_delivery();
        assertEquals(freeDelivery.isDisplayed(), true);
    }

    @When("^I tap on the (\\d+)\\w\\w product$")
    public void i_tap_on_the_nth_product(int index) throws Throwable {
        ProductListingPage.product_cells().get(index - 1).product_details().click();
    }

}