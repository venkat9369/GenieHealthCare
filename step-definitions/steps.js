import { Given, When, Then } from 'cucumber';
import genieHealthCarePage from '../pageobjects/genieHealthCare.page';

Given('I open the Genie Healthcare page', async () => {
    await genieHealthCarePage.open();
});

When('I hover over the Caregivers dropdown', async () => {
    await genieHealthCarePage.hoverOverCaregiversDropdown();
});

When('I hover over the {string} option', async (option) => {
    await genieHealthCarePage.hoverOverFindContractText();
});

When('I click on the {string} option and switch to a new tab', async (option) => {
    await genieHealthCarePage.clickFindContractAndSwitchToNewTab();
});

Then('I should validate the job details on the Job details screen', async () => {
    await genieHealthCarePage.validateJobDetails();
});