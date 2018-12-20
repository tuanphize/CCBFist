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
  "status": "passed"
});
formatter.step({
  "name": "Im staying on homepage",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.im_staying_on_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click button \"Thêm mới\"",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input \"TuanXoan11\"",
  "keyword": "When "
});
formatter.match({
  "location": "NewMBStep.i_input(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select \"Nam\"",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select \"ngày tháng năm sinh\"",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select \"Họ tên mẹ\"",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select \"Số điện thoại\"",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.select(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click button \"Lưu\"",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.i_click_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the notification message \"Thêm mới đối tượng thành công\"",
  "keyword": "Then "
});
formatter.match({
  "location": "NewMBStep.i_should_see_the_notification_message(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"body.stickyheader.leftpanel-collapsed:nth-child(5) div.bottom-right:nth-child(22) div.gritter-item-wrapper.growl-success div.gritter-item div.gritter-without-image:nth-child(2) \u003e p:nth-child(2)\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.35.528161 (5b82f2d2aae0ca24b877009200ced9065a772e73),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027VBS-TUANN349-P\u0027, ip: \u002710.61.185.111\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528161 (5b82f2d2aae0ca..., userDataDir: C:\\Users\\vm-setup\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: febb43427aa83ca1a9bf43bbd10ba549\n*** Element info: {Using\u003dcss selector, value\u003dbody.stickyheader.leftpanel-collapsed:nth-child(5) div.bottom-right:nth-child(22) div.gritter-item-wrapper.growl-success div.gritter-item div.gritter-without-image:nth-child(2) \u003e p:nth-child(2)}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\r\n\tat StepDefinitionS.NewMBStep.i_should_see_the_notification_message(NewMBStep.java:108)\r\n\tat ✽.I should see the notification message \"Thêm mới đối tượng thành công\"(src/test/resources/Viettel/newus.feature:15)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
});