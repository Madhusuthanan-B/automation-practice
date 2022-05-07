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