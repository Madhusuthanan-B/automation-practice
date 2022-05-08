import { Given, Then, When } from "@cucumber/cucumber";

Given(/^File upload page is opened$/, async function () {
    await browser.url("https://the-internet.herokuapp.com/upload");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
});


When(/^The user clicks on "Choose File" button and uploads a file$/, async function () {
    await $(`#file-upload`).addValue(`${process.cwd()}/data/dummy.txt`);
    await $(`#file-submit`).click();
});

Then(/^we should see file uploaded message$/, async function () {
    browser.pause(1000);
    const text = await $(`<h3>`).getText();
    expect(text).toBe(`File Uploaded!`);
});