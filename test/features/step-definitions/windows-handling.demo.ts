import { Given, Then, When } from "@cucumber/cucumber";

Given(/^Windows example page is opened$/, async function () {
    await browser.url("https://the-internet.herokuapp.com/windows");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
});


When(/^The user clicks on "Elemental Selenium" link$/, async function () {
    await $(`=Elemental Selenium`).click();
});


Then(/^There should be two new browser windows opened$/, async function () {
    const widowHandles = await browser.getWindowHandles();
    for (let i = 0; i < widowHandles.length; i++) {
        await browser.switchToWindow(widowHandles[i]);
        let newWindowTitle = await browser.getTitle();

        if (newWindowTitle === `Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro`) {
            const headText = await $(`<h1>`).getText();
            expect(headText).toBe(`Elemental Selenium`);
            break;
        }
    }
});