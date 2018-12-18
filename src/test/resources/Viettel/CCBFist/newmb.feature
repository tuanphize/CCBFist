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
Feature: I want to add new user to my system

  @tag1
  Scenario: show valid message when input valid information
    Given Im staying on homepage
    And Click button "Thêm mới"
    When I input "Họ tên đối tượng"
    And select "chọn giới tính"
    And select "ngày tháng năm sinh"
    And select "Họ tên mẹ"
    And select "Số điện thoại"
    And i click button "Lưu"
    Then I should see the notification message "Thêm mới đối tượng thành công"
