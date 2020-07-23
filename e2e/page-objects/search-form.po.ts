import { element, by } from 'protractor';

module.exports = {
    get inputSearchText() {
        return element(by.id('query'));
    },
    get searchBtn() {
        return element(by.css('button'));
    },
    get firstCharacterName() {
        return element(by.css('app-character h6'));
    },
    get firstPlanetName() {
        return element(by.css('app-planet h6'));
    },
    get selectSearchByPerson() {
        return element(by.id('people'));
    },
    get selectSearchByPlanet() {
        return element(by.id('planets'));
    },
    get rowPopulation() {
        return element(by.xpath('//div[contains(@class, "card-body")]/div[1]/div[2]'));
    },
    get rowClimate() {
        return element(by.xpath('//div[contains(@class, "card-body")]/div[2]/div[2]'));
    },
    get rowGravity() {
        return element(by.xpath('//div[contains(@class, "card-body")]/div[3]/div[2]'));
    },
    get resultNotFound() {
        return element(by.id('not_found'));
    },
    get rowGender() {
        return element(by.xpath('//div[contains(@class, "card-body")]/div[1]/div[2]'));
    },
    get rowBY() {
        return element(by.xpath('//div[contains(@class, "card-body")]/div[2]/div[2]'));
    },
    get rowEyeColor() {
        return element(by.xpath('//div[contains(@class, "card-body")]/div[3]/div[2]'));
    },
    get rowSkinColor() {
        return element(by.xpath('//div[contains(@class, "card-body")]/div[4]/div[2]'));
    },
    
    get rowCard() {
        return element(by.xpath('//div[contains(@class, "col")]/div/div/'));
    },

    
};
