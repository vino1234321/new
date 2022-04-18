const fs = require('fs');
const path = require('path');

class ScreenFactory {
    static getScreen(screenName) {
        return ScreenFactory.createScreen([
            `./web/${screenName}.js`
        ]);
    }

    static createScreen(trialPaths) {
        for (const trialPath of trialPaths) {
            if (fs.existsSync(path.join(__dirname, trialPath))) {
                const Screen = require(trialPath);
                return new Screen();
            }
        }
        throw new Error(`Screen ${trialPaths.join(' or ')} not found!`);
    }
}

module.exports = ScreenFactory;
