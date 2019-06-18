'use strict';

const db = require('./db.json');

/**
 * @returns {Promise<Array<File>, Error>} promise that returns a Array<File> if resolved, 
 * or an Arror if rejected.
 */

module.exports.files = () => new Promise((resolve, reject) => {
    db.files ? resolve(db.files) : reject(new Error('Error read files from DB.'));
});
