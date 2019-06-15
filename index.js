'use strict';
const server = require('./server');
const Router = require('./router');

const router = new Router();

router.get('/', (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(`Page ${request.url}`);
    response.end();
});

router.get('/home', (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write(`Page ${request.url}`);
    response.end();
});

server.start(2000, router);