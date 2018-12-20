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
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class NewMBTest {
 
 @FindBy(css="#username")
 public WebElement userName;
 @FindBy(css="#password")
 public WebElement passWord;
 @FindBy(css="#btnLogin")
 public WebElement dangNhap;
 @FindBy(css="#btnAdd")
 public WebElement btnAdd;
 @FindBy(css="#txtHoTen_ThemMoi")
 public WebElement txtHoten;
 //@FindBy(id="slGioiTinh_ThemMoi")
 //public Select cbbGioiTinh;
 @FindBy(css="#txtNgaySinh_ThemMoi")
 public WebElement txtNgaySinh;
 @FindBy(css="#txtTenMe_ThemMoi")
 public WebElement txtTenMe;
 @FindBy(css="#txtDienThoaiMe_ThemMoi")
 public WebElement txtSDTMe;
 @FindBy(css="#btnSave2")
 public WebElement btnSave;
 @FindBy(css="body.stickyheader.leftpanel-collapsed:nth-child(5) div.bottom-right:nth-child(22) div.gritter-item-wrapper.growl-success div.gritter-item div.gritter-without-image:nth-child(2) > p:nth-child(2)")	
 public WebElement msgPass;
 public NewMBTest(WebDriver driver) {
 
	PageFactory.initElements(driver,this);
			
}
 
}
