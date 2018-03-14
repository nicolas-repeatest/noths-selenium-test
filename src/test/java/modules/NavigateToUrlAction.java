package modules;

import org.openqa.selenium.WebDriver;
import java.util.HashMap;
import java.util.List;

public class NavigateToUrlAction {

	public static void Execute(WebDriver driver, List<HashMap<String,String>> map, String pathKey) throws Exception{
		String url = map.get(0).get("environment") + map.get(0).get(pathKey);
		driver.navigate().to(url);
	}
}
