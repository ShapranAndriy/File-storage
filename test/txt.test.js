'use strict';

const path = require('path');
const assert = require('assert');

const TXTFile = require('../file/TXT');
const TXT = require('../file/TXT/commands');

const txtPath = './db/files/1.txt';

function testTxt() {
    TXTFile.factory(txtPath, (error, txtFile) => {
        txtFile.execute(TXT.chang);
    });
}

function testRead() {
    TXTFile.factory(txtPath, (error, txtFile) => {
        assert.ifError(error);
        assert.notEqual(null, txtFile._bufferData);
    });
}

module.exports.test = () => {
    testRead();
    testTxt();
}