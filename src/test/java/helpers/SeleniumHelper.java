package helpers;

import org.openqa.selenium.WebElement;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertNotSame;

public class SeleniumHelper {

    public static void assertIsTextDisplayed(WebElement element, boolean displayed) {
        if (displayed) {
            assertNotSame(element.getText(), "");
        }
        else {
            assertEquals(element.getText(), "");
        }
    }
}
