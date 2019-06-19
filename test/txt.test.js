'use strict';

const path = require('path');
const assert = require('assert');

const File = require('../file');
const TXT = require('../file/TXT/commands');
const txtPath = './db/files/1.txt';

function testRead() {
    File.factory(txtPath).then(file => {
        assert.notEqual(null, file._bufferData);
    })
    .catch(error => assert.ifError(error));
}

function testWrite() {
    File.factory(txtPath)
    .then(file => {
        file.action(TXT.chang, 'testWrite');
        file.action(TXT.chang, 'testWrite');
        file.action(TXT.chang, 'testWrite');
    })
    .catch(error => assert.ifError(error));
}

module.exports.test = () => {
    testRead();
    testWrite();
}