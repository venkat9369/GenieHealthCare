# Pre-Requisites:
1.Visual Studio Code (VSCode) from "https://code.visualstudio.com/download"
2.install nodejs with latest version
3.open project in vscode.
4.install dependencies with 'npm install'
5. Run 'npx wdio run ./wdio.conf.js' to complile and run test



Scenario: Verify Apply job layover is displayed on clicking Apply now button on searched job id
        Given Naviage to "https://www.geniehealthcare.com/#/home" screen
        When Click on Caregivers tab in the menu
        Then Genie Healthcare Jobs dashboard is opened in new tab
        When Note the first job details like JobId, State, City, Shift and Specialty
        When Click on first job Id
        Then Job Details screen for first job id is displayed
        Then verify JobId, State, City, Shift and Specialty ub Job details screen matches Jobs dashboard for given job id



These are the steps to perform testing on the Genee HealthCare website:

### Step 1: Open the Genie Healthcare page

- Given I open the Genie Healthcare page
  - This step navigates to the Genie Healthcare page.

### Step 2: Hover over the Caregivers dropdown

- When I hover over the Caregivers dropdown
  - This step performs a hover action on the Caregivers dropdown.

### Step 3: Hover over the {option} option

- When I hover over the {option} option
  - This step performs a hover action on the specified option.

### Step 4: Click on the {option} option and switch to a new tab

- When I click on the {option} option and switch to a new tab
  - This step clicks on the specified option and switches to a new tab.

### Step 5: Validate the job details on the Job details screen

- Then I should validate the job details on the Job details screen
  - This step validates the job details on the Job details screen.


pageobjects/page.js
- This file is used to open genie healthcare web page "https://www.geniehealthcare.com/#"

pageobjects/page.js
- This file has functions of geniehealthCare page.

test/specs/geneHealthCare.spec.js 
- This spec file has testcases regarding open page,click on find contract in  Caregivers dropdown ,get job details from first row and validate its details.


