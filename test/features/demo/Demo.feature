Feature: Demo Feature

    Description of feature

    @demo
    Scenario Outline: Search and open wdio package
        Given npmjs is opened
        When Search with <SearchItem>
        Then Click on the first search result
        Then The URL should match <ExpectedURL>

        Examples:
            | TestID     | SearchItem | ExpectedURL                                  |
            | Demo_TC001 | wdio       | https://www.npmjs.com/package/@wdio/reporter |
