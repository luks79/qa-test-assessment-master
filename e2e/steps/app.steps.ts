const { Given, When, Then } = require('cucumber');
const { browser } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));
var global_wait = 2000;
const searchFormPO = require('../page-objects/search-form.po');

Given('I navigate to {string}', { timeout: 60 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(global_wait);
});

// using param for person name
When('I search for person named {string}', { timeout: 60 * 1000 }, async (string) => {
    await searchFormPO.selectSearchByPerson.click();
    await searchFormPO.inputSearchText.sendKeys(string);
    await searchFormPO.searchBtn.click();
    await browser.sleep(global_wait);
});

// using param for planet name
When('I search for planet named {string}', { timeout: 60 * 1000 }, async (string) => {
    await searchFormPO.selectSearchByPlanet.click();
    await searchFormPO.inputSearchText.sendKeys(string);
    await searchFormPO.searchBtn.click();
    await browser.sleep(global_wait);
});



// --- block for person results' box properties ---
Then('I see result card for person named {string}', { timeout: 60 * 1000 }, async (string) => {
    await chai.expect(searchFormPO.firstCharacterName.getAttribute('innerText'))
        .to.eventually.contain(string);
});


Then('I see person gender is {string}', { timeout: 60 * 1000 }, async (string) => {
    await chai.expect(searchFormPO.rowGender.getAttribute('innerText'))
        .to.eventually.contain(string);
});

Then('I see person birth year is {string}', { timeout: 60 * 1000 }, async (string) => {
    await chai.expect(searchFormPO.rowBY.getAttribute('innerText'))
        .to.eventually.contain(string);
});

Then('I see person has eye color {string}', { timeout: 60 * 1000 }, async (string) => {
    await chai.expect(searchFormPO.rowEyeColor.getAttribute('innerText'))
        .to.eventually.contain(string);
});

Then('I see person has skin color {string}', { timeout: 60 * 1000 }, async (string) => {
    await chai.expect(searchFormPO.rowSkinColor.getAttribute('innerText'))
        .to.eventually.contain(string);
});
// --- end ---

// --- block for planet results' box properties ---
Then('I see result card for planet named {string}', { timeout: 60 * 1000 }, async (string) => {
    await chai.expect(searchFormPO.firstPlanetName.getAttribute('innerText'))
        .to.eventually.contain(string);
});


Then('I see planet population is {string}', { timeout: 60 * 1000 }, async (string) => {
    await chai.expect(searchFormPO.rowPopulation.getAttribute('innerText'))
        .to.eventually.contain(string);
});

Then('I see planet gravity is {string}', { timeout: 60 * 1000 }, async (string) => {
    await chai.expect(searchFormPO.rowGravity.getAttribute('innerText'))
        .to.eventually.contain(string);
});

Then('I see planet climate is {string}', { timeout: 60 * 1000 }, async (string) => {
    await chai.expect(searchFormPO.rowClimate.getAttribute('innerText'))
        .to.eventually.contain(string);
});
// --- end ---


// flow in case not existing name
Then('Person is not found', { timeout: 60 * 1000 }, async () => {
    await chai.expect(searchFormPO.resultNotFound.getAttribute('innerText'))
        .to.eventually.contain('Not found');
});

// flow in case not existing planet
Then('Planet is not found', { timeout: 60 * 1000 }, async () => {
    await chai.expect(searchFormPO.resultNotFound.getAttribute('innerText'))
        .to.eventually.contain('Not found');
});


Then('I can see {int} results', { timeout: 60 * 1000 }, async (int) => {
 
    var rows = searchFormPO.rowCard.all(by.xpath('//div[contains(@class, "card-body")]'));
    var sum = rows.count(); 
    console.log(searchFormPO.rowCard);
    await chai.expect(searchFormPO.rowCard.count()).toBe(int);
});


