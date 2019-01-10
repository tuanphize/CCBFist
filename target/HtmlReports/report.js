$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/US-BE0501/file.feature");
formatter.feature({
  "name": "As a tool manager, I want ability add attachment file to News item, so that I can delivery it along with News",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "The file can be uploaded is document file such as pdf, doc*, xls* and has max length is 2MB",
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
  "name": "Im staying on create news page",
  "keyword": "Given "
});
formatter.match({
  "location": "NewMBStep.im_staying_on_create_news_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click button add file",
  "keyword": "When "
});
formatter.match({
  "location": "NewMBStep.i_click_button_add_file()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "choose file pdf smaller than two mb",
  "keyword": "And "
});
formatter.match({
  "location": "NewMBStep.choose_file_pdf_smaller_than_two_mb()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the sticker succesfully added",
  "keyword": "Then "
});
formatter.match({
  "location": "NewMBStep.i_should_see_the_sticker_succesfully_added()"
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