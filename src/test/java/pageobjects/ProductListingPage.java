package pageobjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.ArrayList;
import java.util.List;

public class ProductListingPage extends BaseClass{

	public ProductListingPage(WebDriver driver){
		super(driver);
	}

	// Mother's Day Page

	@FindBy(how=How.CLASS_NAME, using="best-mothers-day-gifts_category")
	public static WebElement mothers_day_gifts_category;

	// Pagination

	public static WebElement page_link(String pageName) {
		return driver.findElement(By.xpath("//*[@class='pagination_index']//a[text()='" + pageName + "']"));
	}

	// Filters

	@FindBy(how=How.CLASS_NAME, using="flyout_button")
	public static WebElement sort_refine_button;

	public static WebElement filter(String filterName ) {
		return driver.findElement(By.xpath("//*[@data-tracking-id='" + filterName + "']"));
	}

	// Product Cells

	@FindBy(how=How.CSS, using=".product_grid_cell_module.cell")
	private static List<WebElement> cells;

	public static List<ProductCell> product_cells() {
		List<ProductCell> productCells = new ArrayList<ProductCell>();
		for (WebElement cell : cells) {
			productCells.add(new ProductCell(cell));
		}
		return productCells;
	}

	public static class ProductCell {

		public WebElement cell;

		ProductCell(WebElement cell) {
			this.cell = cell;
		}

		public WebElement product_details() {
			return cell.findElement(By.cssSelector(".product_details .product_link"));
		}

		public WebElement price() {
			return cell.findElement(By.cssSelector(".price"));
		}

		public WebElement free_delivery() {
			return cell.findElement(By.cssSelector(".free_delivery"));
		}
	}
	}