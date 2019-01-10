#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: As a tool manager, I want ability add attachment file to News item, so that I can delivery it along with News

  @tag1
  Scenario: The file can be uploaded is document file such as pdf, doc*, xls* and has max length is 2MB
    Given Im staying on create news page
    When I click button add file
    And choose file pdf smaller than two mb
    Then I should see the sticker succesfully added
    

 