const Controller = require('./controller');
const 
const fs = require('fs');

class FileController extends Controller {
    constructor() {

    }

    /**
     * @param {IFile} file - class IFile.
     * @returns {IFile} - class IFile.
     */
    download(fiel) {

    }

    /**
     * @param {String} path - paht to the file.
     * @returns {IFile} - class IFile.
     */
    upload = new Promise((resolve, reject) => {
        const file = 

        fs.readFile(path, (error, data) => {
            _data = data;
        });
    });

    upload(path) {
        const _data = null;

        fs.readFile(path, (error, data) => {
            _data = data;
        });
    }

    /**
     * @param {File} file
     */
    change(file) {

    }
}

module.exports = FileController;