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
     	datamap = Hooks.datamap;
    }

    @Given("^\"(product.*)\" has (mainland UK|tracked two day|saturday|international) delivery option$")
    public void has_mainland_UK_delivery_option(String productKey, String deliveryOption) throws Throwable {
        // TODO: Retrieve a specific product depending on the data constraints instead of default product
        String productId = datamap.get(0).get("default_product");
        datamap.get(0).put(productKey, productId);
    }
}