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

            File.factory(path).then(file => {
                file.action(command, data);
                resolve(file)
            })
            .catch(error => reject(error));
        });
    }
}

module.exports = FileController;