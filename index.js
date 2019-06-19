'use strict';
const server = require('./server');
const Router = require('./router');
const FileController = require('./controller/FileController');
const TXT = require('./file/TXT/commands');
const db = require('./db');

const router = new Router();
const fileController = new FileController();

// APIs
router.get('/api/files', (request, response) => {
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

router.post('/api/file/chang', (request, response) => {
    const {index, command, data} = request.body;
    db.findFileByIndex(index)
    .then(file => {
        fileController.change(file.path, TXT[command], data).then(f => {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end(`Command ${command}, OK.`);
        });
    });   
});

server.start(2000, router);