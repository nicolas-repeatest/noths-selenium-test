package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ProductDetailPage extends BaseClass{

	public ProductDetailPage(WebDriver driver){
		super(driver);
	}

	@FindBy(how=How.ID, using="product")
	public static WebElement product;

	@FindBy(how=How.CLASS_NAME, using="delivery_message_free")
	public static WebElement free_uk_delivery;

	@FindBy(how=How.CSS, using=".delivery_message_free .estimated_delivery_date")
	public static WebElement free_uk_delivery_date;

	@FindBy(how=How.CLASS_NAME, using="delivery_message_express_24")
	public static WebElement express_delivery;

	@FindBy(how=How.CSS, using=".delivery_message_express_24 .estimated_delivery_date")
	public static WebElement express_delivery_date;
	
	@FindBy(how=How.CLASS_NAME, using="delivery_message_saturday")
	public static WebElement saturday_delivery;

	@FindBy(how=How.CSS, using=".delivery_message_saturday .estimated_delivery_date")
	public static WebElement saturday_delivery_date;
	
	@FindBy(how=How.XPATH, using="//*[contains(@class,\"delivery_message\")]/*[text()='International delivery available']")
	public static WebElement international_delivery;
		
	}