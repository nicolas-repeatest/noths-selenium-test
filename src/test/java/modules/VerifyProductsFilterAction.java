package modules;

import org.openqa.selenium.WebDriver;
import pageobjects.ProductListingPage;
import static org.testng.Assert.assertEquals;

public class VerifyProductsFilterAction {
	public static void Execute(WebDriver driver, String filterName, boolean selected) throws Exception{
		if (!ProductListingPage.filter(filterName).isDisplayed()) {
			ProductListingPage.sort_refine_button.click();
		}
		assertEquals(ProductListingPage.filter(filterName).isSelected(), selected);
	}
}
