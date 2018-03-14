package modules;

import org.openqa.selenium.WebDriver;
import pageobjects.ProductListingPage;

public class FilterProductsAction {
	public static void Execute(WebDriver driver, String filterName, boolean selected) throws Exception{
		if (!ProductListingPage.filter(filterName).isDisplayed()) {
			ProductListingPage.sort_refine_button.click();
		}
		if (ProductListingPage.filter(filterName).isSelected() != selected) {
			ProductListingPage.filter(filterName).click();
		}
	}
}
