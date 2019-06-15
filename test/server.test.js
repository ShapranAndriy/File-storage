const server = require('../server');
const assert = require('assert');

const router = {
    route: (request, response) => console.log(request.method)
        }

function testStart() {
    server.start(2000, router);
    assert.equal(true, server.serverIsWork());
}

function testStop() {
    server.stop();
    assert.equal(false, server.serverIsWork());
}

module.exports.test = () => {
    testStart();
    setTimeout(testStop, 10);
}