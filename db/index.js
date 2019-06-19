'use strict';

const db = require('./db.json');

/**
 * @returns {Promise<Array<File>, Error>} promise that returns a Array<File> if resolved, 
 * or an Arror if rejected.
 */
module.exports.files = () => new Promise((resolve, reject) => {
    db.files ? resolve(db.files) : reject(new Error('Error read files from DB.'));
});

/**
 * @returns {Promise<Array<File>, Error>} promise that returns a Array<File> if resolved, 
 * or an Arror if rejected.
 */
module.exports.findFile = (name, type) => new Promise((resolve, reject) => {

    db.files.forEach(file => {
        if (file.name === name && file.type === type) {
            resolve(file);
        }
        else {
            reject(new Error('File not found'));
        }
    });
});

/**
 * @returns {Promise<Array<File>, Error>} promise that returns a Array<File> if resolved, 
 * or an Arror if rejected.
 */
module.exports.findFileByPath = (path) => new Promise((resolve, reject) => {

    db.files.forEach(file => {
        if (file.path === path) {
            resolve(file);
        }
        else {
            reject(new Error('File not found'));
        }
    });
});

/**
 * @returns {Promise<Array<File>, Error>} promise that returns a Array<File> if resolved, 
 * or an Arror if rejected.
 */
module.exports.findFileByIndex = (index) => new Promise((resolve, reject) => {

    const file = db.files[index];
    file ? resolve(file) : reject(new Error('File not found'));
});