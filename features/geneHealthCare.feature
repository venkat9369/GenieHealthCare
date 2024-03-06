Feature: Job Details Validation on Genie Healthcare Page

Scenario: Validate job details on Job details screen
    Given I open the Genie Healthcare page
    When I hover over the Caregivers dropdown
    And I hover over the "Find a Contract" option
    And I click on the "Find a Contract" option and switch to a new tab
    Then I should validate the job details on the Job details screen