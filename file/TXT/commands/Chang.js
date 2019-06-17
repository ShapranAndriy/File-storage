'use strict';

const TXTCommand = require('../TXTCommand');

class Chang extends TXTCommand {
    constructor(file) {
        super(file);
    }

    execute() {
        console.log(`Run command "AddText"...`);
        console.log(`Add text to file: ${this._TXTFile._name}`);
    }

    undo() {
        
    }
}

module.exports = Chang;