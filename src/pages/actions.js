const _ = require('lodash');

class Actions {
    static validateUndefinedArgs(...args) {
        if (_.some(args, ((value) => value === undefined))) {
            throw Error('some args are undefined');
        }
    }

    static async navigateTo(url) {
        Actions.validateUndefinedArgs(url);
        await browser.url(url);
    }

    /**
     * @name click
     * @description  Click on an element.
     * @see {@link https://webdriver.io/docs/api/element/click}
     *
     * @param  selector  selector to click
     *
     * @returns {Promise<void>}
     */
    static async click(selector) {
        Actions.validateUndefinedArgs(selector);
        await $(selector).click();
    }

    /**
     * @name doubleClick
     * @description  Double-click on an element.
     * @see {@link https://webdriver.io/docs/api/element/doubleClick}
     *
     * @param  selector  selector to click
     *
     * @returns {Promise<void>}
     */
    static async doubleClick(selector) {
        Actions.validateUndefinedArgs(selector);
        await $(selector).doubleClick();
    }

    /**
     * @name setValue
     * @description Send a sequence of keystrokes to an element (clears value before).
     * @see {@link https://webdriver.io/docs/api/element/setValue}
     *
     * @param  selector
     * @param  {string} value to be added
     *
     * @returns {Promise<void>}
     */
    static async setValue(selector, value) {
        Actions.validateUndefinedArgs(selector);
        await $(selector).setValue(value);
    }

    /**
     * @name addValue
     * @description Add a value to an object found by given selector.
     * @see {@link https://webdriver.io/docs/api/element/addValue}
     *
     * @param  selector
     * @param  {string} value to be added
     *
     * @returns {Promise<void>}
     */
    static async addValue(selector, value) {
        Actions.validateUndefinedArgs(selector);
        await $(selector).addValue(value);
    }

    /**
     * @name isVisible
     * @description Check if element is visible using selector.
     * if there are multiple elements check visibility of first element.
     *
     * @param  selector selector to be visible
     *
     * @returns {Promise<boolean>}
     */
    static async isVisible(selector) {
        Actions.validateUndefinedArgs(selector);
        let returnValue;
        try {
            returnValue = $(selector).isDisplayed();
        } catch {
            returnValue = false;
        }
        return returnValue;
    }

    /**
     * @name waitForVisible
     * @description  wait for a selector to get visible in given time
     *
     * @param  selector    selector to get visible
     * @param  {Number}    waitInMS    timeout in ms
     *
     * @returns {Promise<boolean>}
     */
    static async waitForVisible(selector, waitInMS = 5000) {
        Actions.validateUndefinedArgs(selector);
        const condition = async() => await Actions.isVisible(selector);
        await $(selector).waitUntil(await condition, { timeout: waitInMS, timeoutMsg: `Element $ was expected to be visible`})
    }

    /**
     * @name selectByAttribute
     * @description Select option with a specific value.
     * @see {@link https://webdriver.io/docs/api/element/selectByAttribute}
     *
     * @param  selector
     * @param  {string} attribute attribute of option element to get selected
     * @param  {string | number} value value of option element to get selected
     *
     * @returns {Promise<void>}
     */
    static async selectByAttribute(selector, attribute, value) {
        Actions.validateUndefinedArgs(selector, attribute, value);
        await $(selector).selectByAttribute(attribute, value);
    }

    /**
     * @name selectByIndex
     * @description Select option with a specific index.
     * @see {@link https://webdriver.io/docs/api/element/selectByIndex}
     *
     * @param  selector
     * @param  {number} index option index
     *
     * @returns {Promise<void>}
     */
    static async selectByIndex(selector, index) {
        Actions.validateUndefinedArgs(selector, index);
        await $(selector).selectByIndex(index)
    }

    /**
     * @name selectByVisibleText
     * @description Select option with displayed text matching the argument.
     * @see {@link https://webdriver.io/docs/api/element/selectByVisibleText}
     *
     * @param  selector
     * @param  {string | number} text text of option element to get selected
     *
     * @returns {Promise<void>}
     */
    static async selectByVisibleText(selector, text) {
        Actions.validateUndefinedArgs(selector, text);
        await $(selector).selectByVisibleText(text)
    }

    /**
     * @name pause
     * @description Pauses execution for a specific amount of time.
     * @see {@link https://webdriver.io/docs/api/browser/pause}
     *
     * @param  {number} seconds time in seconds
     *
     * @returns {Promise<void>}
     */
    static async pause(seconds) {
        await browser.pause(seconds * 1000);
    }

    static async scrollIntoView(selector) {
        await $(selector).scrollIntoView();
    }

}

module.exports = Actions;
