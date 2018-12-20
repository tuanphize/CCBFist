 
Feature: I want to add new user to my system


Scenario: show valid message when input valid information
    Given Im logging in the web
    And  Im staying on homepage
    And Click button "Thêm mới"
    When I input "TuanXoan11"
    And select "Nam"
    And select "ngày tháng năm sinh"
    And select "Họ tên mẹ"
    And select "Số điện thoại"
    And i click button "Lưu"
    Then I should see the notification message "Thêm mới đối tượng thành công"
