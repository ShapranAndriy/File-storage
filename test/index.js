'use strict';

const testServer = require('./server.test');
const testRouter = require('./router.test');
const testTxt = require('./txt.test');

testServer.test();
testRouter.test();
testTxt.test();