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
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitionS.NewMBStep.select(NewMBStep.java:81)\r\n\tat ✽.select \"Nam\"(src/test/resources/Viettel/newus.feature:10)\r\n",
  "status": "failed"
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
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
});