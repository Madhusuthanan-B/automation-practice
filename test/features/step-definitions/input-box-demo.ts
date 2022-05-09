import { Given, Then, When } from "@cucumber/cucumber";

Given(/^An input box web page is opened$/, async function () {
    await browser.url("https://the-internet.herokuapp.com/inputs");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
});


When(/^The user selects the input box$/, async function () {
    const ele = await $(`[type=number]`);
    expect(ele).toBeClickable();
    ele.click();
});

Then(/^Interact with the input box$/, async function () {
    console.log(process.env.TEST_VARIABLE);
    const numberString = `12345`;
    const ele = await $(`[type=number]`);
    for (let i = 0; i < numberString.length; i++) {
        await browser.pause(1000);
        await browser.keys(numberString[i]);
    }
    const finalValue = await ele.getValue();
    expect(finalValue).toBe(numberString);
});