const IFile = require('./IFile');
const fs = require('fs');

class File extends IFile {
    constructor(path, name, type, bufferData) {
        super(name, type, path, bufferData);
    }

    /**
     * 
     * @param {String} path - path to the file.
     */
    static factory(path) {
        return new Promise((resolve, reject) => {
           fs.readFile(path, (error, data) => {
               if (error) reject(error);
               else {
                   const file = new File(path, null, null, data);
                   file.initialize(path);
                   resolve(file);
               }
           });
        });
    }

    action(Command, data) {
        const command = new Command(this);
        command.execute(data);

        this._commands === null ? this._commands = [command] : this._commands.push(command);
    }

    undo() {

    }

    /**
    * @private
    * @param {String} path - path to the file.
    */
    initialize(path) {
        const file = path.split('/');
        const info = file.pop().split('.');
        this._name = info[0];
        this._type = info.pop();
    }
}

module.exports = File;