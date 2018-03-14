package helpers;

import com.google.common.base.Function;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;


import java.util.List;

import static java.util.concurrent.TimeUnit.SECONDS;
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

    public static WebElement findElementWithTimeOut(WebDriver driver, By by) {// Waiting 30 seconds for an element to be present on the page, checking
        // for its presence once every 5 seconds.
        Wait<WebDriver> wait = new FluentWait<WebDriver>(driver)
                .withTimeout(30, SECONDS)
                .pollingEvery(5, SECONDS)
                .ignoring(NoSuchElementException.class);

        WebElement element = wait.until(new Function<WebDriver, WebElement>() {
            public WebElement apply(WebDriver driver) {
                return driver.findElement(By.id("foo"));
            }
        });

        return element;
    }

    public static List<WebElement> findElementsWithTimeOut(WebDriver driver, By by) {// Waiting 30 seconds for an element to be present on the page, checking
        // for its presence once every 5 seconds.
        Wait<WebDriver> wait = new FluentWait<WebDriver>(driver)
                .withTimeout(30, SECONDS)
                .pollingEvery(5, SECONDS)
                .ignoring(NoSuchElementException.class);

        List<WebElement> elements = wait.until(new Function<WebDriver, List<WebElement>>() {
            public List<WebElement> apply(WebDriver driver) {
                return driver.findElements(By.id("foo"));
            }
        });

        return elements;
    }
}
