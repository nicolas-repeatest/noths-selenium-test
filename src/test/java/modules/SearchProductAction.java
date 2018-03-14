package modules;

import helpers.Log;
import org.openqa.selenium.WebDriver;
import org.testng.Reporter;
import pageobjects.HomePage;
import pageobjects.LoginPage;

import java.util.HashMap;
import java.util.List;

public class SearchProductAction {
	public static void Execute(WebDriver driver,List<HashMap<String,String>> map, String productKey) throws Exception{
		String productId = map.get(0).get(productKey);
		Log.info(String.format("Search product %s with id %s", productKey, productId));
		HomePage.search_field.click();
		HomePage.search_field.sendKeys(productId + "\n");
	}
}
