import { $, browser } from '@wdio/globals';
import Page from './page.js';

/**
 * Sub page containing specific selectors and methods for a specific page
 */
class genieHealthCarePage extends Page {
    
    get caregiversDropdown() {
        return $('//*[text()="Caregivers"]');
    }

    get findContractText() {
        return $('//*[text()="Find a Contract"]');
    }

    async hoverOverCaregiversDropdown() {
        await browser.actions().moveTo(this.caregiversDropdown).perform();
    }

    async hoverOverFindContractText() {
        await browser.actions().moveTo(this.findContractText).perform();
    }

    async clickFindContractAndSwitchToNewTab() {
        await this.findContractText.click();
        await browser.pause(2000); // Adjust pause time as needed
        const allTabs = await browser.getWindowHandles();
        await browser.switchToWindow(allTabs[allTabs.length - 1]);
    }
    async getDetailsFromFirstRow() {
        const firstRowCells = await $$('tr:first-child td');
        const rowData = await Promise.all(firstRowCells.map(cell => cell.getText()));
        return rowData;
    }
    //  Job details screen
    async validateJobDetails() {
        const jobIdOnJobDetailsScreen = await $('h2').getText(); // Retrieved Job ID from Job details screen
        const stateText = await $('//dt[span[text()="state"]]/following-sibling::dd/span').getText(); // Retrieved State from Job details screen
        const cityText = await $('//dt[span[text()="city"]]/following-sibling::dd/span').getText(); // Retrieved City from Job details screen
        const shiftText = await $('//dt[span[text()="shift"]]/following-sibling::dd/span').getText(); // Retrieved Shift from Job details screen
        const specialtyText = await $('//dt[span[text()="speciality"]]/following-sibling::dd/span').getText(); // Retrieved Specialty from Job details screen

        // Validate details
        if (
            this.getDetailsFromFirstRow.rowData[0] === jobIdOnJobDetailsScreen &&
            this.getDetailsFromFirstRow.rowData[1] === stateText &&
            this.getDetailsFromFirstRow.rowData[2] === cityText &&
            this.getDetailsFromFirstRow.rowData[3] === shiftText &&
            this.getDetailsFromFirstRow.rowData[4] === specialtyText
        ) {
            console.log('Details on Job details screen match those from Jobs dashboard.');
        } else {
            console.error('Details on Job details screen do not match those from Jobs dashboard.');
        }
    }
}

export default new genieHealthCarePage();
