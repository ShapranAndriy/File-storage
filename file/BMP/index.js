'use strict';
const Jimp = require('jimp');
const File = require('../../file');

class BMPFile extends File {
    constructor(name, type, path, bufferData) {
        super(name, type, path, bufferData);
    }

    /**
     * @param {String} path - path to the file
     * @param {function(Error, File)} cb - 
     */
     static factory(path) {
         return new Promise((resolve, reject) => {

            Jimp.read(path, (error, data) => {
                if (error) reject(error);
                else if (data) {
                    const file = new BMPFile(path, null, null, data);
                    file.initialize(path);
                    resolve(file);
                }
            });        
         });
     }

    /**
     * @param {BMPCommand} command - command for *.TXT file.
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
module.exports = BMPFile;