$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/USBE05/MandatoryField.feature");
formatter.feature({
  "name": "Group, Name, Subject and Body are mandatory information",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Show page two when i submit mandatory information",
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
  "name": "Im in the creates new pages",
  "keyword": "Given "
});
formatter.match({
  "location": "NewMBStep.im_in_the_creates_new_pages()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select group",
  "keyword": "When "
});
formatter.match({
  "location": "NewMBStep.i_select_group()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "choose name",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.choose_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "choose subject",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.choose_subject()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I choose body",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.i_choose_body()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i can move to sendnew pages",
  "keyword": "Then "
});
formatter.match({
  "location": "NewMBStep.i_can_move_to_sendnew_pages()"
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