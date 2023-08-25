const { expect } = require('@wdio/globals');
const schedulePage = require('../pageobjects/schedulePage');
const globaldata = require('../globalData/data');
const location = 'Vancouver, WA';
const service = 'Primary Care';
const day = 'Today';

describe('zoomCare', () => {

    it('Verify the user can refresh page by clicking "Refresh" btn.', async () => {
        await browser.newWindow(globaldata.globalVariables.URL)
        await browser.pause(7000)
        await schedulePage.locationSelector.click()
        await schedulePage.locationWA.click()
        await schedulePage.serviceSelector.click()
        await schedulePage.primaryCareOption.click()
        await browser.pause(2000)
        await schedulePage.dateSelector.click()
        await schedulePage.searchBtn.click()
        await schedulePage.refreshBtn.click()
        await expect(schedulePage.loadText).toBeExisting()
        const getLocation = await (schedulePage.locationSelector).getText()
        await expect(getLocation == location).toEqual(true)
        const getService = await (schedulePage.serviceSelector).getText()
        await expect(getService == service).toEqual(true)
        const getServiceDay = await (schedulePage.dateSelector).getText()
        await browser.pause(5000)
        console.log(getServiceDay+'getServiceDay')
        await expect(getServiceDay == day).toEqual(true)
    });

    it('Verify that the user is able to schedule appt with a doctor', async () => {
        await expect(schedulePage.primaryCareTitle).toHaveText(service)
        await schedulePage.timeBtn.click()
        await browser.pause(1000)
        const redirectURL = await browser.getUrl()
        await expect(redirectURL).toEqual('https://www.zoomcare.com/login')
    });

    it('Verify that the user is able to cancel booking', async () => {
        await browser.back()
        await schedulePage.cancelBookingBtn.waitForClickable({reverse:false})
        await schedulePage.cancelBookingBtn.click()
        await expect(schedulePage.cancelBookingBtn).not.toBeExisting()
    });
});

