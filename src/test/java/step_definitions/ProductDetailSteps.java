package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.DataHelper;
import helpers.Log;
import modules.SearchProductAction;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import static org.testng.Assert.assertEquals;
import static org.testng.AssertJUnit.assertNotSame;
import pageobjects.HomePage;
import pageobjects.ProductDetailPage;

import java.util.HashMap;
import java.util.List;


public class ProductDetailSteps {
    public WebDriver driver;
    public List<HashMap<String,String>> datamap;


    public ProductDetailSteps()
    {
    	driver = Hooks.driver;
     	datamap = Hooks.datamap;
    }

    @When("^I navigate to the product detail page of \"(product.*)\"$")
    public void i_navigate_to_the_product_detail_page_of(String productKey) throws Throwable {
        PageFactory.initElements(driver, HomePage.class);
        SearchProductAction.Execute(driver, datamap, productKey);
    }

    @Then("^the product detail page is displayed$")
    public void the_product_detail_page_is_displayed() throws Throwable {
        PageFactory.initElements(driver, ProductDetailPage.class);
        assertEquals(ProductDetailPage.product.isDisplayed(), true);
    }

    @Then("^the free UK delivery option is displayed$")
    public void the_free_UK_delivery_option_is_displayed() throws Throwable {
        String value = ProductDetailPage.free_uk_delivery.getText();
        assertNotSame(value,"");
        Log.info("the free UK delivery option is displayed: " + value);
    }

    @Then("^the free UK delivery date is displayed$")
    public void the_free_UK_delivery_date_is_displayed() throws Throwable {
        String value = ProductDetailPage.free_uk_delivery_date.getText();
        assertNotSame(value,"");
        Log.info("the free UK delivery date is displayed: " + value);
    }

    @Then("^the tracked two day delivery option is displayed$")
    public void the_tracked_two_day_delivery_option_is_displayed() throws Throwable {
        String value = ProductDetailPage.express_delivery.getText();
        assertNotSame(value,"");
        Log.info("the express delivery option is displayed: " + value);
    }

    @Then("^the tracked two day delivery date is displayed$")
    public void the_tracked_two_day_delivery_date_is_displayed() throws Throwable {
        String value = ProductDetailPage.express_delivery_date.getText();
        assertNotSame(value,"");
        Log.info("the tracked two day delivery date is displayed: " + value);
    }

    @Then("^the saturday delivery option is displayed$")
    public void the_saturday_delivery_option_is_displayed() throws Throwable {
        String value = ProductDetailPage.saturday_delivery.getText();
        assertNotSame(value,"");
        Log.info("the saturday delivery option is displayed: " + value);
    }

    @Then("^the saturday delivery date is displayed$")
    public void the_saturday_delivery_date_is_displayed() throws Throwable {
        String value = ProductDetailPage.saturday_delivery_date.getText();
        assertNotSame(value,"");
        Log.info("the saturday delivery date is displayed: " + value);
    }

    @Then("^the international delivery option is displayed$")
    public void the_international_delivery_option_is_displayed() throws Throwable {
        String value = ProductDetailPage.international_delivery.getText();
        assertNotSame(value,"");
        Log.info("the international delivery option is displayed: " + value);
    }
}