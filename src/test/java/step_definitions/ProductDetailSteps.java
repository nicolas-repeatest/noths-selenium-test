package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helpers.DataHelper;
import org.openqa.selenium.WebDriver;

import java.util.HashMap;
import java.util.List;


public class ProductDetailSteps {
    public WebDriver driver;
    public List<HashMap<String,String>> datamap;


    public ProductDetailSteps()
    {
    	driver = Hooks.driver;
     	datamap = DataHelper.data();
    }

    @When("^I navigate to the product detail page of \"(.*?)\"$")
    public void i_navigate_to_the_product_detail_page_of(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^the product detail page is displayed$")
    public void the_product_detail_page_is_displayed() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^the mainland UK delivery option is displayed$")
    public void the_mainland_UK_delivery_option_is_displayed() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^the mainland UK delivery date is displayed$")
    public void the_mainland_UK_delivery_date_is_displayed() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}