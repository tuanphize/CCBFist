package StepDefinitionS;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import TestObject.NewMBTest;
import StepDefinitionS.Hook;
import TestObject.NewMBTest;

public class NewMBStep {
	WebDriver driver = Hook.driver;
	NewMBTest newMB;
	

	@Before
	public void StartTest() {
		newMB = new NewMBTest(driver);

	}

	@After
	public void EndTest(Scenario scenario) {
		if (scenario.isFailed()) {
			byte[] screenshot = ((RemoteWebDriver) this.driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png");
		}
	}

	@Given("^Im logging in the web$")
	public void im_logging_in_the_web() throws Exception {
		// Write code here that turns the phrase above into concrete actions
		driver.get("http://10.60.108.43:8088/Account/Login");
		driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
		driver.manage().window().maximize();
		newMB.userName.sendKeys("hn_tt_tuhiep");
		newMB.passWord.sendKeys("123456a@Xa");
		newMB.dangNhap.click();
		
	}

	@Given("^Im staying on homepage$")
	public void im_staying_on_homepage() throws Exception {
		// Write code here that turns the phrase above into concrete actions
		
	}

	@Given("^Click button \"([^\"]*)\"$")
	public void click_button(String arg1) throws Exception {
		newMB.btnAdd.click();
		// Write code here that turns the phrase above into concrete actions
		
	}

	@When("^I input \"([^\"]*)\"$")
	public void i_input(String arg1) throws Exception {
		newMB.txtHoten.sendKeys("TUANXOAN123");
		// Write code here that turns the phrase above into concrete actions
		
	}

	@When("^select \"([^\"]*)\"$")
	public void select(String arg1) throws Exception {
		Thread.sleep(4000);
		 newMB.cbbGioiTinh.selectByValue("Nam");
		// Write code here that turns the phrase above into concrete actions
		 
	}

	@When("^i click button \"([^\"]*)\"$")
	public void i_click_button(String arg1) throws Exception {
		// Write code here that turns the phrase above into concrete actions
		
	}

	@Then("^I should see the notification message \"([^\"]*)\"$")
	public void i_should_see_the_notification_message(String arg1) throws Exception {
		// Write code here that turns the phrase above into concrete actions
		
	}

}
