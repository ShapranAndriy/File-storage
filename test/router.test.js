'use strict'

const Router = require('../router');
const assert = require('assert');

let router = null;
const routsGet = [
    { path: '/', method: () => { return 1 } },
    { path: '/home', method: () => { return 2 } },
];
const routsPost = [
    { path: '/users', method: () => { return 1 } },
    { path: '/pages', method: () => { return 2 } },
];

function testCreateRouter() {
    router = new Router();
}

function testGet() {
    routsGet.forEach(rout => {
        router.get(rout.path, rout.method);
    });

    let get = router._routs['GET'];

    routsGet.forEach(rout => {
        assert.equal(rout.method, get['_routs'][rout.path]);
    });
}

function testPost() {

    routsPost.forEach(rout => {
        router.post(rout.path, rout.method);
    });

    let post = router._routs['POST'];

    routsPost.forEach(rout => {
        assert.equal(rout.method, post['_routs'][rout.path]);
    });
}

function testRouter() {

    const request = { url: '/', method: 'GET' };
    const response = {
        data: null,
        writeHead: () => { },
        write: (msg) => { data = msg; },
        end: (msg) => { console.log('end()'); }
    }

    router.route(request, response);
}

module.exports.test = () => {
    testCreateRouter();
    testGet();
    testPost();
    testRouter();
}