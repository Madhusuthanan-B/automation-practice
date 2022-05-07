import { Given, Then, When } from "@cucumber/cucumber";

Given(/^npmjs is opened$/, async function () {
    await browser.url("https://www.npmjs.com/");
});

When(/^Search with (.*)$/, async function (searchItem: string) {
    console.log(`Search item`, searchItem);
    const ele = await $(`[name=q]`);
    await ele.setValue(searchItem);
    await browser.keys("Enter");
    await browser.pause(1000);
});

Then(/^Click on the first search result$/, async function () {
    const ele = await $(`//*[@id="main"]/div[2]/div/section[1]/div[1]/div[1]/a`);
    ele.click();
    await browser.pause(1000);
});

Then(/^The URL should match (.*)$/, async function (expectedURL) {
    const browserUrl = await browser.getUrl();
    expect(browserUrl).toBe(expectedURL);
});


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
    const numberString = `12345`;
    const ele = await $(`[type=number]`);
    for (let i = 0; i < numberString.length; i++) {
        await browser.pause(1000);
        await browser.keys(numberString[i]);
    }
    const finalValue = await ele.getValue();
    expect(finalValue).toBe(numberString);
});