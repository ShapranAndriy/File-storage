const IFile = require('./IFile');
const fs = require('fs');


class File extends IFile {
    constructor(path, name, type, bufferData) {
        super(name, type, path, bufferData);
    }

    /**
     * 
     * @param {String} path - path to the file.
     * @param {function(Error, File)} cb - error: Error, data: File 
     */
    static factory (path, cb) {
        fs.readFile(path, (error, data) => { 
            if (error) cb(error, data);
            else {
                const file = new File(path, null, null, data);
                file.initialize(path);
                cb(error, file);
            }
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