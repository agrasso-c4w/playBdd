Feature: Navigation on all tab

  Background:
    Given The user open the snai login page "https://nspreprod.snai.it/"

  Scenario Outline: Navigate to "<sportName>"
    When click on "<sportName>" and verify it is populated
    # Then "<sportName>" is popolated

    Examples:
    |                                               sportName                                        |
    | CALCIO,IPPICA,MARCATORI,TENNIS,BASKET,VOLLEY,AUTOMOBILISMO,FOOTBALL AMERICANO,VIRTUAL,CICLISMO |