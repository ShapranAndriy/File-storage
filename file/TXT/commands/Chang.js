'use strict';
const fs = require('fs');
const TXTCommand = require('../TXTCommand');

class Chang extends TXTCommand {
    constructor(file) {
        super(file);
        this._oldBufferData = this._TXTFile._bufferData;
    }

    execute(data) {
        this._TXTFile._bufferData = data;
        (this._commands) ? this._commands.push(this) : this._commands = [this];

        fs.writeFile(this._TXTFile._path, this._TXTFile._bufferData, 'utf8', (error) => {
            if (error) console.error(error);
        });
    }

    undo() {
        command = this._commands.pop();
        this._TXTFile._bufferData = command._oldBufferData;

        fs.writeFile(this._TXTFile._path, this._TXTFile._bufferData, 'utf8', (error) => {
            console.error(error);
        });
    }
}

module.exports = Chang;