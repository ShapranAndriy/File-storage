'use strict';

const ICommand = require('../ICommand');

class TXTCommand extends ICommand {
    constructor(file) {
        super();
        this._TXTFile = file;
        this._commands = null;
    }
}

module.exports = TXTCommand;