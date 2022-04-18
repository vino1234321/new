const {Given} = require("@wdio/cucumber-framework");

const urlConfig = require("../config/url.conf");
const Actions = require("../pages/actions");


Given(/^I am on the (.*) page$/, async (page) => {
    const url = urlConfig[page];
    await Actions.navigateTo(url);
});
