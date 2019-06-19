'use strict';

const path = require('path');
const assert = require('assert');

const TXTFile = require('../file/TXT');
const TXT = require('../file/TXT/commands');
const txtPath = './db/files/1.txt';

function testRead() {
    TXTFile.factory(txtPath, (error, txtFile) => {
        assert.ifError(error);
        assert.notEqual(null, txtFile._bufferData);
    });
}

function testWrite() {
    TXTFile.factory(txtPath, (error, file) => {
        file.action(TXT.chang, 'testWrite');
        file.action(TXT.chang, 'testWrite');
        file.action(TXT.chang, 'testWrite');
    });
}

module.exports.test = () => {
    testRead();
    testWrite();
}