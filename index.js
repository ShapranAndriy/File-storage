'use strict';
const Server = require('./server');
const Router = require('./router');
const FileController = require('./controller/FileController');

const TXT = require('./file/TXT/commands');
const BMP = require('./file/BMP/commands');

const db = require('./db');


const router = new Router();
const fileController = new FileController();

// APIs
router.get('/api/files', (request, response) => {
    db.files()
        .then(files => {
            const json = JSON.stringify(files);
            response.writeHead(200, { "Content-Type": "application/json" });
            response.end(json);
        })
        .catch(error => {
            const json = JSON.stringify(error);
            response.writeHead(404, { "Content-Type": "application/json" });
            response.end(json);
        });
});

router.post('/api/file/chang', (request, response) => {
    const { index, command, data } = request.body;
    db.findFileByIndex(index)
        .then(file => {
            fileController.change(file.path, TXT[command], data).then(f => {
                response.writeHead(200, { "Content-Type": "text/plain" });
                response.end(`Command ${command}, OK.`);
            });
        }).catch(error => {
            const json = JSON.stringify(error);
            response.writeHead(404, { "Content-Type": "application/json" });
            response.end(json);
        });
});

router.post('/api/file/chang/img', (request, response) => {
    const { index, command, data } = request.body;
    db.findFileByIndex(index)
        .then(file => {
            fileController.changeImg(file.path, BMP[command], data).then(f => {
                response.writeHead(200, { "Content-Type": "text/plain" });
                response.end(`Command ${command}, OK.`);
            });
        }).catch(error => {
            const json = JSON.stringify(error);
            response.writeHead(404, { "Content-Type": "application/json" });
            response.end(json);
        });
});



Server.start(2000, router);