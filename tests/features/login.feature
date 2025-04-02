Feature: Login


  Scenario: Login with valid credentials
  # Given The user open the snai login page "https://nstest.snai.it/"
    Given The user open the snai login page "https://nspreprod.snai.it/"
    When click on Accedi
    And Insert username "changeme" and password "changeme"
    Then The user is logged in successfully

  @skip
  Scenario: Login with invalid credentials
    Given The user open the snai login page "https://nstest.snai.it/"
    When click on Accedi
    And Insert username "changeme" and password "WrongPassword."
    Then The user is NOT logged in