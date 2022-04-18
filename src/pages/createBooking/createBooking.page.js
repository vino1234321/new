const moment = require('moment');
const {faker} = require('@faker-js/faker');

const Page = require('../index');
const Actions = require('../actions');

class CreateBookingPage extends Page {
    get bookingScreen() {
        return this.getScreen('createBooking/createBooking.screen');
    }

    async waitForPageLoad() {
        await Actions.waitForVisible(this.bookingScreen.title, 70000);

    }
 

    async selectLocation(location) {
        await Actions.pause(20);
        await Actions.click(this.bookingScreen.bookingLocation());
        await Actions.pause(10);
        await Actions.scrollIntoView(this.bookingScreen.bookingLocation(location));
        await Actions.click(this.bookingScreen.bookingLocation(location));
        await Actions.pause(10);
    }

    async selectProduct(product) {
        await Actions.click(this.bookingScreen.bookingProduct());
        await Actions.pause(10);
        await Actions.scrollIntoView(this.bookingScreen.bookingProduct(product));
        await Actions.click(this.bookingScreen.bookingProduct(product));
        await Actions.pause(10);
    }

    async enterFutureDate(date) {
        await Actions.click(this.bookingScreen.agreeConfirm);
        await Actions.pause(10);
        await Actions.setValue(this.bookingScreen.arrivalDate, moment().add(date, 'days').format('DD/MM/YYYY'));
    }

    async enterNumberOfPeople(count) {
        await Actions.pause(5);
        await Actions.setValue(this.bookingScreen.numberOfPeople, count);
        //await Actions.pause(10);
        //await Actions.click(this.bookingScreen.numberOfPeopleUpArrow);
       // await Actions.click(this.bookingScreen.numberOfPeopleUpArrow);
        await Actions.pause(2);
    }

    async selectAvailableSlot() {
        await Actions.click(this.bookingScreen.availableSlot);
    }

    async confirmSelectedSlot() {
        await Actions.waitForVisible(this.bookingScreen.confirmTitle, 7000);
        await Actions.click(this.bookingScreen.agreeConfirm);
        await Actions.pause(10);
    }
    async  enterPersonalDetails(count) {

        await Actions.setValue(this.bookingScreen.firstName, faker.name.firstName());
        await Actions.pause(7);
        await Actions.setValue(this.bookingScreen.lastName, faker.name.lastName());
        await Actions.pause(7);
        await Actions.setValue(this.bookingScreen.dob, '01/01/2000');
        await Actions.pause(7);
        const email = faker.internet.email();
        await Actions.setValue(this.bookingScreen.email, email);
        await Actions.pause(7);
        await Actions.setValue(this.bookingScreen.confirmEmail, email);
        await Actions.pause(7);
        await Actions.setValue(this.bookingScreen.mobileNumber, '07721362398');
        await Actions.pause(7);
        await Actions.setValue(this.bookingScreen.passportNumber, '533380006');
        await Actions.pause(7);
        await Actions.click(this.bookingScreen.sex());
        await Actions.pause(7);
        await Actions.click(this.bookingScreen.sex('Female'));
        await Actions.pause(7);
        await Actions.click(this.bookingScreen.ethnicity());
        await Actions.pause(7);
        await Actions.scrollIntoView(this.bookingScreen.ethnicity('BLACK - AFRICAN'));
        await Actions.click(this.bookingScreen.ethnicity('BLACK - AFRICAN'));
        await Actions.pause(7);
        await Actions.click(this.bookingScreen.vaccinationStatus());
        await Actions.pause(7);
        await Actions.scrollIntoView(this.bookingScreen.vaccinationStatus('Double Vaccinated + Booster'));
        await Actions.click(this.bookingScreen.vaccinationStatus('Double Vaccinated + Booster'));
        await Actions.pause(7);
        await Actions.click(this.bookingScreen.destination());
        await Actions.pause(10);
        await Actions.scrollIntoView(this.bookingScreen.destination('Cambodia'));
        await Actions.click(this.bookingScreen.destination('Cambodia'));
        await Actions.pause(10);
        await Actions.click(this.bookingScreen.travelPurpose());
        await Actions.pause(10);
        await Actions.click(this.bookingScreen.travelPurpose('Holiday'));
        await Actions.pause(10);
        await Actions.click(this.bookingScreen.numberOfPeopleTravelling());
        await Actions.pause(10);
        await Actions.click(this.bookingScreen.numberOfPeopleTravelling('1'));
        await Actions.pause(7);
        await Actions.click(this.bookingScreen.hearAbout());
        await Actions.pause(7);
        await Actions.scrollIntoView(this.bookingScreen.hearAbout('Google'));
        await Actions.click(this.bookingScreen.hearAbout('Google'));
        await Actions.pause(7);
        await Actions.click(this.bookingScreen.continuousCough());
        await Actions.pause(7);
        await Actions.click(this.bookingScreen.continuousCough('No'));
        await Actions.pause(7);
        await Actions.click(this.bookingScreen.changeInSmell());
        await Actions.pause(7);
        await Actions.click(this.bookingScreen.changeInSmell('No'));
        await Actions.pause(7);
        await Actions.click(this.bookingScreen.contactWithSomeOne());
        await Actions.pause(7);
        await Actions.click(this.bookingScreen.contactWithSomeOne('No'));
        await Actions.pause(7);

    }

    async addMember(){
        await Actions.click(this.bookingScreen.addMember);
    }

    async member2Details()
    {
        await Actions.click(this.bookingScreen.member2);
        await Actions.setValue(this.bookingScreen.member2FirstName, faker.name.firstName());
        await Actions.setValue(this.bookingScreen.secondName2, faker.name.lastName());
        await Actions.setValue(this.bookingScreen.dateOfBirth2, '01/02/1995');
        const email2 = faker.internet.email();
        await Actions.setValue(this.bookingScreen.emailMember2, email2);
        await Actions.setValue(this.bookingScreen.reEmailMember2, email2);
        await Actions.setValue(this.bookingScreen.passportnumber2, 'er234tr3');
        await Actions.click(this.bookingScreen.sex2());
        await Actions.pause(2);
        await Actions.click(this.bookingScreen.sex2('Female'));
        await Actions.click(this.bookingScreen.member2);

    }

    async member3Details()
    {
        await Actions.click(this.bookingScreen.member3);
        await Actions.setValue(this.bookingScreen.firstName3, faker.name.firstName());
        await Actions.setValue(this.bookingScreen.secondName3, faker.name.lastName());
        await Actions.setValue(this.bookingScreen.dateOfBirth3, '01/02/1995');
        const email3 = faker.internet.email();
        await Actions.setValue(this.bookingScreen.emailMember3, email3);
        await Actions.setValue(this.bookingScreen.reEmailMember3, email3);
        await Actions.setValue(this.bookingScreen.passportnumber3, 'er234tr3');
        await Actions.click(this.bookingScreen.sex3());
        await Actions.pause(2);
        await Actions.click(this.bookingScreen.sex3('Male'));
        await Actions.click(this.bookingScreen.member3);

    }
    async enterPersonal(){
        await Actions.setValue(this.bookingScreen.streetAddress, 'barbican');
        await Actions.pause(7);
        await Actions.setValue(this.bookingScreen.city, 'Bradford');
        await Actions.pause(7);
        await Actions.setValue(this.bookingScreen.country, 'England');
        await Actions.pause(7);
        await Actions.setValue(this.bookingScreen.zipCode, '608458');
        await Actions.pause(7);
       /* const checkBoxElement=0;
        for await (checkBoxElement of this.bookingScreen.checkbox) {
            await Actions.click(checkBox);
        }*/
        const checkboxLength = document.getElementsByClassName('mud-checkbox-input').length;
        console.log(checkboxLength);
        const i=1;
        while(i<=checkboxLength){

            this.checkBox='(//input[@type="checkbox"])[i]';
        }
    }

    async doYouWantToContinue()
    {
        await Actions.click(this.bookingScreen.doYouWant);

    }

    async closeAddMember()
    {

        await Actions.click(this.bookingScreen.closeAddMember);
    }

    async payAndBookBtn()
        {
        await Actions.pause(7);
       await Actions.click(this.bookingScreen.payandbook);
        await Actions.pause(20);
    }

    async payment(){
        await Actions.pause(3);
        const email = faker.internet.email();
        await Actions.setValue(this.bookingScreen.email2,email);
        await Actions.pause(3);
        await Actions.setValue(this.bookingScreen.cardnumber,'4242424242424242');
        await Actions.pause(10);
        await Actions.setValue(this.bookingScreen.expirydate,'01/25');
        await Actions.pause(10);
        await Actions.setValue(this.bookingScreen.cvv,'444');
        await Actions.pause(10);
        await Actions.setValue(this.bookingScreen.nameoncard,'Brad');
        await Actions.pause(2);
        await Actions.selectByVisibleText(this.bookingScreen.billingCountry,'Greece');
        await Actions.pause(10);
        await Actions.click(this.bookingScreen.saveCard);
        await Actions.pause(3);
        await Actions.setValue(this.bookingScreen.phoneNumber,'+30 21 7 987 1234');
        await Actions.click(this.bookingScreen.pay);
        await Actions.pause(20);
    }


}

module.exports = CreateBookingPage;
