'use strict';

const ICommand = require('../ICommand');

class BMPCommand extends ICommand {
    constructor(file) {
        super();
        this._BMPFile = file;
        this._commands = null;
    }
}

module.exports = BMPCommand;