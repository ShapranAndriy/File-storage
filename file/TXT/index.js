'use strict';
const fs = require('fs');
const File = require('../../file');
const TXTCommand = require('./TXTCommand');

class TXTFile extends File {
    constructor(name, type, path, bufferData) {
        super(name, type, path, bufferData);
    }

    static factory (path, cb) {
        fs.readFile(path, (error, data) => { 
            if (error) cb(error, data);
            else {
                const file = new TXTFile(path, null, null, data);
                file.initialize(path);
                cb(error, file);
            }
        });
    }

    /**
     * @param {TXTCommand} command - command for *.TXT file.
     * @param {String} data - new text.
     */
    action(Command, data) {
        const command = new Command(this);
        command.execute(data);

        this._commands === null ? this._commands = [command] : this._commands.push(command);
    }

    undo() {

    }
}

module.exports = TXTFile;