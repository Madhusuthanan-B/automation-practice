import { Given, Then, When } from "@cucumber/cucumber";

Given(/^Key press page is opened$/, async function () {
    await browser.url("https://the-internet.herokuapp.com/key_presses");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
});


When(/^The the user clears the typed value using keys$/, async function () {
    await $(`#target`).click();
    await $(`#target`).setValue('typing in input box');
    expect(await $(`#target`).getValue()).not.toBe(null);
    await browser.keys(['\uE009', 'a']);
    await browser.keys("Delete");

});

Then(/^The input box should be cleared$/, async function () {
    await browser.pause(1000);
    const val = await $(`#target`).getValue();
    console.log('foo', val);
    expect(val).toBe("");
});