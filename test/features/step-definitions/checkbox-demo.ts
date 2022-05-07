import { Given, Then, When } from "@cucumber/cucumber";

Given(/^A checkbox web page is opened$/, async function () {
    await browser.url("https://the-internet.herokuapp.com/checkboxes");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
});

When(/^The user clicks on first checkbox$/, async function () {
    const element = await $(`//form//input[1]`);
    await element.click();
});

Then(/^The first checkbox should be checked$/, async function() {
    const element = await $(`//form//input[1]`);
    const isSelected = await element.isSelected();
    expect(isSelected).toBeTruthy();
});