const ScreenFactory = require('../screens/screen.factory');

class Page {
    constructor() {
        this.screens = {}
    }

    getScreen(screenName) {
        if (!(screenName in this.screens)) {
            this.screens[screenName] = ScreenFactory.getScreen(screenName);
        }
        return this.screens[screenName];
    }
}

module.exports = Page;
