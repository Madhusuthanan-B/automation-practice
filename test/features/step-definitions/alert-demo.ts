import { Given, Then, When } from "@cucumber/cucumber";

Given(/^Alert example page is opened$/, async function () {
    await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
});


When(/^The user clicks on "Click for JS Alert" button$/, async function () {
    await $(`button=Click for JS Alert`).click();
});


Then(/^It should open up an alert$/, async function () {
    if (await browser.isAlertOpen()) {
        await browser.acceptAlert();
    }
});