$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Viettel/newus.feature");
formatter.feature({
  "name": "I want to add new user to my system",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "show valid message when input valid information",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Im logging in the web",
  "keyword": "Given "
});
formatter.match({
  "location": "NewMBStep.im_logging_in_the_web()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitionS.NewMBStep.im_logging_in_the_web(NewMBStep.java:44)\r\n\tat ✽.Im logging in the web(src/test/resources/Viettel/newus.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Im staying on homepage",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.im_staying_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click button \"Thêm mới\"",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.click_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I input \"Họ tên đối tượng\"",
  "keyword": "When "
});
formatter.match({
  "location": "NewMBStep.i_input(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select \"chọn giới tính\"",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select \"ngày tháng năm sinh\"",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select \"Họ tên mẹ\"",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "select \"Số điện thoại\"",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.select(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "i click button \"Lưu\"",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.i_click_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the notification message \"Thêm mới đối tượng thành công\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewMBStep.i_should_see_the_notification_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitionS.NewMBStep.EndTest(NewMBStep.java:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\r\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
});