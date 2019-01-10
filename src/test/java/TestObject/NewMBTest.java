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
// @FindBy(css="#slGioiTinh_ThemMoi")
 //public Select cbbGioiTinh;
 @FindBy(css="#txtNgaySinh_ThemMoi")
 public WebElement txtNgaySinh;
 @FindBy(css="#txtTenMe_ThemMoi")
 public WebElement txtTenMe;
 @FindBy(css="#txtDienThoaiMe_ThemMoi")
 public WebElement txtSDTMe;
 @FindBy(css="#btnSave2")
 public WebElement btnSave;
 @FindBy(css="div.gritter-without-image>span")	
 public WebElement msgPass;
 //new
 
 @FindBy(css="div.footer:nth-child(6) div.container div:nth-child(1) div.subscription.col-sm-6 div.mod-input div.col-sm-9:nth-child(1) > input:nth-child(1)")
	public WebElement txtEmail;
	@FindBy(css="div.footer:nth-child(6) div.container div:nth-child(1) div.subscription.col-sm-6 div.mod-input div.col-sm-3:nth-child(2) > button.next-btn-primary")
	public WebElement txtbtnO;
	@FindBy(css="#fullname")
	public WebElement txtName;
	@FindBy(css="#allow-button")
	public WebElement txtbtnI;
	@FindBy(css="body:nth-child(2) div.login-form div.row:nth-child(3) > input:nth-child(1)")
	public WebElement txtUsername;
	@FindBy(css="body:nth-child(2) div.login-form div.row:nth-child(4) > input:nth-child(1)")
	public WebElement txtPassword;
	@FindBy(css="body:nth-child(2) div.login-form div.row-command:nth-child(6) > button.btn-primary.btn-login:nth-child(2)")
	public WebElement btnAdminLG;
	@FindBy(css="div.page-wapper:nth-child(1) aside.main-sidebar ul.sidebar-menu.tree:nth-child(4) li.treeview:nth-child(2) a:nth-child(1) > span:nth-child(2)")
	public WebElement btnDkyNT;
	@FindBy(css="div.page-wapper:nth-child(1) div.content-wrapper div.content table.table.table-hover.table-bordered tbody:nth-child(2) tr:nth-child(3) td.cl-status:nth-child(6) > i.fa.fa-remove")
	public WebElement sttSuccess;
	@FindBy(css="div.page-wapper:nth-child(1) aside.main-sidebar ul.sidebar-menu.tree:nth-child(4) li:nth-child(4) a:nth-child(1) > span:nth-child(2)")
	public WebElement btnCreateNews;
	@FindBy(css="div.page-wapper:nth-child(1) div.content-wrapper div.content:nth-child(3) div.create-news div:nth-child(16) div:nth-child(2) span.btn.btn-sm.btn-default.btn-upload > input.attachment-select")
	public WebElement btnAddFile;
	@FindBy(css="div.page-wapper:nth-child(1) div.content-wrapper div.content:nth-child(3) div.create-news div.list-files:nth-child(1) table:nth-child(1) tbody:nth-child(1) tr:nth-child(1) > td.file-name")
	public WebElement txtUploadFile;
 public NewMBTest(WebDriver driver) {
 
	PageFactory.initElements(driver,this);
			
}
 
}
