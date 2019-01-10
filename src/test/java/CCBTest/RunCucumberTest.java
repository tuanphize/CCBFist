package CCBTest;



import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"src\\test\\resources\\US-BE0501\\file.feature"
				  },
		//set output to html file
		plugin = {"pretty", "html:target/HtmlReports" },
		//indicate the package contain step definition
		glue = "StepDefinitionS", 
		//config to readable console
		monochrome=true)

public class RunCucumberTest {
}