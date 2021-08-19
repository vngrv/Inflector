const path = require('path');

module.exports = class Inflector {
    constructor () {
        this.striptName = path.basename(__filename);
    }

    get filename () {
        return this.scriptName.split('.');
    }

    test() {
        return 'test';
    }
}

