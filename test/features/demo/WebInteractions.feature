@web-interactions
Feature: Web Interactions

    Demonstate the web interactions of various web elements

    Scenario Outline: Input Box interaction
        Given An input box web page is opened
        When The user selects the input box
        Then Interact with the input box

    Example:
            | TestId    |
            | Web_TC002 |

    Scenario Outline: Check Box interaction
        Given A checkbox web page is opened
        When The user clicks on first checkbox
        Then The first checkbox should be checked

    Example:
            | TestId    |
            | Web_TC003 |

    Scenario: Window handling
        Given Windows example page is opened
        When The user clicks on "Elemental Selenium" link
        Then There should be two new browser windows opened