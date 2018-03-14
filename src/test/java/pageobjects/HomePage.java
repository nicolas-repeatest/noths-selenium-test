package pageobjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePage extends BaseClass{

	public HomePage(WebDriver driver){
		super(driver);
	}    

	@FindBy(how=How.ID, using="term")
	public static WebElement search_field;

	@FindBy(how=How.ID, using="no_results_filter_category_id")
	public static WebElement search_category;
	
	@FindBy(how=How.NAME, using="search")
	public static WebElement search_button;
	
	@FindBy(how=How.ID, using="homepage")
	public static WebElement page;
		
	}