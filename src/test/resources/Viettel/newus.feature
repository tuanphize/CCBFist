 
Feature: I want to add new user to my system

@tag1
Scenario Outline: show valid message when input valid information
    Given Im logging in the web
    And  Im staying on homepage
     And Click button thêm mới
    When I input "<họ tên>"
    And select giới tính
    And select năm sinh "<ngày tháng năm sinh>"
    And select họ tên "<Họ tên mẹ>"
    And select SDT"<Số điện thoại>"
    And i click button Lưu
    Then I should see the notification message thành côn "Thêm mới đối tượng thành công"

    Examples: 
      |họ tên|ngày tháng năm sinh|Họ tên mẹ|Số điện thoại|
      |fg123aaa|01012018|aaaaa|123456789|
      |asdadsd|03032018|adsadas|123213213|
     