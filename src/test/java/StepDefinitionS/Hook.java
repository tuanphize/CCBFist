package StepDefinitionS;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

import cucumber.api.Scenario;

public class Hook {
public static WebDriver driver;

@Before
public void StartTest() {
	driver = new ChromeDriver();
}

@After
public void EndTest(Scenario scenario) {
	if(scenario.isFailed()) {
		byte[] screenshot=((RemoteWebDriver) this.driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "imgage.png");
	}
	
}
}
