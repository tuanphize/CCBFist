package StepDefinitionS;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import cucumber.api.PendingException;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import java.awt.Robot;
import java.awt.Window;
import java.awt.event.KeyEvent;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
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
		driver.get("http://10.60.108.43:8088/Account/Login");
		driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
		driver.manage().window().maximize();
		newMB.userName.sendKeys("hn_tt_tuhiep");
		newMB.passWord.sendKeys("123456a@Xa");
		newMB.dangNhap.click();
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Given("^Im staying on homepage$")
	public void im_staying_on_homepage() throws Exception {
		newMB.btnAdd.click();
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Given("^Click button thêm mới$")
	public void click_button_thêm_mới() throws Exception {
	Thread.sleep(2000);
		
	    // Write code here that turns the phrase above into concrete actions
	}
		@When("^I input \"([^\"]*)\"$")
		public void i_input(String arg1) throws Exception {
			newMB.txtHoten.sendKeys(arg1);
		    // Write code here that turns the phrase above into concrete actions
		    
		}

		@When("^select giới tính$")
		public void select_giới_tính() throws Exception {
			Select cbbGioiTinh= new Select(driver.findElement(By.id("slGioiTinh_ThemMoi")));
			cbbGioiTinh.selectByValue("1");
		    // Write code here that turns the phrase above into concrete actions
		   
		}

		@When("^select năm sinh \"([^\"]*)\"$")
		public void select_năm_sinh(String arg1) throws Exception {
			JavascriptExecutor js=(JavascriptExecutor) this.driver;
			newMB.txtNgaySinh.clear();
			newMB.txtNgaySinh.sendKeys(arg1);
			newMB.txtNgaySinh.sendKeys(Keys.RETURN);
			js.executeScript("window.scrollTo(0,3000)");
		    // Write code here that turns the phrase above into concrete actions
		    
		}

		@When("^select họ tên \"([^\"]*)\"$")
		public void select_họ_tên(String arg1) throws Exception {
			newMB.txtTenMe.sendKeys(arg1);
		    // Write code here that turns the phrase above into concrete actions
		    
		}

		@When("^select SDT\"([^\"]*)\"$")
		public void select_SDT(String arg1) throws Exception {
		    // Write code here that turns the phrase above into concrete actions
			newMB.txtSDTMe.sendKeys(arg1);
		   
		}

		@When("^i click button Lưu$")
		public void i_click_button_Lưu() throws Exception {
			newMB.btnSave.click();
		    // Write code here that turns the phrase above into concrete actions
		   
		}

		@Then("^I should see the notification message thành côn \"([^\"]*)\"$")
		public void i_should_see_the_notification_message_thành_côn(String arg1) throws Exception {
			assertEquals(newMB.msgPass.getText(),"Thông báo");
		    // Write code here that turns the phrase above into concrete actions
		   
		}
//new
		@Given("^subcribe succesfully before$")
		public void subcribe_succesfully_before() throws Exception {
		    // Write code here that turns the phrase above into concrete actions
			   driver.get("http://testmaster.vn/");
			   driver.manage().window().maximize();
			   driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
			   JavascriptExecutor js= (JavascriptExecutor) driver;
			   js.executeScript("window.scrollTo(0,3000)");
			   newMB.txtEmail.sendKeys("nguyentuan022s21@gmail.com");
			   newMB.txtbtnO.click();
			   newMB.txtName.sendKeys("NguyenTuan");
			   newMB.txtbtnI.click();
			   
		}

		@When("^Im login at testmaster admin$")
		public void im_login_at_testmaster_admin() throws Exception {
			  driver.get("http://testmaster.vn/Account/Login?ReturnUrl=%2fadmin");
			  newMB.txtUsername.sendKeys("khanh.tx@live.com");
			  newMB.txtPassword.sendKeys("abc123");
			  
			
		    // Write code here that turns the phrase above into concrete actions
		   
		}

		@When("^staying at succription page$")
		public void staying_at_succription_page() throws Exception {
		    // Write code here that turns the phrase above into concrete actions
		    newMB.btnAdminLG.click();
		    newMB.btnDkyNT.click();
		}

		@Then("^I should see the green status$")
		public void i_should_see_the_green_status() throws Exception {
		    // Write code here that turns the phrase above into concrete actions
			String color=newMB.sttSuccess.getCssValue("color");
		    assertEquals(color,"rgba(255, 0, 0, 1)");
		    System.out.println(color);
		}

		//file.feature
		@Given("^Im staying on create news page$")
		public void im_staying_on_create_news_page() throws Exception {
		    // Write code here that turns the phrase above into concrete actions
		 driver.get("http://testmaster.vn/Account/Login?ReturnUrl=%2fadmin");
		 driver.manage().window().maximize();
		 driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
		 newMB.txtUsername.sendKeys("khanh.tx@live.com");
		 newMB.txtPassword.sendKeys("abc123");
		 newMB.btnAdminLG.click();
		 newMB.btnCreateNews.click();
		}

		@When("^I click button add file$")
		public void i_click_button_add_file() throws Exception {
		    // Write code here that turns the phrase above into concrete actions
		   JavascriptExecutor js =(JavascriptExecutor) this.driver;
		   js.executeScript("window.scrollTo(0,3000)");
		   
		}
		
		@When("^choose file pdf smaller than two mb$")
		public void choose_file_pdf_smaller_than_two_mb() throws Exception {
		    // Write code here that turns the phrase above into concrete actions
			  Robot robot=new Robot();
			  newMB.btnAddFile.click();
			 newMB.btnAddFile.sendKeys("C:\\test.docx");
			 Thread.sleep(1000);
			 robot.keyPress(KeyEvent.VK_ESCAPE);
		     
			
			 //driver.switchTo().window(windowHandleBefore);
		}


		@Then("^I should see the sticker succesfully added$")
		public void i_should_see_the_sticker_succesfully_added() throws Exception {
		    // Write code here that turns the phrase above into concrete actions
			 assertTrue(newMB.txtUploadFile.getText().contains("tes"));
				
		}
}
