const { ANDROID_CONFIG } = require("@wdio/cli/build/constants");
const {When, Then} = require("@wdio/cucumber-framework");

const CreateBookingPage = require('../pages/createBooking/createBooking.page');

const createBookingPage = new CreateBookingPage();

When(/^I enter (valid|inValid) details for booking$/, async function (type) {
    if (type === 'valid') {
        await createBookingPage.waitForPageLoad();
        await createBookingPage.selectLocation('Bradford Clinic');
        await createBookingPage.selectProduct('Express RT-PCR Test - Fit To Fly (Results in 3 hours)');
        await createBookingPage.enterFutureDate(2);
        await createBookingPage.enterNumberOfPeople(1);
        await createBookingPage.selectAvailableSlot();
        await createBookingPage.confirmSelectedSlot();
        await createBookingPage.enterPersonalDetails(1);
        await createBookingPage.enterPersonal();
        await createBookingPage.payAndBookBtn();

    } else {
        throw new Error('Method not implemented...');
    }
});

Then(/^I should see my booking submitted$/, async function () {
        await createBookingPage.payment();
});




When(/^I chose (.*), (.*), I enter valid details for booking$/, async function (location, pro) {
    await createBookingPage.waitForPageLoad();

    await createBookingPage.selectLocation(location);
        await createBookingPage.selectProduct(pro);

        await createBookingPage.enterFutureDate(2);
        await createBookingPage.enterNumberOfPeople(1);
        await createBookingPage.selectAvailableSlot();
        await createBookingPage.confirmSelectedSlot();
        await createBookingPage.enterPersonalDetails();
        await createBookingPage.enterPersonal();
        await createBookingPage.payAndBookBtn();
});


When(/^I enter valid details for booking and I enter (.*) number of people$/, async function (count) {

    await createBookingPage.waitForPageLoad();
    await createBookingPage.selectLocation('Bradford Clinic');
    await createBookingPage.selectProduct('Express RT-PCR Test - Fit To Fly (Results in 3 hours)');
    await createBookingPage.enterFutureDate(2);
    await createBookingPage.enterNumberOfPeople(count);
    await createBookingPage.selectAvailableSlot();
    await createBookingPage.confirmSelectedSlot();
    await createBookingPage.enterPersonalDetails(count);
    if (count<1) {
        await createBookingPage.addMember();
        await createBookingPage.member2Details();
        if (count<2){
            await createBookingPage.member3Details();
            await createBookingPage.doYouWantToContinue();
            await createBookingPage.enterPersonal();
        }
        else{
            await createBookingPage.doYouWantToContinue();
            await createBookingPage.enterPersonal();
        }

    }

    else{
        await createBookingPage.enterPersonal();
    }

    await createBookingPage.payAndBookBtn();

});
Then(/^I should see my booking submitted for multiple members$/, async function () {
    await createBookingPage.payment();
});
Then(/^I should see payment page$/, async function () {
    await createBookingPage.payment();
});