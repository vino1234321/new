const Screen = require('../../screen');
const {forEach} = require("lodash");

class CreateBookingScreen extends Screen {
    constructor() {
        super();
        this.title = '//h6[contains(text(), "Details")]';
        this.bookingLocation = (location = undefined) => `${location ? `(//*[contains(text(), "${location}")])[1]` : '(//input)[1]'}`;
        this.bookingProduct = (product = undefined) =>  `${product ? `(//*[contains(text(), "${product}")])[1]` : '(//input)[2]'}`;
        this.arrivalDate = '(//input)[3]';
        this.numberOfPeople = '(//input)[4]';
        this.numberOfPeopleUpArrow='(//span[@class="mud-button-label"])[1]';
        this.availableSlot = '(//div[@class="mud-chipset"]//div)[1]';
        this.confirmTitle = '//h6[contains(text(), "Confirm")]';
        this.agreeConfirm = '//button/span[contains(text(), "YES")]';
        this.firstName = '(//input[@type="text"])[1]';
        this.lastName = '(//input[@type="text"])[2]';
        this.dob = '(//input[@type="text"])[3]';
        this.email = '(//input[@type="text"])[4]';

        this.confirmEmail = '(//input[@type="text"])[5]';
        this.mobileNumber = '(//input[@type="text"])[6]';
        this.passportNumber = '(//input[@type="text"])[7]';

        this.sex = (sex = undefined) => `${sex ? `(//*[contains(text(), "${sex}")])[1]` : '(//input[@type="text"])[8]'}`;
        this.ethnicity = (ethnicity = undefined) => `${ethnicity ? `(//*[contains(text(), "${ethnicity}")])[1]` : '(//input[@type="text"])[8]'}`;
        this.vaccinationStatus = (vaccinationStatus = undefined) => `${vaccinationStatus ? `(//*[contains(text(), "${vaccinationStatus}")])[1]` : '(//input[@type="text"])[8]'}`;
        this.destination = (destination = undefined) => `${destination ? `(//*[contains(text(), "${destination}")])[1]` : '(//input[@type="text"])[8]'}`;
        this.travelPurpose = (travelPurpose = undefined) => `${travelPurpose ? `(//*[contains(text(), "${travelPurpose}")])[1]` : '(//input[@type="text"])[9]'}`;
        this.numberOfPeopleTravelling = (numberOfPeopleTravelling = undefined) => `${numberOfPeopleTravelling ? `(//*[@class="mud-list-item mud-list-item-gutters mud-list-item-clickable mud-ripple"]//p[contains(text(), "${numberOfPeopleTravelling}")])[1]` : '(//input[@type="text"])[9]'}`;
        this.hearAbout = (hearAbout = undefined) => `${hearAbout ? `(//*[contains(text(), "${hearAbout}")])[1]` : '(//input[@type="text"])[9]'}`;
        this.continuousCough = (continuousCough = undefined) => `${continuousCough ? `(//*[@class="mud-list-item mud-list-item-gutters mud-list-item-clickable mud-ripple"]//p[contains(text(), "${continuousCough}")])[1]` : '(//input[@type="text"])[9]'}`;
        this.changeInSmell = (changeInSmell = undefined) => `${changeInSmell ? `(//*[@class="mud-list-item mud-list-item-gutters mud-list-item-clickable mud-ripple"]//p[contains(text(), "${changeInSmell}")])[1]` : '(//input[@type="text"])[9]'}`;
        this.contactWithSomeOne = (contactWithSomeOne = undefined) => `${contactWithSomeOne ? `(//*[@class="mud-list-item mud-list-item-gutters mud-list-item-clickable mud-ripple"]//p[contains(text(), "${contactWithSomeOne}")])[1]` : '(//input[@type="text"])[9]'}`;
        this.streetAddress = '(//input[@type="text"])[9]';
        this.city = '(//input[@type="text"])[10]';
        this.country = '(//input[@type="text"])[11]'; 
        this.zipCode = '(//input[@type="text"])[12]';



           // this.checkBox='(//input[@type="checkbox"])[i]';



        this.payandbook ='//span[contains(text(),"Book & Pay")]';
        this.email2= '//*[@id="email"]';
        this.cardnumber='//*[@id="cardNumber"]';
        this.expirydate='//*[@id="cardExpiry"]';
        this.cvv='//*[@id="cardCvc"]';
        this.nameoncard='//*[@id="billingName"]';
        this.billingCountry = '//*[@id="billingCountry"]';
        this.saveCard='//*[@id="enableStripePass"]';
        this.phoneNumber='//*[@id="phoneNumber"]';
        this.pay='//button[@type="submit"]';
        this.addMember='//span[contains(text(),"Add Members")]';
        this.member2='//div[contains(text(), "Member 2")]';
        this.member3='//div[contains(text(), "Member 3")]';
        this.member2FirstName='(//input[@type="text"])[1]';
        this.secondName2='(//input[@type="text"])[2]';
        this.dateOfBirth2='(//input[@type="text"])[3]';
        this.emailMember2='(//input[@type="text"])[4]';
        this.reEmailMember2='(//input[@type="text"])[5]';
        this.passportnumber2='(//input[@type="text"])[6]';
        this.sex2='(//input[@type="text"])[7]';
        this.firstName3='(//input[@type="text"])[1]';
        this.secondName3='(//input[@type="text"])[2]';
        this.dateOfBirth3='(//input[@type="text"])[3]';
        this.emailMember3='(//input[@type="text"])[4]';
        this.reEmailMember3='(//input[@type="text"])[5]';
        this.passportnumber3='(//input[@type="text"])[6]';
        this.sex3='(//input[@type="text"])[7]';
        this.doYouWant='(//button[@type="button"])[4]';
        this.closeAddMember='(//button[@type="button"])[1]';

        this.regionOptions = (region = undefined) => `${region ? `(//*[contains(text(), "${region}")])[1]` : '(//input)[1]'}`;

    }


}

module.exports = CreateBookingScreen;
