const Controller = require('./controller');
const db = require('../db');
const File = require('../file');

class FileController extends Controller {
    constructor() {
        super();
    }

    /**
     * @param {String} path
     * @param {Command} command 
     */
    change(path, command, data) {
        return new Promise((resolve, reject) => {
            File.factory(path, (error, file) => {
                if(error) {
                    reject(error);
                }
                else {
                    file.action(command, data);
                    resolve(file)
                }
            });
        });
    }
}

module.exports = FileController;