package TestObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import static org.junit.Assert.assertEquals;

import org.junit.Assert;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

public class NewMBTest {
 
 @FindBy(css="#username")
 WebElement userName;
 @FindBy(css="#password")
 WebElement passWord;
 @FindBy(css="#btnLogin")
 WebElement dangNhap;
 @FindBy(css="#btnAdd")
 WebElement btnAdd;
 @FindBy(xpath="/html[1]/body[1]/section[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/input[1]")
 WebElement txtHoten;
 @FindBy(xpath="/html[1]/body[1]/section[1]/div[2]/div[3]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]/input[1]")
 WebElement cbbGioiTinh;
  
 public NewMBTest(WebDriver driver) {
	
	PageFactory.initElements(driver,this);
			
}
 
}
