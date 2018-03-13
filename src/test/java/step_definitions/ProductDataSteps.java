package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import helpers.DataHelper;
import org.openqa.selenium.WebDriver;

import java.util.HashMap;
import java.util.List;


public class ProductDataSteps {
    public WebDriver driver;
    public List<HashMap<String,String>> datamap;


    public ProductDataSteps()
    {
    	driver = Hooks.driver;
     	datamap = DataHelper.data();
    }

    @Given("^\"(product.*)\" has (mainland UK) delivery option$")
    public void has_mainland_UK_delivery_option(String productId, String deliveryOption) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}