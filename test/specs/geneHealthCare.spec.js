import genieHealthCarePage from '../../pageobjects/genieHealthCare.page';

describe('Genie Healthcare Page job details', () => {
    it('should validate job details on Job details screen', async () => {
        await genieHealthCarePage.open();
        await genieHealthCarePage.hoverOverCaregiversDropdown();
        await genieHealthCarePage.hoverOverFindContractText();
        await genieHealthCarePage.clickFindContractAndSwitchToNewTab();
        await genieHealthCarePage.validateJobDetails();
    });
});
