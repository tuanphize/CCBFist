package StepDefinitionS;

import org.junit.After;
import org.junit.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;

import TestObject.NewMBTest;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NewMBStep {
WebDriver driver=Hook.driver;
NewMBTest newmb;
//âa
@Before
public void StartTest() {
	driver= new ChromeDriver();
}
@After
public void AfterTest(Scenario scenario) {
	if(scenario.isFailed()) {
		byte[] screenshot=((RemoteWebDriver) this.driver).getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image.png");
		
	}
}
@Given("^Im staying on homepage$")
public void im_staying_on_homepage() throws Exception {
    // Write code here that turns the phrase above into concrete actions

    throw new PendingException();
}

@Given("^Click button \"([^\"]*)\"$")
public void click_button(String arg1) throws Exception {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@When("^I input \"([^\"]*)\"$")
public void i_input(String arg1) throws Exception {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@When("^select \"([^\"]*)\"$")
public void select(String arg1) throws Exception {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@When("^i click button \"([^\"]*)\"$")
public void i_click_button(String arg1) throws Exception {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@Then("^I should see the notification message \"([^\"]*)\"$")
public void i_should_see_the_notification_message(String arg1) throws Exception {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}


}
