'use strict';
const server = require('./server');
const Router = require('./router');
const db = require('./db');

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

// APIs
router.post('/api/files', (request, response) => {
    db.files()
        .then(files => {
            const json = JSON.stringify(files);
            response.writeHead(200, {"Content-Type": "application/json"});
            response.end(json);
        })
        .catch(error => {
            const json = JSON.stringify(error);
            response.writeHead(404, {"Content-Type": "application/json"});
            response.end(json);
        });
});

server.start(2000, router);