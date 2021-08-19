const path = require('path');

class Inflector {
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

export default Inflector = Inflector;
