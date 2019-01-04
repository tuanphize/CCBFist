$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Viettel/Status.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Show green icon when activated succesfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "subcribe succesfully before",
  "keyword": "Given "
});
formatter.match({
  "location": "NewMBStep.subcribe_succesfully_before()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Im login at testmaster admin",
  "keyword": "When "
});
formatter.match({
  "location": "NewMBStep.im_login_at_testmaster_admin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "staying at succription page",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.staying_at_succription_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the green status",
  "keyword": "Then "
});
formatter.match({
  "location": "NewMBStep.i_should_see_the_green_status()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});