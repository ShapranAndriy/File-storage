
const assert = require('assert');
const commands = require('../file/BMP/commands');
const bmp = require('../file/BMP');
const db = require('../db');
const Jimp = require('jimp');

function testResize() {
    db.findFileByIndex(3).then(file => {
        bmp.factory(file.path).then(image => {
            image.action(commands.resize, { width: 1024, height: 1024 });
        });
    });
};

module.exports.test = () => {
    testResize();
};